const { createClient } = require('@supabase/supabase-js');
const path = require('path');

// Load environment variables from .env.local
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  console.error('NEXT_PUBLIC_SUPABASE_URL:', !!supabaseUrl);
  console.error('SUPABASE_SERVICE_ROLE_KEY:', !!supabaseServiceKey);
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createMediaManagerUser() {
  const mediaManagerEmail = 'media@luxufe.com';
  const mediaManagerPassword = 'LuxufeMedia2024!';

  try {
    console.log('Creating media manager user...');

    // First, check if user already exists
    const { data: existingUser } = await supabase.auth.admin.listUsers();
    const userExists = existingUser.users?.find(user => user.email === mediaManagerEmail);
    if (userExists) {
      console.log('User already exists, updating role...');
      
      // Update the user's role to media_manager in the profiles table
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ role: 'media_manager' })
        .eq('id', userExists.id);

      if (profileError) {
        console.error('Error updating profile:', profileError);
        return;
      }

      console.log('Media manager user updated successfully!');
      console.log('Email:', mediaManagerEmail);
      console.log('Password:', mediaManagerPassword);
      console.log('User ID:', userExists.id);
      console.log('Role: media_manager');
      return;
    }

    // Create the user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: mediaManagerEmail,
      password: mediaManagerPassword,
      email_confirm: true,
    });

    if (authError) {
      console.error('Error creating user:', authError);
      return;
    }

    console.log('User created successfully:', authData.user.id);

    // Wait a moment for the trigger to create the profile
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Update the user's role to media_manager in the profiles table
    const { error: profileError } = await supabase
      .from('profiles')
      .update({ role: 'media_manager' })
      .eq('id', authData.user.id);

    if (profileError) {
      console.error('Error updating profile:', profileError);
      return;
    }

    console.log('Media manager user created successfully!');
    console.log('Email:', mediaManagerEmail);
    console.log('Password:', mediaManagerPassword);
    console.log('User ID:', authData.user.id);
    console.log('Role: media_manager');

  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

createMediaManagerUser();

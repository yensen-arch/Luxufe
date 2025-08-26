import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Temporarily disable middleware to fix session issue
  return NextResponse.next();
  
  // Original middleware code commented out for now
  /*
  let response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => req.cookies.set(name, value));
          response = NextResponse.next({
            request: {
              headers: req.headers,
            },
          });
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    }
  );

  // Check if user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log('Middleware - Path:', req.nextUrl.pathname, 'Session:', !!session);

  // Protect admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to login page
    if (req.nextUrl.pathname === '/admin/login') {
      // If user is already logged in, redirect to dashboard
      if (session) {
        console.log('Middleware - Redirecting logged in user to dashboard');
        return NextResponse.redirect(new URL('/admin/dashboard', req.url));
      }
      return response;
    }

    // For all other admin routes, require authentication
    if (!session) {
      console.log('Middleware - No session, redirecting to login');
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    // Check if user has admin role
    try {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      console.log('Middleware - Profile check:', { profile, profileError });

      if (profileError || profile?.role !== 'admin') {
        console.log('Middleware - Not admin, signing out');
        // User doesn't have admin role, sign them out and redirect to login
        await supabase.auth.signOut();
        return NextResponse.redirect(new URL('/admin/login', req.url));
      }

      console.log('Middleware - Admin access granted');
    } catch (error) {
      console.log('Middleware - Error checking profile:', error);
      // Error fetching profile, sign out and redirect to login
      await supabase.auth.signOut();
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  return response;
  */
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};

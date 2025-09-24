"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Plus, Edit, Trash, Save, X, Upload, Image as ImageIcon, FileSpreadsheet } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { 
  LandItinerary, 
  LandItineraryDate, 
  getAllLandItineraries, 
  getLandItineraryDates,
  createLandItinerary,
  updateLandItinerary,
  deleteLandItinerary,
  createLandItineraryDates,
  updateLandItineraryDates
} from "@/lib/database";
import BrandSelector from "./BrandSelector";
import HotelSelector from "./HotelSelector";
import ImageCropModal from "./ImageCropModal";
import GalleryUploadModal from "./GalleryUploadModal";
import BulkUploadModal from "./BulkUploadModal";
import { useToast } from "../common/ToastProvider";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ManageLandItinerariesProps {}

export default function ManageLandItineraries({}: ManageLandItinerariesProps) {
  const { showToast } = useToast();
  const [itineraries, setItineraries] = useState<LandItinerary[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showBulkUploadModal, setShowBulkUploadModal] = useState(false);
  const [mode, setMode] = useState<'list' | 'create' | 'edit'>('list');
  const [selectedItinerary, setSelectedItinerary] = useState<LandItinerary | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    itinerary_name: '',
    hero: '',
    destinations: '',
    duration: '',
    overview: '',
    map: '',
    gallery: '',
    journey_highlights: [''],
    daily_itinerary: [{ days: 'Day 1', title: '', description: '' }],
    good_to_know: [{ question: '', answer: '' }],
    hotels_by_categories: {
      types: [
        { category: 'Luxury', hotels: [] },
        { category: 'Exclusive', hotels: [] },
        { category: 'Unforgettable', hotels: [] }
      ]
    },
    pricing_dates: []
  });

  const totalSteps = 5;

  useEffect(() => {
    fetchItineraries();
  }, []);

  const fetchItineraries = async () => {
    try {
      setLoading(true);
      const data = await getAllLandItineraries();
      setItineraries(data);
    } catch (error) {
      console.error('Error fetching itineraries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    setMode('create');
    setCurrentStep(1);
    setFormData({
      itinerary_name: '',
      hero: '',
      destinations: '',
      duration: '',
      overview: '',
      map: '',
      gallery: '',
      journey_highlights: [''],
      daily_itinerary: [{ days: 'Day 1', title: '', description: '' }],
      good_to_know: [{ question: '', answer: '' }],
      hotels_by_categories: {
        types: [
          { category: 'Luxury', hotels: [] },
          { category: 'Exclusive', hotels: [] },
          { category: 'Unforgettable', hotels: [] }
        ]
      },
      pricing_dates: []
    });
  };

  const handleEdit = async (itinerary: LandItinerary) => {
    setSelectedItinerary(itinerary);
    setMode('edit');
    setCurrentStep(1);
    
    // Fetch pricing dates for this itinerary
    try {
      const dates = await getLandItineraryDates(itinerary.id);
      const formattedDates = dates.map(date => ({
        id: date.id,
        date: date.date,
        selectedDate: null, // Will be parsed by the DatePicker
        adult_pricing: date.adult_pricing || {
          Luxury: '',
          Exclusive: '',
          Unforgettable: ''
        },
        children_pricing: date.children_pricing || {
          Luxury: '',
          Exclusive: '',
          Unforgettable: ''
        }
      }));
      
      // Convert itinerary data to form format
      setFormData({
        ...itinerary,
        journey_highlights: itinerary.journey_highlights || [''],
        daily_itinerary: itinerary.daily_itinerary || [{ days: 'Day 1', title: '', description: '' }],
        good_to_know: itinerary.good_to_know || [{ question: '', answer: '' }],
        pricing_dates: formattedDates
      });
    } catch (error) {
      console.error('Error fetching pricing dates:', error);
      // Fallback to empty dates if fetch fails
      setFormData({
        ...itinerary,
        journey_highlights: itinerary.journey_highlights || [''],
        daily_itinerary: itinerary.daily_itinerary || [{ days: 'Day 1', title: '', description: '' }],
        good_to_know: itinerary.good_to_know || [{ question: '', answer: '' }],
        pricing_dates: []
      });
    }
  };

  const handleBackToList = async () => {
    // Check if there's any data to save as draft
    const hasData = formData.itinerary_name || formData.destinations || formData.duration || 
                   formData.overview || formData.hero || formData.gallery || formData.map ||
                   (formData.pricing_dates && formData.pricing_dates.length > 0) ||
                   (formData.daily_itinerary && formData.daily_itinerary.length > 0) ||
                   (formData.journey_highlights && formData.journey_highlights.some((h: string) => h.trim() !== '')) ||
                   (formData.good_to_know && formData.good_to_know.some((item: any) => item.question.trim() !== '' || item.answer.trim() !== '')) ||
                   (formData.hotels_by_categories && formData.hotels_by_categories.types.some((type: any) => type.hotels.length > 0));

    if (hasData) {
      await saveAsDraft(false); // Don't show toast when going back to list
    }
    
    setMode('list');
    setSelectedItinerary(null);
    setCurrentStep(1);
  };

  const handleBulkUploadSuccess = () => {
    // Refresh the itineraries list
    fetchItineraries();
  };

  const handleDeleteItinerary = async (itinerary: LandItinerary) => {
    if (!confirm(`Are you sure you want to delete "${itinerary.itinerary_name}"? This action cannot be undone.`)) {
      return;
    }

    try {
      setLoading(true);
      const success = await deleteLandItinerary(itinerary.id);
      
      if (success) {
        // Refresh the itineraries list
        await fetchItineraries();
        showToast('Itinerary deleted successfully!', 'success');
      } else {
        showToast('Error deleting itinerary. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error deleting itinerary:', error);
      showToast('Error deleting itinerary. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = async () => {
    // Allow navigation to next step without validation - users can move freely between steps
    if (currentStep < totalSteps) {
      // Auto-save as draft when navigating between steps
      const hasData = formData.itinerary_name || formData.destinations || formData.duration || 
                     formData.overview || formData.hero || formData.gallery || formData.map ||
                     (formData.pricing_dates && formData.pricing_dates.length > 0) ||
                     (formData.daily_itinerary && formData.daily_itinerary.length > 0) ||
                     (formData.journey_highlights && formData.journey_highlights.some((h: string) => h.trim() !== '')) ||
                     (formData.good_to_know && formData.good_to_know.some((item: any) => item.question.trim() !== '' || item.answer.trim() !== '')) ||
                     (formData.hotels_by_categories && formData.hotels_by_categories.types.some((type: any) => type.hotels.length > 0));

      if (hasData) {
        await saveAsDraft(false); // Don't show toast for step navigation
      }
      
      setCurrentStep(currentStep + 1);
    } else {
      // Save the itinerary
      await handleSaveItinerary();
    }
  };

  const saveAsDraft = async (showToastMessage: boolean = true) => {
    try {
      setIsSaving(true);
      console.log('Saving draft:', formData);
      
      // Prepare the itinerary data for saving as draft
      const itineraryData = {
        itinerary_name: formData.itinerary_name || 'Untitled Itinerary',
        hero: formData.hero || '',
        destinations: formData.destinations || '',
        duration: formData.duration || '',
        overview: formData.overview || '',
        map: formData.map || '',
        journey_highlights: formData.journey_highlights?.filter((h: string) => h.trim() !== '') || [],
        daily_itinerary: formData.daily_itinerary?.filter((day: any) => day.title.trim() !== '' || day.description.trim() !== '') || [],
        gallery: formData.gallery || '',
        good_to_know: formData.good_to_know?.filter((item: any) => item.question.trim() !== '' || item.answer.trim() !== '') || [],
        hotels_by_categories: formData.hotels_by_categories || {
          types: [
            { category: 'Luxury', hotels: [] },
            { category: 'Exclusive', hotels: [] },
            { category: 'Unforgettable', hotels: [] }
          ]
        }
      };

      let savedItinerary: LandItinerary | null = null;

      if (mode === 'create') {
        // Create new itinerary as draft
        savedItinerary = await createLandItinerary(itineraryData);
        if (!savedItinerary) {
          throw new Error('Failed to create draft itinerary');
        }
      } else if (mode === 'edit' && selectedItinerary) {
        // Update existing itinerary as draft
        savedItinerary = await updateLandItinerary(selectedItinerary.id, itineraryData);
        if (!savedItinerary) {
          throw new Error('Failed to update draft itinerary');
        }
      }

      // Save pricing dates if they exist and are valid
      if (formData.pricing_dates && formData.pricing_dates.length > 0 && savedItinerary) {
        const datesData = formData.pricing_dates
          .filter((date: any) => date.date && date.date.trim() !== '') // Only include dates with valid date labels
          .map((date: any) => ({
            linked_itinerary_id: savedItinerary!.id,
            date: date.date,
            adult_pricing: date.adult_pricing || {},
            children_pricing: date.children_pricing || {}
          }));

        if (datesData.length > 0) {
          if (mode === 'create') {
            await createLandItineraryDates(datesData);
          } else if (mode === 'edit') {
            await updateLandItineraryDates(savedItinerary.id, datesData);
          }
        }
      }

      // Show success message only if requested
      if (showToastMessage) {
        const itineraryName = formData.itinerary_name || 'Untitled Itinerary';
        showToast(`${itineraryName} saved as draft`, 'success');
      }
      
    } catch (error) {
      console.error('Error saving draft:', error);
      showToast('Error saving draft. Please try again.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveItinerary = async () => {
    try {
      setSaving(true);
      console.log('Saving itinerary:', formData);
      
      // Prepare the itinerary data for saving
      const itineraryData = {
        itinerary_name: formData.itinerary_name,
        hero: formData.hero,
        destinations: formData.destinations,
        duration: formData.duration,
        overview: formData.overview,
        map: formData.map || '',
        journey_highlights: formData.journey_highlights.filter((h: string) => h.trim() !== ''),
        daily_itinerary: formData.daily_itinerary.filter((day: any) => day.title.trim() !== '' || day.description.trim() !== ''),
        gallery: formData.gallery || '',
        good_to_know: formData.good_to_know.filter((item: any) => item.question.trim() !== '' || item.answer.trim() !== ''),
        hotels_by_categories: formData.hotels_by_categories
      };

      let savedItinerary: LandItinerary | null = null;

      if (mode === 'create') {
        // Create new itinerary
        savedItinerary = await createLandItinerary(itineraryData);
        if (!savedItinerary) {
          throw new Error('Failed to create itinerary');
        }
      } else if (mode === 'edit' && selectedItinerary) {
        // Update existing itinerary
        savedItinerary = await updateLandItinerary(selectedItinerary.id, itineraryData);
        if (!savedItinerary) {
          throw new Error('Failed to update itinerary');
        }
      }

      // Save pricing dates if they exist and are valid
      if (formData.pricing_dates && formData.pricing_dates.length > 0 && savedItinerary) {
        const datesData = formData.pricing_dates
          .filter((date: any) => date.date && date.date.trim() !== '') // Only include dates with valid date labels
          .map((date: any) => ({
            linked_itinerary_id: savedItinerary!.id,
            date: date.date,
            adult_pricing: date.adult_pricing || {},
            children_pricing: date.children_pricing || {}
          }));

        if (datesData.length > 0) {
          if (mode === 'create') {
            await createLandItineraryDates(datesData);
          } else if (mode === 'edit') {
            await updateLandItineraryDates(savedItinerary.id, datesData);
          }
        }
      }

      // Refresh the itineraries list
      await fetchItineraries();
      
      // Show success message and go back to list
      showToast(`Itinerary ${mode === 'create' ? 'created' : 'updated'} successfully!`, 'success');
      handleBackToList();
    } catch (error) {
      console.error('Error saving itinerary:', error);
      showToast('Error saving itinerary. Please try again.', 'error');
    } finally {
      setSaving(false);
    }
  };

  const prevStep = async () => {
    if (currentStep > 1) {
      // Auto-save as draft when navigating between steps
      const hasData = formData.itinerary_name || formData.destinations || formData.duration || 
                     formData.overview || formData.hero || formData.gallery || formData.map ||
                     (formData.pricing_dates && formData.pricing_dates.length > 0) ||
                     (formData.daily_itinerary && formData.daily_itinerary.length > 0) ||
                     (formData.journey_highlights && formData.journey_highlights.some((h: string) => h.trim() !== '')) ||
                     (formData.good_to_know && formData.good_to_know.some((item: any) => item.question.trim() !== '' || item.answer.trim() !== '')) ||
                     (formData.hotels_by_categories && formData.hotels_by_categories.types.some((type: any) => type.hotels.length > 0));

      if (hasData) {
        await saveAsDraft(false); // Don't show toast for step navigation
      }
      
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <PricingStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <DestinationsStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <HotelsStep formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">Loading itineraries...</div>
      </div>
    );
  }

  if (mode === 'create' || mode === 'edit') {
    return (
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-arpona font-bold text-gray-900 mb-2">
                {mode === 'create' ? 'Create New Itinerary' : 'Edit Itinerary'}
              </h1>
              <p className="text-gray-600 font-inter">
                {mode === 'create' ? 'Create a new land journey itinerary' : `Editing: ${selectedItinerary?.itinerary_name}`}
              </p>
            </div>
            <button
              onClick={handleBackToList}
              disabled={isSaving || saving}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></div>
              ) : (
                <X className="w-5 h-5" />
              )}
              Cancel
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-inter font-bold text-gray-700">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#A5C8CE] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 bg-white shadow-sm border border-gray-200 p-6">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1 || isSaving || saving}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></div>
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
            Previous
          </button>

          <div className="flex gap-3">
            <button
              onClick={nextStep}
              disabled={isSaving || saving}
              className="flex items-center gap-2 px-6 py-3 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === totalSteps ? (
                <>
                  {saving ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <Save className="w-5 h-5" />
                  )}
                  {saving ? 'Saving...' : 'Save Itinerary'}
                </>
              ) : (
                <>
                  {isSaving ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // List View
  const renderList = () => (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-arpona font-bold text-gray-900 mb-2">
              Land Itineraries Management
            </h1>
            <p className="text-gray-600 font-inter">
              Create and manage land journey itineraries.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowBulkUploadModal(true)}
              className="flex items-center gap-2 px-6 py-3 border border-[#A5C8CE] text-[#A5C8CE] hover:bg-[#A5C8CE] hover:text-white transition-colors"
            >
              <FileSpreadsheet className="w-5 h-5" />
              Bulk Upload
            </button>
            <button
              onClick={handleCreateNew}
              className="flex items-center gap-2 px-6 py-3 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create New Itinerary
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white shadow-sm border border-gray-200 p-6">
        {itineraries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 font-inter mb-4">No itineraries found.</p>
            <button
              onClick={handleCreateNew}
              className="flex items-center gap-2 px-6 py-3 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors mx-auto"
            >
              <Plus className="w-5 h-5" />
              Create Your First Itinerary
            </button>
          </div>
        ) : (
          <div className="grid gap-6">
            {itineraries.map((itinerary) => (
              <div key={itinerary.id} className="border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-arpona font-bold text-gray-900 mb-2">
                      {itinerary.itinerary_name}
                    </h3>
                    <p className="text-gray-600 font-inter mb-1">{itinerary.destinations}</p>
                    <p className="text-sm text-gray-500 font-inter">{itinerary.duration}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(itinerary)}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteItinerary(itinerary)}
                      className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-700 hover:bg-red-50 transition-colors"
                    >
                      <Trash className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Form View
  const renderForm = () => {
    if (mode === 'create' || mode === 'edit') {
      return (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-arpona font-bold text-gray-900 mb-2">
                  {mode === 'create' ? 'Create New Itinerary' : 'Edit Itinerary'}
                </h1>
                <p className="text-gray-600 font-inter">
                  {mode === 'create' ? 'Create a new land journey itinerary' : `Editing: ${selectedItinerary?.itinerary_name}`}
                </p>
              </div>
              <button
                onClick={handleBackToList}
                disabled={isSaving || saving}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></div>
                ) : (
                  <X className="w-5 h-5" />
                )}
                Cancel
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-inter font-bold text-gray-700">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#A5C8CE] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="flex-1 bg-white shadow-sm border border-gray-200 p-6">
            {renderStepContent()}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1 || isSaving || saving}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></div>
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
              Previous
            </button>

            <div className="flex gap-3">
              <button
                onClick={nextStep}
                disabled={isSaving || saving}
                className="flex items-center gap-2 px-6 py-3 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === totalSteps ? (
                  <>
                    {saving ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <Save className="w-5 h-5" />
                    )}
                    {saving ? 'Saving...' : 'Save Itinerary'}
                  </>
                ) : (
                  <>
                    {isSaving ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        Next
                        <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

// Step Components
function BasicInfoStep({ formData, updateFormData }: { formData: any; updateFormData: (field: string, value: any) => void }) {
  const [showHeroCropModal, setShowHeroCropModal] = useState(false);
  const [selectedHeroFile, setSelectedHeroFile] = useState<File | null>(null);
  const [showGalleryUpload, setShowGalleryUpload] = useState(false);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [existingGalleryUrls, setExistingGalleryUrls] = useState<string[]>([]);
  const heroFileInputRef = useRef<HTMLInputElement>(null);
  const galleryFileInputRef = useRef<HTMLInputElement>(null);

  // Parse existing gallery URLs
  useEffect(() => {
    if (formData.gallery) {
      try {
        const galleryUrls = JSON.parse(formData.gallery);
        setExistingGalleryUrls(Array.isArray(galleryUrls) ? galleryUrls : []);
      } catch (error) {
        setExistingGalleryUrls([]);
      }
    } else {
      setExistingGalleryUrls([]);
    }
  }, [formData.gallery]);

  const handleHeroFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }

    // Validate file size (max 10MB for hero images)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB.');
      return;
    }

    setSelectedHeroFile(file);
    setShowHeroCropModal(true);
  };

  const handleGalleryFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    // Validate file types
    const invalidFiles = files.filter(file => !file.type.startsWith('image/'));
    if (invalidFiles.length > 0) {
      alert('Please select only image files.');
      return;
    }

    // Validate file sizes (max 5MB per file)
    const oversizedFiles = files.filter(file => file.size > 5 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      alert('Each file must be less than 5MB.');
      return;
    }

    setGalleryFiles(files);
    setShowGalleryUpload(true);
  };

  const handleHeroImageUploaded = async (imageUrl: string) => {
    updateFormData('hero', imageUrl);
    setShowHeroCropModal(false);
    setSelectedHeroFile(null);
  };

  const handleGalleryImagesUploaded = async (imageUrls: string[]) => {
    // Add new URLs to existing gallery
    const updatedGallery = [...existingGalleryUrls, ...imageUrls];
    updateFormData('gallery', JSON.stringify(updatedGallery));
    setExistingGalleryUrls(updatedGallery);
    setShowGalleryUpload(false);
    setGalleryFiles([]);
  };

  const removeGalleryImage = (index: number) => {
    const updatedGallery = existingGalleryUrls.filter((_, i) => i !== index);
    updateFormData('gallery', JSON.stringify(updatedGallery));
    setExistingGalleryUrls(updatedGallery);
  };

  const removeSelectedGalleryFile = (index: number) => {
    const updatedFiles = galleryFiles.filter((_, i) => i !== index);
    setGalleryFiles(updatedFiles);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-arpona font-bold text-gray-900 mb-6">Basic Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
            Itinerary Name
          </label>
          <input
            type="text"
            value={formData.itinerary_name}
            onChange={(e) => updateFormData('itinerary_name', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
            placeholder="e.g., Arabian & Safari Escape"
          />
        </div>

        <div>
          <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
            Duration
          </label>
          <input
            type="text"
            value={formData.duration}
            onChange={(e) => updateFormData('duration', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
            placeholder="e.g., 10 days"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
            Destinations
          </label>
          <input
            type="text"
            value={formData.destinations}
            onChange={(e) => updateFormData('destinations', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
            placeholder="e.g., Oman, Cambodia, Tanzania"
          />
        </div>

        {/* Hero Image Upload */}
        <div className="md:col-span-2">
          <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
            Hero Image
          </label>
          
          {/* Current Hero Image Preview */}
          {formData.hero && (
            <div className="mb-4">
              <div className="relative w-full bg-gray-100 border border-gray-200 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={formData.hero}
                  alt="Hero image preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Upload Button */}
          <div className="space-y-3">
            <input
              ref={heroFileInputRef}
              type="file"
              accept="image/*"
              onChange={handleHeroFileSelect}
              className="hidden"
            />
            <button
              onClick={() => heroFileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 hover:border-[#A5C8CE] transition-colors w-full"
            >
              <Upload className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">
                {formData.hero ? 'Replace Hero Image' : 'Upload Hero Image'}
              </span>
            </button>
            <p className="text-xs text-gray-500">
              Compressed & WebP images are preferred. Max size: 10MB
            </p>
          </div>
        </div>

        {/* Gallery Images Upload */}
        <div className="md:col-span-2">
          <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
            Gallery Images
          </label>
          
          {/* Current Gallery Preview */}
          {existingGalleryUrls.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-inter font-bold text-gray-700 mb-2">
                Current Gallery ({existingGalleryUrls.length} images)
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {existingGalleryUrls.map((url: string, index: number) => (
                  <div key={`existing-${index}`} className="relative w-full h-24 bg-gray-100 border border-gray-200 overflow-hidden group">
                    <img
                      src={url}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => removeGalleryImage(index)}
                      className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Selected Files Preview */}
          {galleryFiles.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-inter font-bold text-gray-700 mb-2">
                Selected for Upload ({galleryFiles.length} images)
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {galleryFiles.map((file: File, index: number) => (
                  <div key={`selected-${index}`} className="relative w-full h-24 bg-gray-100 border border-gray-200 overflow-hidden group">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                        <p className="text-xs text-gray-600 truncate px-1">{file.name}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeSelectedGalleryFile(index)}
                      className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload Button */}
          <div className="space-y-3">
            <input
              ref={galleryFileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryFileSelect}
              className="hidden"
            />
            <button
              onClick={() => galleryFileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 hover:border-[#A5C8CE] transition-colors w-full"
            >
              <ImageIcon className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">
                {existingGalleryUrls.length > 0 ? 'Add More Gallery Images' : 'Upload Gallery Images'}
              </span>
            </button>
            <p className="text-xs text-gray-500">
              Compressed & WebP images are preferred. Max size: 5MB per image
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
            Map Data (JSON string)
          </label>
          <input
            type="text"
            value={formData.map}
            onChange={(e) => updateFormData('map', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
            placeholder='[{"latitude": "23.5", "longitude": "58.4", "key_dates": "Day 1", "day_number": 1}]'
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
            Overview
          </label>
          <textarea
            value={formData.overview}
            onChange={(e) => updateFormData('overview', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
            placeholder="Describe the itinerary..."
          />
        </div>
      </div>

      {/* Hero Image Crop Modal */}
      {selectedHeroFile && showHeroCropModal && (
        <ImageCropModal
          isOpen={showHeroCropModal}
          onClose={() => {
            setShowHeroCropModal(false);
            setSelectedHeroFile(null);
          }}
          imageFile={selectedHeroFile}
          onImageUploaded={handleHeroImageUploaded}
          aspectRatio={16 / 9} // Hero image aspect ratio
          currentImageUrl={formData.hero}
          bucketName="land_itineraries"
          fileNamePrefix="itinerary-hero"
        />
      )}

      {/* Gallery Upload Modal */}
      {galleryFiles.length > 0 && showGalleryUpload && (
        <GalleryUploadModal
          isOpen={showGalleryUpload}
          onClose={() => {
            setShowGalleryUpload(false);
            setGalleryFiles([]);
          }}
          imageFiles={galleryFiles}
          onImagesUploaded={handleGalleryImagesUploaded}
          bucketName="land_itineraries"
          fileNamePrefix="itinerary-gallery"
        />
      )}
    </div>
  );
}

function PricingStep({ formData, updateFormData }: { formData: any; updateFormData: (field: string, value: any) => void }) {
  const [pricingDates, setPricingDates] = useState<any[]>(formData.pricing_dates || []);

  const addPricingDate = () => {
    const newDate = {
      id: Date.now(),
      date: '',
      selectedDate: null, // For the DatePicker
      adult_pricing: {
        Luxury: '',
        Exclusive: '',
        Unforgettable: ''
      },
      children_pricing: {
        Luxury: '',
        Exclusive: '',
        Unforgettable: ''
      }
    };
    setPricingDates([...pricingDates, newDate]);
    updateFormData('pricing_dates', [...pricingDates, newDate]);
  };

  const removePricingDate = (index: number) => {
    const updated = pricingDates.filter((_, i) => i !== index);
    setPricingDates(updated);
    updateFormData('pricing_dates', updated);
  };

  const updatePricingDate = (index: number, field: string, value: any) => {
    const updated = pricingDates.map((date, i) => {
      if (i === index) {
        return { ...date, [field]: value };
      }
      return date;
    });
    setPricingDates(updated);
    updateFormData('pricing_dates', updated);
  };

  const updatePricing = (index: number, category: string, type: 'adult' | 'children', value: string) => {
    const updated = pricingDates.map((date, i) => {
      if (i === index) {
        return {
          ...date,
          [`${type}_pricing`]: {
            ...date[`${type}_pricing`],
            [category]: value
          }
        };
      }
      return date;
    });
    setPricingDates(updated);
    updateFormData('pricing_dates', updated);
  };

  const handleDateChange = (date: Date | null, index: number) => {
    const updated = pricingDates.map((pricingDate, i) => {
      if (i === index) {
        let formattedDate = '';
        if (date) {
          // Format as "Month Year" (e.g., "Dec 2026")
          formattedDate = date.toLocaleDateString('en-US', { 
            month: 'short', 
            year: 'numeric' 
          });
        }
        return {
          ...pricingDate,
          selectedDate: date,
          date: formattedDate
        };
      }
      return pricingDate;
    });
    setPricingDates(updated);
    updateFormData('pricing_dates', updated);
  };

  // Convert existing date strings to Date objects for the picker
  const parseExistingDate = (dateString: string): Date | null => {
    if (!dateString) return null;
    
    // Try to parse date strings like "October 2026" or "Dec 2026"
    const fullMonths = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const shortMonths = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const parts = dateString.split(' ');
    if (parts.length === 2) {
      let monthIndex = fullMonths.indexOf(parts[0]);
      if (monthIndex === -1) {
        monthIndex = shortMonths.indexOf(parts[0]);
      }
      
      const year = parseInt(parts[1]);
      
      if (monthIndex !== -1 && !isNaN(year)) {
        return new Date(year, monthIndex, 1);
      }
    }
    
    return null;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-arpona font-bold text-gray-900 mb-6">Pricing & Dates</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-arpona font-bold text-gray-900">Departure Dates & Pricing</h3>
          <button
            onClick={addPricingDate}
            className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Date
          </button>
        </div>

        {pricingDates.length === 0 ? (
          <div className="text-center py-8 border-2 border-dashed border-gray-300">
            <p className="text-gray-600 font-inter mb-4">No pricing dates added yet.</p>
            <button
              onClick={addPricingDate}
              className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors mx-auto"
            >
              <Plus className="w-4 h-4" />
              Add First Date
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {pricingDates.map((date, index) => (
              <div key={date.id} className="border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-arpona font-bold text-gray-900">Date {index + 1}</h4>
                  <button
                    onClick={() => removePricingDate(index)}
                    className="flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <Trash className="w-4 h-4" />
                    Remove
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                      Select Month & Year
                    </label>
                    <DatePicker
                      selected={date.selectedDate || parseExistingDate(date.date)}
                      onChange={(selectedDate) => handleDateChange(selectedDate, index)}
                      dateFormat="MMM yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                      placeholderText="Select month and year"
                      className="w-full px-2 py-2 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                      wrapperClassName="w-full"
                      minDate={new Date()} // Prevent selecting past dates
                      yearDropdownItemNumber={10} // Show 10 years in dropdown
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-md font-arpona font-bold text-gray-900 mb-4">Pricing by Category</h5>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {['Luxury', 'Exclusive', 'Unforgettable'].map((category) => (
                      <div key={category} className="border border-gray-200 p-4">
                        <h6 className="text-sm font-arpona font-bold text-gray-900 mb-3">{category}</h6>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-xs font-inter font-bold text-gray-600 mb-1">
                              Adult Price
                            </label>
                            <input
                              type="text"
                              value={date.adult_pricing[category]}
                              onChange={(e) => updatePricing(index, category, 'adult', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                              placeholder=""
                            />
                          </div>
                          
                          <div>
                            <label className="block text-xs font-inter font-bold text-gray-600 mb-1">
                              Children Price
                            </label>
                            <input
                              type="text"
                              value={date.children_pricing[category]}
                              onChange={(e) => updatePricing(index, category, 'children', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function DestinationsStep({ formData, updateFormData }: { formData: any; updateFormData: (field: string, value: any) => void }) {
  const [dailyItinerary, setDailyItinerary] = useState<any[]>(formData.daily_itinerary || [{ days: 'Day 1', title: '', description: '' }]);
  const [journeyHighlights, setJourneyHighlights] = useState<string[]>(formData.journey_highlights || ['']);
  const [goodToKnow, setGoodToKnow] = useState<any[]>(formData.good_to_know || [{ question: '', answer: '' }]);

  const addDay = () => {
    const newDay = {
      days: `Day ${dailyItinerary.length + 1}`,
      title: '',
      description: ''
    };
    const updated = [...dailyItinerary, newDay];
    setDailyItinerary(updated);
    updateFormData('daily_itinerary', updated);
  };

  const removeDay = (index: number) => {
    const updated = dailyItinerary.filter((_, i) => i !== index);
    // Renumber the days
    const renumbered = updated.map((day, i) => ({
      ...day,
      days: `Day ${i + 1}`
    }));
    setDailyItinerary(renumbered);
    updateFormData('daily_itinerary', renumbered);
  };

  const updateDay = (index: number, field: string, value: string) => {
    const updated = dailyItinerary.map((day, i) => {
      if (i === index) {
        return { ...day, [field]: value };
      }
      return day;
    });
    setDailyItinerary(updated);
    updateFormData('daily_itinerary', updated);
  };

  const addJourneyHighlight = () => {
    const updated = [...journeyHighlights, ''];
    setJourneyHighlights(updated);
    updateFormData('journey_highlights', updated);
  };

  const removeJourneyHighlight = (index: number) => {
    const updated = journeyHighlights.filter((_, i) => i !== index);
    setJourneyHighlights(updated);
    updateFormData('journey_highlights', updated);
  };

  const updateJourneyHighlight = (index: number, value: string) => {
    const updated = journeyHighlights.map((highlight, i) => {
      if (i === index) return value;
      return highlight;
    });
    setJourneyHighlights(updated);
    updateFormData('journey_highlights', updated);
  };

  const addGoodToKnow = () => {
    const updated = [...goodToKnow, { question: '', answer: '' }];
    setGoodToKnow(updated);
    updateFormData('good_to_know', updated);
  };

  const removeGoodToKnow = (index: number) => {
    const updated = goodToKnow.filter((_, i) => i !== index);
    setGoodToKnow(updated);
    updateFormData('good_to_know', updated);
  };

  const updateGoodToKnow = (index: number, field: string, value: string) => {
    const updated = goodToKnow.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setGoodToKnow(updated);
    updateFormData('good_to_know', updated);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-arpona font-bold text-gray-900 mb-6">Destinations & Daily Itinerary</h2>
      
      {/* Journey Highlights */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-arpona font-bold text-gray-900">Journey Highlights</h3>
          <button
            onClick={addJourneyHighlight}
            className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Highlight
          </button>
        </div>

        <div className="space-y-3">
          {journeyHighlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3">
              <input
                type="text"
                value={highlight}
                onChange={(e) => updateJourneyHighlight(index, e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                placeholder="e.g., Luxury beach stay in Salalah"
              />
              {journeyHighlights.length > 1 && (
                <button
                  onClick={() => removeJourneyHighlight(index)}
                  className="flex items-center gap-2 px-3 py-3 text-red-600 hover:bg-red-50 transition-colors"
                >
                  <Trash className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Daily Itinerary */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-arpona font-bold text-gray-900">Daily Itinerary</h3>
          <button
            onClick={addDay}
            className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Day
          </button>
        </div>

        <div className="space-y-6">
          {dailyItinerary.map((day, index) => (
            <div key={index} className="border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-arpona font-bold text-gray-900">{day.days}</h4>
                {dailyItinerary.length > 1 && (
                  <button
                    onClick={() => removeDay(index)}
                    className="flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <Trash className="w-4 h-4" />
                    Remove Day
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                    Day Title
                  </label>
                  <input
                    type="text"
                    value={day.title}
                    onChange={(e) => updateDay(index, 'title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                    placeholder="e.g., Arrival in Oman"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={day.description}
                    onChange={(e) => updateDay(index, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                    placeholder="Describe the day's activities..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Good to Know */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-arpona font-bold text-gray-900">Good to Know</h3>
          <button
            onClick={addGoodToKnow}
            className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add FAQ
          </button>
        </div>

        <div className="space-y-4">
          {goodToKnow.map((item, index) => (
            <div key={index} className="border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-md font-arpona font-bold text-gray-900">FAQ {index + 1}</h4>
                {goodToKnow.length > 1 && (
                  <button
                    onClick={() => removeGoodToKnow(index)}
                    className="flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <Trash className="w-4 h-4" />
                    Remove
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                    Question
                  </label>
                  <input
                    type="text"
                    value={item.question}
                    onChange={(e) => updateGoodToKnow(index, 'question', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                    placeholder="e.g., What to pack?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                    Answer
                  </label>
                  <textarea
                    value={item.answer}
                    onChange={(e) => updateGoodToKnow(index, 'answer', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                    placeholder="Provide the answer..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HotelsStep({ formData, updateFormData }: { formData: any; updateFormData: (field: string, value: any) => void }) {
  const [hotelsByCategories, setHotelsByCategories] = useState<any>(formData.hotels_by_categories || {
    types: [
      { category: 'Luxury', hotels: [] },
      { category: 'Exclusive', hotels: [] },
      { category: 'Unforgettable', hotels: [] }
    ]
  });

  const addHotel = (categoryIndex: number) => {
    const updated = { ...hotelsByCategories };
    const newHotel = {
      day: '',
      city: '',
      name: '',
      country: '',
      selectedBrand: null,
      selectedHotel: null
    };
    updated.types[categoryIndex].hotels.push(newHotel);
    setHotelsByCategories(updated);
    updateFormData('hotels_by_categories', updated);
  };

  const removeHotel = (categoryIndex: number, hotelIndex: number) => {
    const updated = { ...hotelsByCategories };
    updated.types[categoryIndex].hotels.splice(hotelIndex, 1);
    setHotelsByCategories(updated);
    updateFormData('hotels_by_categories', updated);
  };

  const updateHotel = (categoryIndex: number, hotelIndex: number, field: string, value: any) => {
    const updated = { ...hotelsByCategories };
    updated.types[categoryIndex].hotels[hotelIndex][field] = value;
    
    // Auto-fill hotel data when a hotel is selected
    if (field === 'selectedHotel' && value) {
      updated.types[categoryIndex].hotels[hotelIndex].name = value.hotel_name;
      updated.types[categoryIndex].hotels[hotelIndex].city = value.city;
      updated.types[categoryIndex].hotels[hotelIndex].country = value.country;
    }
    
    setHotelsByCategories(updated);
    updateFormData('hotels_by_categories', updated);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-arpona font-bold text-gray-900 mb-6">Hotel Selection by Category</h2>
      
      <div className="space-y-8">
        {hotelsByCategories.types.map((category: any, categoryIndex: number) => (
          <div key={category.category} className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-arpona font-bold text-gray-900">{category.category} Hotels</h3>
              <button
                onClick={() => addHotel(categoryIndex)}
                className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Hotel
              </button>
            </div>

            {category.hotels.length === 0 ? (
              <div className="text-center py-8 border-2 border-dashed border-gray-300">
                <p className="text-gray-600 font-inter mb-4">No hotels added for {category.category} category.</p>
                <button
                  onClick={() => addHotel(categoryIndex)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add First Hotel
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {category.hotels.map((hotel: any, hotelIndex: number) => (
                  <div key={hotelIndex} className="border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-arpona font-bold text-gray-900">Hotel {hotelIndex + 1}</h4>
                      <button
                        onClick={() => removeHotel(categoryIndex, hotelIndex)}
                        className="flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash className="w-4 h-4" />
                        Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                          Day Number
                        </label>
                        <input
                          type="text"
                          value={hotel.day}
                          onChange={(e) => updateHotel(categoryIndex, hotelIndex, 'day', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                          placeholder="e.g., 1"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <BrandSelector
                          onBrandSelect={(brand) => updateHotel(categoryIndex, hotelIndex, 'selectedBrand', brand)}
                          selectedBrand={hotel.selectedBrand}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <HotelSelector
                          selectedBrand={hotel.selectedBrand}
                          onHotelSelect={(hotelData) => updateHotel(categoryIndex, hotelIndex, 'selectedHotel', hotelData)}
                          selectedHotel={hotel.selectedHotel}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                          City (Auto-filled)
                        </label>
                        <input
                          type="text"
                          value={hotel.city}
                          readOnly
                          className="w-full px-4 py-3 border border-gray-300 bg-gray-100 text-gray-600"
                          placeholder="Will be filled automatically"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                          Hotel Name (Auto-filled)
                        </label>
                        <input
                          type="text"
                          value={hotel.name}
                          readOnly
                          className="w-full px-4 py-3 border border-gray-300 bg-gray-100 text-gray-600"
                          placeholder="Will be filled automatically"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                          Country (Auto-filled)
                        </label>
                        <input
                          type="text"
                          value={hotel.country}
                          readOnly
                          className="w-full px-4 py-3 border border-gray-300 bg-gray-100 text-gray-600"
                          placeholder="Will be filled automatically"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewStep({ formData }: { formData: any }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-arpona font-bold text-gray-900 mb-6">Review & Save</h2>
      
      {/* Basic Information */}
      <div className="border border-gray-200 p-6">
        <h3 className="text-lg font-arpona font-bold text-gray-900 mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-sm font-inter font-bold text-gray-600">Itinerary Name:</span>
            <p className="text-gray-900 font-inter">{formData.itinerary_name || 'Not specified'}</p>
          </div>
          <div>
            <span className="text-sm font-inter font-bold text-gray-600">Duration:</span>
            <p className="text-gray-900 font-inter">{formData.duration || 'Not specified'}</p>
          </div>
          <div className="md:col-span-2">
            <span className="text-sm font-inter font-bold text-gray-600">Destinations:</span>
            <p className="text-gray-900 font-inter">{formData.destinations || 'Not specified'}</p>
          </div>
          <div className="md:col-span-2">
            <span className="text-sm font-inter font-bold text-gray-600">Overview:</span>
            <p className="text-gray-900 font-inter">{formData.overview || 'Not specified'}</p>
          </div>
        </div>
      </div>

      {/* Journey Highlights */}
      <div className="border border-gray-200 p-6">
        <h3 className="text-lg font-arpona font-bold text-gray-900 mb-4">Journey Highlights</h3>
        {formData.journey_highlights && formData.journey_highlights.length > 0 && formData.journey_highlights[0] ? (
          <ul className="list-disc list-inside space-y-2">
            {formData.journey_highlights.map((highlight: string, index: number) => (
              <li key={index} className="text-gray-900 font-inter">{highlight}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 font-inter">No highlights specified</p>
        )}
      </div>

      {/* Daily Itinerary */}
      <div className="border border-gray-200 p-6">
        <h3 className="text-lg font-arpona font-bold text-gray-900 mb-4">Daily Itinerary</h3>
        {formData.daily_itinerary && formData.daily_itinerary.length > 0 ? (
          <div className="space-y-4">
            {formData.daily_itinerary.map((day: any, index: number) => (
              <div key={index} className="border-l-4 border-[#A5C8CE] pl-4">
                <h4 className="font-arpona font-bold text-gray-900">{day.days}</h4>
                <p className="text-gray-700 font-inter font-bold">{day.title}</p>
                <p className="text-gray-600 font-inter">{day.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 font-inter">No daily itinerary specified</p>
        )}
      </div>

      {/* Pricing */}
      <div className="border border-gray-200 p-6">
        <h3 className="text-lg font-arpona font-bold text-gray-900 mb-4">Pricing & Dates</h3>
        {formData.pricing_dates && formData.pricing_dates.length > 0 ? (
          <div className="space-y-4">
            {formData.pricing_dates.map((date: any, index: number) => (
              <div key={index} className="border border-gray-200 p-4">
                <h4 className="font-arpona font-bold text-gray-900 mb-3">{date.date}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Luxury', 'Exclusive', 'Unforgettable'].map((category) => (
                    <div key={category} className="text-center">
                      <h5 className="text-sm font-arpona font-bold text-gray-700 mb-2">{category}</h5>
                      <div className="text-xs text-gray-600">
                        <p>Adult: ${date.adult_pricing[category]?.toLocaleString() || '0'}</p>
                        <p>Children: ${date.children_pricing[category]?.toLocaleString() || '0'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 font-inter">No pricing dates specified</p>
        )}
      </div>

      {/* Hotels */}
      <div className="border border-gray-200 p-6">
        <h3 className="text-lg font-arpona font-bold text-gray-900 mb-4">Hotels by Category</h3>
        {formData.hotels_by_categories && formData.hotels_by_categories.types ? (
          <div className="space-y-6">
            {formData.hotels_by_categories.types.map((category: any, categoryIndex: number) => (
              <div key={category.category} className="border border-gray-200 p-4">
                <h4 className="font-arpona font-bold text-gray-900 mb-3">{category.category}</h4>
                {category.hotels && category.hotels.length > 0 ? (
                  <div className="space-y-3">
                    {category.hotels.map((hotel: any, hotelIndex: number) => (
                      <div key={hotelIndex} className="bg-gray-50 p-3">
                        <p className="text-sm font-inter font-bold text-gray-900">
                          Day {hotel.day}: {hotel.name}
                        </p>
                        <p className="text-xs text-gray-600">{hotel.city}, {hotel.country}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 font-inter text-sm">No hotels specified</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 font-inter">No hotels specified</p>
        )}
      </div>

      {/* Good to Know */}
      <div className="border border-gray-200 p-6">
        <h3 className="text-lg font-arpona font-bold text-gray-900 mb-4">Good to Know</h3>
        {formData.good_to_know && formData.good_to_know.length > 0 && formData.good_to_know[0].question ? (
          <div className="space-y-4">
            {formData.good_to_know.map((item: any, index: number) => (
              <div key={index} className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-arpona font-bold text-gray-900 text-sm">{item.question}</h4>
                <p className="text-gray-600 font-inter text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 font-inter">No FAQs specified</p>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 p-4">
        <p className="text-blue-800 font-inter text-sm">
          <strong>Note:</strong> Click "Save Itinerary" to create this itinerary. You can edit it later from the main list.
        </p>
      </div>
    </div>
  );
}

  return (
    <>
      {mode === 'list' ? renderList() : renderForm()}
      
      {/* Bulk Upload Modal */}
      <BulkUploadModal
        isOpen={showBulkUploadModal}
        onClose={() => setShowBulkUploadModal(false)}
        onUploadSuccess={handleBulkUploadSuccess}
      />
    </>
  );
}

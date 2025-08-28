"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Edit, Trash, Save, X } from "lucide-react";
import { LandItinerary, LandItineraryDate, getAllLandItineraries, getLandItineraryDates } from "@/lib/database";

interface ManageLandItinerariesProps {}

export default function ManageLandItineraries({}: ManageLandItinerariesProps) {
  const [itineraries, setItineraries] = useState<LandItinerary[]>([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<'list' | 'create' | 'edit'>('list');
  const [selectedItinerary, setSelectedItinerary] = useState<LandItinerary | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    itinerary_name: '',
    hero: '',
    destinations: '',
    duration: '',
    overview: '',
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

  const handleEdit = (itinerary: LandItinerary) => {
    setSelectedItinerary(itinerary);
    setMode('edit');
    setCurrentStep(1);
    // Convert itinerary data to form format
    setFormData({
      ...itinerary,
      journey_highlights: itinerary.journey_highlights || [''],
      daily_itinerary: itinerary.daily_itinerary || [{ days: 'Day 1', title: '', description: '' }],
      good_to_know: itinerary.good_to_know || [{ question: '', answer: '' }],
      pricing_dates: []
    });
  };

  const handleBackToList = () => {
    setMode('list');
    setSelectedItinerary(null);
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
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
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
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
            <span className="text-sm font-inter text-gray-500">
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
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-6 py-3 bg-[#A5C8CE] text-white rounded-lg hover:bg-[#8bb3b8] transition-colors"
          >
            {currentStep === totalSteps ? (
              <>
                <Save className="w-5 h-5" />
                Save Itinerary
              </>
            ) : (
              <>
                Next
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  // List View
  return (
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
          <button
            onClick={handleCreateNew}
            className="flex items-center gap-2 px-6 py-3 bg-[#A5C8CE] text-white rounded-lg hover:bg-[#8bb3b8] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Create New Itinerary
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {itineraries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 font-inter mb-4">No itineraries found.</p>
            <button
              onClick={handleCreateNew}
              className="flex items-center gap-2 px-6 py-3 bg-[#A5C8CE] text-white rounded-lg hover:bg-[#8bb3b8] transition-colors mx-auto"
            >
              <Plus className="w-5 h-5" />
              Create Your First Itinerary
            </button>
          </div>
        ) : (
          <div className="grid gap-6">
            {itineraries.map((itinerary) => (
              <div key={itinerary.id} className="border border-gray-200 rounded-lg p-6">
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
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors">
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
}

// Step Components
function BasicInfoStep({ formData, updateFormData }: { formData: any; updateFormData: (field: string, value: any) => void }) {
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
            placeholder="e.g., Oman, Cambodia, Tanzania"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
            Hero Image URL
          </label>
          <input
            type="url"
            value={formData.hero}
            onChange={(e) => updateFormData('hero', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
            placeholder="https://example.com/hero-image.jpg"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
            placeholder="Describe the itinerary..."
          />
        </div>
      </div>
    </div>
  );
}

function PricingStep({ formData, updateFormData }: { formData: any; updateFormData: (field: string, value: any) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-arpona font-bold text-gray-900 mb-6">Pricing & Dates</h2>
      <p className="text-gray-600">This step will be implemented next.</p>
    </div>
  );
}

function DestinationsStep({ formData, updateFormData }: { formData: any; updateFormData: (field: string, value: any) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-arpona font-bold text-gray-900 mb-6">Destinations & Daily Itinerary</h2>
      <p className="text-gray-600">This step will be implemented next.</p>
    </div>
  );
}

function HotelsStep({ formData, updateFormData }: { formData: any; updateFormData: (field: string, value: any) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-arpona font-bold text-gray-900 mb-6">Hotel Selection</h2>
      <p className="text-gray-600">This step will be implemented next.</p>
    </div>
  );
}

function ReviewStep({ formData }: { formData: any }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-arpona font-bold text-gray-900 mb-6">Review & Save</h2>
      <p className="text-gray-600">This step will be implemented next.</p>
    </div>
  );
}

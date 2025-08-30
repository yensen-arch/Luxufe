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

  const nextStep = async () => {
    // Basic validation for each step
    if (currentStep === 1) {
      if (!formData.itinerary_name || !formData.destinations || !formData.duration) {
        alert('Please fill in all required fields: Itinerary Name, Destinations, and Duration');
        return;
      }
    }
    
    if (currentStep === 2) {
      if (!formData.pricing_dates || formData.pricing_dates.length === 0) {
        alert('Please add at least one pricing date');
        return;
      }
    }
    
    if (currentStep === 3) {
      if (!formData.daily_itinerary || formData.daily_itinerary.length === 0) {
        alert('Please add at least one day to the itinerary');
        return;
      }
    }
    
    if (currentStep === 4) {
      // Optional validation for hotels - can be empty
    }
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save the itinerary
      await handleSaveItinerary();
    }
  };

  const handleSaveItinerary = async () => {
    try {
      // TODO: Implement save functionality
      console.log('Saving itinerary:', formData);
      
      // For now, just show a success message and go back to list
      alert('Itinerary saved successfully! (Save functionality to be implemented)');
      handleBackToList();
    } catch (error) {
      console.error('Error saving itinerary:', error);
      alert('Error saving itinerary. Please try again.');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
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
  const [pricingDates, setPricingDates] = useState<any[]>(formData.pricing_dates || []);

  const addPricingDate = () => {
    const newDate = {
      id: Date.now(),
      date: '',
      adult_pricing: {
        Luxury: 0,
        Exclusive: 0,
        Unforgettable: 0
      },
      children_pricing: {
        Luxury: 0,
        Exclusive: 0,
        Unforgettable: 0
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

  const updatePricing = (index: number, category: string, type: 'adult' | 'children', value: number) => {
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

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-arpona font-bold text-gray-900 mb-6">Pricing & Dates</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-arpona font-bold text-gray-900">Departure Dates & Pricing</h3>
          <button
            onClick={addPricingDate}
            className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white rounded-lg hover:bg-[#8bb3b8] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Date
          </button>
        </div>

        {pricingDates.length === 0 ? (
          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-600 font-inter mb-4">No pricing dates added yet.</p>
            <button
              onClick={addPricingDate}
              className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white rounded-lg hover:bg-[#8bb3b8] transition-colors mx-auto"
            >
              <Plus className="w-4 h-4" />
              Add First Date
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {pricingDates.map((date, index) => (
              <div key={date.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-arpona font-bold text-gray-900">Date {index + 1}</h4>
                  <button
                    onClick={() => removePricingDate(index)}
                    className="flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash className="w-4 h-4" />
                    Remove
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                      Date Label
                    </label>
                    <input
                      type="text"
                      value={date.date}
                      onChange={(e) => updatePricingDate(index, 'date', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                      placeholder="e.g., October 2026"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-md font-arpona font-bold text-gray-900 mb-4">Pricing by Category</h5>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {['Luxury', 'Exclusive', 'Unforgettable'].map((category) => (
                      <div key={category} className="border border-gray-200 rounded-lg p-4">
                        <h6 className="text-sm font-arpona font-bold text-gray-900 mb-3">{category}</h6>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-xs font-inter font-bold text-gray-600 mb-1">
                              Adult Price
                            </label>
                            <input
                              type="number"
                              value={date.adult_pricing[category]}
                              onChange={(e) => updatePricing(index, category, 'adult', parseInt(e.target.value) || 0)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                              placeholder="0"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-xs font-inter font-bold text-gray-600 mb-1">
                              Children Price
                            </label>
                            <input
                              type="number"
                              value={date.children_pricing[category]}
                              onChange={(e) => updatePricing(index, category, 'children', parseInt(e.target.value) || 0)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                              placeholder="0"
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
            className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white rounded-lg hover:bg-[#8bb3b8] transition-colors"
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
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                placeholder="e.g., Luxury beach stay in Salalah"
              />
              {journeyHighlights.length > 1 && (
                <button
                  onClick={() => removeJourneyHighlight(index)}
                  className="flex items-center gap-2 px-3 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
            className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white rounded-lg hover:bg-[#8bb3b8] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Day
          </button>
        </div>

        <div className="space-y-6">
          {dailyItinerary.map((day, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-arpona font-bold text-gray-900">{day.days}</h4>
                {dailyItinerary.length > 1 && (
                  <button
                    onClick={() => removeDay(index)}
                    className="flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
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
            className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white rounded-lg hover:bg-[#8bb3b8] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add FAQ
          </button>
        </div>

        <div className="space-y-4">
          {goodToKnow.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-md font-arpona font-bold text-gray-900">FAQ {index + 1}</h4>
                {goodToKnow.length > 1 && (
                  <button
                    onClick={() => removeGoodToKnow(index)}
                    className="flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
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
      country: ''
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

  const updateHotel = (categoryIndex: number, hotelIndex: number, field: string, value: string) => {
    const updated = { ...hotelsByCategories };
    updated.types[categoryIndex].hotels[hotelIndex][field] = value;
    setHotelsByCategories(updated);
    updateFormData('hotels_by_categories', updated);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-arpona font-bold text-gray-900 mb-6">Hotel Selection by Category</h2>
      
      <div className="space-y-8">
        {hotelsByCategories.types.map((category: any, categoryIndex: number) => (
          <div key={category.category} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-arpona font-bold text-gray-900">{category.category} Hotels</h3>
              <button
                onClick={() => addHotel(categoryIndex)}
                className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white rounded-lg hover:bg-[#8bb3b8] transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Hotel
              </button>
            </div>

            {category.hotels.length === 0 ? (
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-600 font-inter mb-4">No hotels added for {category.category} category.</p>
                <button
                  onClick={() => addHotel(categoryIndex)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#A5C8CE] text-white rounded-lg hover:bg-[#8bb3b8] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add First Hotel
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {category.hotels.map((hotel: any, hotelIndex: number) => (
                  <div key={hotelIndex} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-arpona font-bold text-gray-900">Hotel {hotelIndex + 1}</h4>
                      <button
                        onClick={() => removeHotel(categoryIndex, hotelIndex)}
                        className="flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                          placeholder="e.g., 1"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={hotel.city}
                          onChange={(e) => updateHotel(categoryIndex, hotelIndex, 'city', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                          placeholder="e.g., Salalah"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                          Hotel Name
                        </label>
                        <input
                          type="text"
                          value={hotel.name}
                          onChange={(e) => updateHotel(categoryIndex, hotelIndex, 'name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                          placeholder="e.g., Al Baleed Resort Salalah By Anantara"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          value={hotel.country}
                          onChange={(e) => updateHotel(categoryIndex, hotelIndex, 'country', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                          placeholder="e.g., Oman"
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
      <div className="border border-gray-200 rounded-lg p-6">
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
      <div className="border border-gray-200 rounded-lg p-6">
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
      <div className="border border-gray-200 rounded-lg p-6">
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
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-arpona font-bold text-gray-900 mb-4">Pricing & Dates</h3>
        {formData.pricing_dates && formData.pricing_dates.length > 0 ? (
          <div className="space-y-4">
            {formData.pricing_dates.map((date: any, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
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
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-arpona font-bold text-gray-900 mb-4">Hotels by Category</h3>
        {formData.hotels_by_categories && formData.hotels_by_categories.types ? (
          <div className="space-y-6">
            {formData.hotels_by_categories.types.map((category: any, categoryIndex: number) => (
              <div key={category.category} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-arpona font-bold text-gray-900 mb-3">{category.category}</h4>
                {category.hotels && category.hotels.length > 0 ? (
                  <div className="space-y-3">
                    {category.hotels.map((hotel: any, hotelIndex: number) => (
                      <div key={hotelIndex} className="bg-gray-50 rounded-lg p-3">
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
      <div className="border border-gray-200 rounded-lg p-6">
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

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 font-inter text-sm">
          <strong>Note:</strong> Click "Save Itinerary" to create this itinerary. You can edit it later from the main list.
        </p>
      </div>
    </div>
  );
}

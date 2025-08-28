import VisitView from "./VisitView";
import GoodToKnowAccordion from "./GoodToKnowAccordion";
import PricingOptions from "./PricingOptions";
import Accommodation from "./Accommodation";
import { LandItinerary, LandItineraryDate } from "@/lib/database";

interface PricingAndHotelsSectionProps {
  itinerary: LandItinerary;
  itineraryDates: LandItineraryDate[];
}

export default function PricingAndHotelsSection({ itinerary, itineraryDates }: PricingAndHotelsSectionProps) {
  return (
    <section className="bg-white border-y-2 border-gray-300">
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 w-full md:pr-8 p-6 md:p-12 border-r-2 border-gray-300">
        </div>
        <div className="md:w-3/4 w-full p-6 md:p-12">
          <PricingOptions itineraryDates={itineraryDates} />
          <Accommodation hotelData={itinerary.hotels_by_categories} />
          <GoodToKnowAccordion goodToKnow={itinerary.good_to_know} />
          <VisitView gallery={itinerary.gallery} />
        </div>
      </div>
    </section>
  );
} 
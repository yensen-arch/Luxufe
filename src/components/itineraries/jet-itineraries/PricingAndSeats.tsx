import PricingOptions from "./PricingOptions";
import AvailableSeats from "./AvailableSeats";
import PlaneView from "./PlaneView";
import TripExtensions from "./TripExtensions";
import GoodToKnowAccordion from "./GoodToKnowAccordion";

export default function PricingAndSeatsSection() {
  return (
    <section className="bg-white border-t border-l border-gray-300">
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 w-full md:pr-8 p-6 md:p-12 border-r border-gray-300">
          <PricingOptions />
        </div>
        <div className="md:w-3/4 w-full p-6 md:p-12 border-t border-l border-gray-300">
          <AvailableSeats />
          <PlaneView />
          <TripExtensions />
          <GoodToKnowAccordion />
        </div>
      </div>
    </section>
  );
} 
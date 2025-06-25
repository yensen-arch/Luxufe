import PricingOptions from "./PricingOptions";
import AvailableCabins from "./AvailableCabins";
import VesselView from "./VesselView";
import TripExtensions from "./TripExtensions";
import GoodToKnowAccordion from "./GoodToKnowAccordion";

export default function PricingAndCabinsSection() {
  return (
    <section className="bg-white border-t border-l border-gray-300">
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 w-full md:pr-8 p-12 border-r border-gray-300">
          <PricingOptions />
        </div>
        <div className="md:w-3/4 w-full p-12 border-t border-l border-gray-300">
          <AvailableCabins />
          <VesselView />
          <TripExtensions />
          <GoodToKnowAccordion />
        </div>
      </div>
    </section>
  );
} 
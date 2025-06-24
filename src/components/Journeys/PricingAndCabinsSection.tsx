import PricingOptions from "./PricingOptions";
import AvailableCabins from "./AvailableCabins";

export default function PricingAndCabinsSection() {
  return (
    <section className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-6 md:px-10">
        <div className="md:w-1/3 w-full md:pr-8">
          <PricingOptions />
        </div>
        <div className="md:w-2/3 w-full md:pl-8">
          <AvailableCabins />
        </div>
      </div>
    </section>
  );
} 
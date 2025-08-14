import VisitView from "./VisitView";
import GoodToKnowAccordion from "./GoodToKnowAccordion";

export default function PricingAndHotelsSection() {
  return (
    <section className="bg-white border-t-2 border-gray-300">
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 w-full md:pr-8 p-6 md:p-12 border-r-2 border-gray-300">
        </div>
        <div className="md:w-3/4 w-full p-6 md:p-12">
          <VisitView />
          <GoodToKnowAccordion />
        </div>
      </div>
    </section>
  );
} 
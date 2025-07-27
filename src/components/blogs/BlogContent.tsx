import React from "react";

export default function BlogContent() {
  return (
    <article className="flex-1 max-w-3xl pb-12 md:pb-16 lg:pb-24 pr-0 md:pr-20 lg:pr-30">
      {/* Intro Title and Paragraph */}
      <h2 className="text-lg md:text-xl lg:text-2xl font-arpona font-bold text-slate-700 mb-4 md:mb-5 lg:mb-6 mt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
      </h2>
      <div className="space-y-4 md:space-y-5 lg:space-y-6 text-sm md:text-base lg:text-md text-slate-700 font-bold font-inter mb-8 md:mb-9 lg:mb-10">
        <p>
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. <a href="#" className="text-slate-500 underline">Bawds jog, flick quartz</a>, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.
        </p>
        <p>
          Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek"s fun TV quiz game
        </p>
      </div>
      {/* Main Hero Image and Caption */}
      <div className="w-full flex flex-col items-start mb-6 md:mb-7 lg:mb-8">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Blog Hero"
          className="w-full max-w-4xl h-[250px] md:h-[300px] lg:h-[350px] object-cover"
        />
        <span className="text-xs text-slate-400 mt-2">Caption styling goes here</span>
      </div>
      {/* Subheading in script font */}
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bellarina italic text-left text-slate-700 mb-2 md:mb-3 mt-8 md:mt-10 lg:mt-12">This is a sub heading</h3>
      <div className="space-y-4 md:space-y-5 lg:space-y-6 text-slate-700 text-sm md:text-base lg:text-md font-bold font-inter mb-8 md:mb-9 lg:mb-10">
        <p>
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.
        </p>
        <p>
          Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls.
        </p>
      </div>
      {/* Section Heading */}
      <h4 className="text-base md:text-lg font-arpona font-bold text-slate-700 mb-3 md:mb-4 mt-8 md:mt-9 lg:mt-10 uppercase tracking-widest">A SMALL SECTION HEADING</h4>
      <div className="space-y-4 md:space-y-5 lg:space-y-6 text-slate-700 text-sm md:text-base font-bold font-inter mb-8 md:mb-9 lg:mb-10">
        <p>
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.
        </p>
      </div>
      {/* Blockquote */}
      <blockquote className="bg-slate-100 text-slate-700 text-sm md:text-base lg:text-md font-bold font-inter px-4 md:px-8 lg:px-18 py-6 md:py-7 lg:py-8 w-full text-center mb-8 md:mb-9 lg:mb-10">
        Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.
      </blockquote>
      {/* Two Images Side by Side with Captions */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 justify-center mb-8 md:mb-9 lg:mb-10">
        <div className="flex-1 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Pool"
            className="w-full max-w-xs h-60 md:h-75 lg:h-90 object-cover"
          />
          <span className="text-xs items-start w-full text-slate-400 font-bold mt-2">Caption styling goes here</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
            alt="Sunset"
            className="w-full max-w-xs h-60 md:h-75 lg:h-90 object-cover"
          />
          <span className="text-xs items-start w-full text-slate-400 font-bold mt-2">Caption styling goes here</span>
        </div>
      </div>
      {/* Author Card at Bottom */}
      <div className="flex items-center gap-3 md:gap-4 my-12 md:my-14 lg:my-16 border-y-2 border-slate-300 py-3 md:py-4">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
          alt="Author"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-bold text-slate-700 text-sm md:text-base">Author Name</div>
          <div className="text-xs text-slate-400 font-bold">Job Title</div>
        </div>
      </div>
    </article>
  );
} 
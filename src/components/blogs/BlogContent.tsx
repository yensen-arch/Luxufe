import React from "react";

export default function BlogContent() {
  return (
    <article className="flex-1 max-w-3xl mx-auto pt-12 pb-24 px-4">
      {/* Intro Title and Paragraph */}
      <h2 className="text-2xl font-arpona font-bold text-slate-700 mb-6 mt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
      </h2>
      <div className="space-y-6 text-slate-700 text-base font-inter mb-10">
        <p className="font-bold">
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. <a href="#" className="text-slate-500 underline">Bawds jog, flick quartz</a>, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.
        </p>
        <p>
          Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek"s fun TV quiz game
        </p>
      </div>
      {/* Main Hero Image and Caption */}
      <div className="w-full flex flex-col items-center mb-8">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Blog Hero"
          className="w-full max-w-4xl h-[350px] object-cover rounded"
        />
        <span className="text-xs text-slate-400 mt-2">Caption styling goes here</span>
      </div>
      {/* Subheading in script font */}
      <h3 className="text-3xl font-bellarina italic text-center text-slate-700 my-12">This is a sub heading</h3>
      <div className="space-y-6 text-slate-700 text-base font-inter mb-10">
        <p className="font-bold">
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.
        </p>
        <p>
          Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls.
        </p>
      </div>
      {/* Section Heading */}
      <h4 className="text-lg font-arpona font-bold text-slate-700 mb-4 mt-10 uppercase tracking-widest">A SMALL SECTION HEADING</h4>
      <div className="space-y-6 text-slate-700 text-base font-inter mb-10">
        <p>
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.
        </p>
      </div>
      {/* Blockquote */}
      <blockquote className="bg-slate-100 text-slate-700 text-lg font-inter px-8 py-8 rounded w-full text-center mb-10">
        Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.
      </blockquote>
      {/* Two Images Side by Side with Captions */}
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-10">
        <div className="flex-1 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Pool"
            className="w-full max-w-xs h-64 object-cover rounded"
          />
          <span className="text-xs text-slate-400 mt-2">Caption styling goes here</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
            alt="Sunset"
            className="w-full max-w-xs h-64 object-cover rounded"
          />
          <span className="text-xs text-slate-400 mt-2">Caption styling goes here</span>
        </div>
      </div>
      {/* Author Card at Bottom */}
      <div className="flex items-center gap-4 mt-16 border-t border-slate-200 pt-8">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
          alt="Author"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-bold text-slate-700">Author Name</div>
          <div className="text-xs text-slate-400">Job Title</div>
        </div>
      </div>
    </article>
  );
} 
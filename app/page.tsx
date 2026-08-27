const whatsappHref = "https://wa.me/6586952257?text=Hi%20Spirit%20Beauty%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.";
const brazilianHref = "https://wa.me/6586952257?text=Hi%20Spirit%20Beauty%2C%20I%20would%20like%20to%20book%20Brazilian%20SHR%20IPL%20%2448.";
const hairHref = "https://wa.me/6586952257?text=Hi%20Spirit%20Beauty%2C%20I%20would%20like%20to%20enquire%20about%20your%20hair%20colour%20promotion.";
const facialHref = "https://wa.me/6586952257?text=Hi%20Spirit%20Beauty%2C%20I%20would%20like%20to%20book%20the%20%2488%20facial%20trial.";
const mapsHref = "https://www.google.com/maps/search/?api=1&query=Spirit%20Beauty%20Blk%20554%20Ang%20Mo%20Kio%20Ave%2010%20%2301-2044%20Singapore%20560554";

const iplPrices = [["Upper Lip","$18"],["Underarm","$38"],["Face","$48"],["Brazilian","$48"],["Half Leg","$68"]];
const reviews = [
  ["IPL · Cheryl", "Professional, honest and trustworthy service. A long-time client who noticed slower hair growth after several sessions."],
  ["IPL · Alicia", "Reasonable prices, visible results and great service. Highly recommended by a returning client."],
  ["IPL & Facial · iammey", "A long-time underarm and Brazilian IPL client praised the results, relaxing facial experience and clean space."],
  ["Hair · Josiah", "Praised the hairstylist's patience, experience and ability to understand the style a client wants."],
];
const faqs = [
  ["Is SHR IPL hair removal a one-time treatment?", "No. Hair grows in different cycles, so SHR IPL hair reduction requires multiple sessions rather than a single treatment."],
  ["How many sessions will I need?", "Many clients may require around 10–12 sessions, but the number varies according to treatment area, hair thickness and colour, skin tone, hair-growth cycle and individual response."],
  ["How soon can I see results?", "Some clients notice visible reduction in hair growth after the first 1–2 sessions. Results vary from person to person."],
  ["What should I avoid during the treatment course?", "Avoid waxing, plucking and epilating because these remove the hair from the root. Shaving is generally the preferred method between sessions when needed."],
  ["Can I get a hair colour quotation first?", "Yes. Send us a clear photo of your current hair and a reference photo of the colour you want through WhatsApp."],
];

function CTA({ href, children, light=false }:{ href:string; children:React.ReactNode; light?:boolean }) {
  return <a href={href} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 ${light?"bg-white text-ink":"bg-[#17130d] text-[#e6c56f]"}`}>{children}</a>;
}

export default function Home(){
  const structuredData={
    "@context":"https://schema.org",
    "@type":"BeautySalon",
    name:"Spirit Beauty SG",
    description:"SHR IPL hair removal, hair colour and facial services in Ang Mo Kio, Singapore.",
    telephone:"+65 8695 2257",
    address:{"@type":"PostalAddress",streetAddress:"Blk 554 Ang Mo Kio Ave 10 #01-2044",addressLocality:"Singapore",postalCode:"560554",addressCountry:"SG"},
    openingHoursSpecification:[
      {"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Friday"],opens:"13:00",closes:"20:00"},
      {"@type":"OpeningHoursSpecification",dayOfWeek:["Saturday","Sunday"],opens:"13:00",closes:"19:00"}
    ]
  };
  return <main id="top" className="overflow-x-hidden pb-20 md:pb-0">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>

    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#17130d]/95 text-white backdrop-blur">
      <div className="container-page flex min-h-20 items-center justify-between gap-4">
        <a href="#top" className="leading-none"><div className="font-display text-2xl font-semibold tracking-[.04em] text-[#e6c56f]">SPIRIT BEAUTY</div><div className="mt-1 text-[8px] uppercase tracking-[.34em] text-[#f1dfae]">Singapore</div></a>
        <nav className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[.14em] md:flex"><a href="#ipl">SHR IPL</a><a href="#hair">Hair</a><a href="#facial">Facial</a><a href="#results">Results</a><a href="#faq">FAQ</a><a href="#visit">Visit</a></nav>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full border border-[#e6c56f]/80 px-4 py-2 text-[11px] font-semibold text-[#f1dfae]">WhatsApp</a>
      </div>
    </header>

    <section className="relative min-h-[760px] bg-[#17130d] text-white">
      <img src="/media/IMG-20260827-WA0001.jpg" alt="Spirit Beauty storefront in Ang Mo Kio" className="absolute inset-0 h-full w-full object-cover object-[center_1%]"/>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30"/>
      <div className="container-page relative flex min-h-[760px] items-end pb-14 pt-36 sm:items-center sm:pb-0"><div className="max-w-3xl">
        <div className="mb-5 inline-flex rounded-full border border-[#e6c56f]/40 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.2em] text-[#f1dfae]">Ang Mo Kio · Singapore</div>
        <h1 className="font-display text-[3.2rem] font-medium leading-[.92] tracking-[-.035em] sm:text-7xl lg:text-[5.5rem]">Brazilian SHR IPL <span className="text-[#e6c56f]">$48</span><br/><span className="italic text-[#f0ddd3]">Hair · Facial · Beauty</span></h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">One simple page for our current promotions, real client results, hair colour, facial care, opening hours and direct WhatsApp booking.</p>
        <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row"><CTA href={brazilianHref} light>Book Brazilian IPL $48</CTA><a href="#hair" className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold">See all services ↓</a></div>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/65"><span>✓ Clear pricing</span><span>✓ No hard selling</span><span>✓ Direct WhatsApp booking</span></div>
      </div></div>
    </section>

    <section className="border-b border-sand bg-white py-4"><div className="container-page grid grid-cols-3 gap-2 text-center text-[10px] font-semibold uppercase tracking-[.12em] text-cocoa sm:text-xs"><a href="#ipl" className="rounded-full bg-cream px-2 py-3">SHR IPL</a><a href="#hair" className="rounded-full bg-cream px-2 py-3">Hair</a><a href="#facial" className="rounded-full bg-cream px-2 py-3">Facial</a></div></section>

    <section id="ipl" className="scroll-mt-20 bg-cream py-20 lg:py-28"><div className="container-page">
      <div className="max-w-3xl"><p className="eyebrow">Main promotion · SHR IPL</p><h2 className="section-title">Smoother skin starts here.</h2><p className="mt-4 text-lg font-semibold text-cocoa">Featured: Brazilian SHR IPL $48</p><p className="mt-4 leading-7 text-ink/65">SHR IPL hair reduction requires a course of treatments because hair grows in different cycles. Consultation is recommended because skin and hair characteristics differ from person to person.</p></div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{iplPrices.map(([area,price])=><article key={area} className={`rounded-2xl border p-6 ${area==="Brazilian"?"border-[#b98b2e] bg-[#17130d] text-white ring-2 ring-[#e6c56f]/30":"border-sand bg-white"}`}><p className={`text-xs font-semibold uppercase tracking-widest ${area==="Brazilian"?"text-[#e6c56f]":"text-cocoa"}`}>{area}{area==="Brazilian"?" · Featured":""}</p><div className="mt-4 font-display text-4xl">{price}</div></article>)}</div>
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-start"><div><h3 className="font-display text-3xl font-semibold">Why clients choose our SHR IPL</h3><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Shaving and treatment gel included","Unlimited shots for the treatment area","Fast, targeted treatment","Helps reduce the appearance of ingrown hairs","No hard selling","No hidden costs"].map(item=><div key={item} className="rounded-xl bg-white p-4 text-sm font-semibold shadow-sm">✓ {item}</div>)}</div><p className="mt-5 text-xs leading-5 text-ink/45">Hair-reduction results and treatment experience vary between individuals.</p><div className="mt-7"><CTA href={brazilianHref}>Book Brazilian $48</CTA></div></div><figure className="overflow-hidden rounded-3xl border border-sand bg-white shadow-soft"><img src="/media/ipl-brazilian.webp" alt="Brazilian IPL before and after result" className="w-full object-cover"/><figcaption className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-cocoa">Real client result · Brazilian IPL</figcaption></figure></div>
    </div></section>

    <section id="hair" className="scroll-mt-20 bg-[#17130d] py-20 text-white lg:py-28"><div className="container-page grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center"><div><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#e6c56f]">Hair promotions</p><h2 className="mt-4 font-display text-5xl font-medium leading-none sm:text-6xl">Fresh colour. Fresh look.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">Whole hair colour promotions plus highlights and balayage. Send us your current hair photo and reference colour on WhatsApp for a quotation.</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{[["Men's Whole Hair Colour","$50"],["Ladies' Whole Hair Colour","$90"],["Highlight / Balayage","From $310"]].map(([title,price])=><article key={title} className="rounded-2xl border border-[#e6c56f]/25 bg-white/5 p-6"><p className="text-[10px] uppercase tracking-widest text-[#e6c56f]">{title}</p><div className="mt-4 font-display text-4xl">{price}</div></article>)}</div><p className="mt-4 text-xs leading-5 text-white/45">Prices may vary for extra-long or very thick hair and services requiring additional bleaching or product.</p><div className="mt-8"><CTA href={hairHref} light>Ask about hair promotions</CTA></div></div><figure className="overflow-hidden rounded-3xl border border-white/15 bg-white/5"><img src="/media/FB_IMG_1787475829652.jpg" alt="Spirit Beauty hair colour design" className="aspect-[4/5] h-full w-full object-cover"/><figcaption className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#e6c56f]">Spirit Beauty hair work</figcaption></figure></div></section>

    <section id="facial" className="scroll-mt-20 py-20 lg:py-28"><div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow">Facial care</p><h2 className="section-title">Personalised care for your skin.</h2><p className="mt-6 text-sm leading-7 text-ink/60">Our therapist discusses your skin concerns and recommends a suitable treatment approach.</p><div className="mt-7 rounded-3xl bg-[#17130d] p-7 text-white"><p className="text-xs uppercase tracking-widest text-[#e6c56f]">Facial Trial</p><div className="mt-3 font-display text-5xl">$88</div><div className="mt-6"><CTA href={facialHref} light>Book facial trial</CTA></div></div></div><div className="grid gap-3 sm:grid-cols-2">{["Dermal Control Clear-Up Treatment","Pico Laser Treatment","AOPT (Advanced Optimal Pulse Technology)","Nano Needle EMS Treatment"].map((item,index)=><div key={item} className="rounded-2xl bg-cream p-6"><p className="text-xs font-semibold text-cocoa">0{index+1}</p><p className="mt-3 font-semibold leading-6">{item}</p></div>)}</div></div></section>

    <section id="results" className="scroll-mt-20 bg-cream py-20 lg:py-28"><div className="container-page"><div className="max-w-2xl"><p className="eyebrow">Client feedback</p><h2 className="section-title">Why clients come back.</h2></div><div className="mt-10 grid gap-4 md:grid-cols-2">{reviews.map(([title,text])=><article key={title} className="rounded-2xl bg-white p-6 shadow-sm"><p className="text-xs font-semibold uppercase tracking-widest text-cocoa">{title}</p><p className="mt-3 text-sm leading-7 text-ink/65">{text}</p></article>)}</div></div></section>

    <section id="faq" className="scroll-mt-20 py-20 lg:py-28"><div className="container-page max-w-4xl"><p className="eyebrow">FAQ</p><h2 className="section-title">Common questions before booking.</h2><div className="mt-10 divide-y divide-sand border-y border-sand">{faqs.map(([q,a])=><details key={q} className="py-5"><summary className="cursor-pointer list-none pr-8 font-semibold">{q}<span className="float-right text-cocoa">+</span></summary><p className="mt-3 max-w-3xl text-sm leading-7 text-ink/60">{a}</p></details>)}</div></div></section>

    <section id="visit" className="scroll-mt-20 bg-[#17130d] py-20 text-white lg:py-28"><div className="container-page grid gap-8 lg:grid-cols-2"><div><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#e6c56f]">Visit Spirit Beauty</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Blk 554 Ang Mo Kio Ave 10<br/><span className="text-[#e6c56f]">#01-2044 · Singapore 560554</span></h2><div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row"><CTA href={whatsappHref} light>WhatsApp us</CTA><a href={mapsHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold">Get directions</a></div></div><div className="rounded-3xl border border-white/10 bg-white/5 p-7"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#e6c56f]">Opening Hours</p><div className="mt-5 space-y-3 text-sm text-white/80"><div className="flex justify-between gap-4"><span>Mon–Wed & Fri</span><strong>1 PM – 8 PM</strong></div><div className="flex justify-between gap-4"><span>Sat–Sun</span><strong>1 PM – 7 PM</strong></div><div className="flex justify-between gap-4"><span>Thursday</span><strong>Closed</strong></div></div><p className="mt-5 border-t border-white/10 pt-5 text-xs leading-5 text-white/55">Last appointment: 7 PM where appointment duration allows. Please WhatsApp us to confirm availability.</p></div></div></section>

    <footer className="border-t border-white/10 bg-[#17130d] py-10 text-white"><div className="container-page flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><div className="font-display text-2xl text-[#e6c56f]">SPIRIT BEAUTY</div><p className="mt-1 text-xs text-white/50">SHR IPL Hair Removal · Hair · Facial</p><p className="mt-2 text-[11px] text-white/35">Ang Mo Kio · Singapore</p></div><div className="flex gap-5 text-sm font-semibold text-[#f1dfae]"><a href={mapsHref} target="_blank" rel="noreferrer">Directions</a><a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp us →</a></div></div></footer>

    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-black/10 bg-white p-3 shadow-[0_-10px_30px_rgba(0,0,0,.08)] md:hidden"><a href={mapsHref} target="_blank" rel="noreferrer" className="mx-1 rounded-full border border-cocoa px-4 py-3 text-center text-xs font-semibold text-cocoa">Directions</a><a href={whatsappHref} target="_blank" rel="noreferrer" className="mx-1 rounded-full bg-[#25D366] px-4 py-3 text-center text-xs font-semibold text-white">WhatsApp</a></div>
  </main>;
}

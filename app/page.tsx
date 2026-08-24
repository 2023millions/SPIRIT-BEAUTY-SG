const whatsappHref = "#contact";

function Icon({ name }: { name: "sparkle" | "heart" | "clock" | "check" | "arrow" | "pin" | "whatsapp" }) {
  const paths = {
    sparkle: <path d="M12 2c.6 5.1 3.1 8 8 8-4.9 0-7.4 2.9-8 8-.6-5.1-3.1-8-8-8 4.9 0 7.4-2.9 8-8Z" />,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    whatsapp: <><path d="M21 11.5a9 9 0 0 1-13.3 7.9L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" /><path d="M8.2 7.8c.4 3.5 2.4 5.5 5.9 6.1l1.4-1.4" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function CTA({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <a href={whatsappHref} className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 ${light ? "bg-white text-ink hover:bg-cream" : "bg-ink text-white hover:bg-cocoa"}`}><Icon name="whatsapp" />{children}</a>;
}

const areas = ["Underarms", "Arms", "Legs", "Bikini line", "Upper lip", "Chin & face"];
const faqs = [
  ["What is IPL hair removal?", "IPL uses pulses of light as part of a cosmetic hair reduction treatment. We’ll explain the process and discuss whether it suits your needs before you book."],
  ["How many sessions will I need?", "Treatment plans vary from person to person. Contact us for a consultation so we can recommend a suitable plan without overpromising results."],
  ["How should I prepare for my appointment?", "Preparation can depend on your treatment area and personal circumstances. We’ll share the relevant pre-appointment guidance when confirming your booking."],
  ["Where is Spirit Beauty SG located?", "We’re based in Ang Mo Kio, Singapore. The full unit address and directions will be added once confirmed."],
];

export default function Home() {
  return <main>
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/25 text-white">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#top" className="focus-ring" aria-label="Spirit Beauty SG home"><div className="font-display text-2xl font-semibold tracking-wide">SPIRIT</div><div className="-mt-1 text-[8px] uppercase tracking-[0.34em]">Beauty Singapore</div></a>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest md:flex" aria-label="Main navigation"><a href="#ipl" className="hover:text-sand">IPL</a><a href="#services" className="hover:text-sand">Services</a><a href="#faq" className="hover:text-sand">FAQ</a><a href="#contact" className="hover:text-sand">Contact</a></nav>
        <a href={whatsappHref} className="focus-ring rounded-full border border-white/70 px-4 py-2 text-xs font-semibold sm:px-5">Book via WhatsApp</a>
      </div>
    </header>

    <section id="top" className="relative min-h-[760px] overflow-hidden bg-[#766b63] text-white sm:min-h-[800px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(230,209,194,.65),transparent_24%),linear-gradient(115deg,#4e4844_0%,#776a62_46%,#b3a296_100%)]" />
      <div className="absolute right-[7%] top-[18%] hidden h-[62%] w-[34%] rounded-[180px_180px_24px_24px] border border-white/30 bg-[linear-gradient(145deg,rgba(255,255,255,.2),rgba(255,255,255,.02))] shadow-2xl lg:block"><div className="absolute inset-8 rounded-[150px_150px_16px_16px] border border-white/20" /><span className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-[.25em] text-white/65">Your salon image here</span></div>
      <div className="container-page relative flex min-h-[760px] items-end pb-16 pt-32 sm:min-h-[800px] sm:items-center sm:pb-0">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.25em] text-[#f1dfd3]"><Icon name="sparkle" /> Ang Mo Kio · Singapore</p>
          <h1 className="font-display text-[3.8rem] font-medium leading-[.9] tracking-[-.035em] sm:text-7xl lg:text-[6.5rem]">Feel smooth.<br/><span className="italic text-[#ead5c8]">Feel confident.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg">Personalised IPL hair removal in a warm, comfortable beauty space—thoughtfully tailored to you.</p>
          <div className="mt-8 flex flex-col items-stretch gap-3 min-[400px]:flex-row min-[400px]:items-center"><CTA light>Enquire on WhatsApp</CTA><a href="#ipl" className="focus-ring inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold">Explore IPL treatments <Icon name="arrow" /></a></div>
          <p className="mt-5 text-xs text-white/60">Consultation recommended before your first treatment.</p>
        </div>
      </div>
    </section>

    <section className="border-b border-sand/60 bg-white py-6"><div className="container-page grid gap-4 text-center text-xs font-semibold uppercase tracking-[.14em] text-cocoa sm:grid-cols-3 sm:text-left"><div className="flex items-center justify-center gap-3 sm:justify-start"><Icon name="heart"/>Personalised care</div><div className="flex items-center justify-center gap-3"><Icon name="sparkle"/>Comfort-led experience</div><div className="flex items-center justify-center gap-3 sm:justify-end"><Icon name="pin"/>Convenient Ang Mo Kio location</div></div></section>

    <section className="py-24 lg:py-32"><div className="container-page grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><div><p className="eyebrow">Why Spirit Beauty</p><h2 className="section-title">Beauty care that feels<br/>genuinely personal.</h2></div><div className="grid gap-8 sm:grid-cols-3">{[["01","Thoughtful consultation","We listen first, then guide you towards services suited to your needs."],["02","A comfortable setting","A welcoming salon experience designed around your comfort and privacy."],["03","Care beyond IPL","Hair and beauty services, all in one convenient neighbourhood location."]].map(([n,t,d])=><article key={n} className="border-t border-sand pt-5"><span className="text-xs text-blush">{n}</span><h3 className="mt-5 font-display text-2xl font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-ink/60">{d}</p></article>)}</div></div></section>

    <section id="ipl" className="bg-cream py-24 lg:py-32"><div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center"><div className="relative min-h-[500px] overflow-hidden rounded-t-[180px] bg-[radial-gradient(circle_at_50%_26%,#f1ded2,transparent_28%),linear-gradient(150deg,#c8b5a9,#8e7d73)] shadow-soft"><div className="absolute inset-7 rounded-t-[155px] border border-white/40"/><div className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/80 px-4 py-2 text-[9px] uppercase tracking-[.2em] text-cocoa backdrop-blur">Treatment photo coming soon</div></div><div className="lg:pl-10"><p className="eyebrow">Our signature focus</p><h2 className="section-title">IPL hair removal,<br/><span className="italic text-cocoa">made approachable.</span></h2><p className="mt-7 max-w-xl leading-7 text-ink/65">Looking for a longer-term approach to managing unwanted hair? Our IPL service begins with a conversation about your goals, treatment area and suitability.</p><div className="mt-8 space-y-4">{["Personalised treatment approach","Multiple face and body areas","Pre-treatment guidance provided"].map(x=><div key={x} className="flex items-center gap-3 text-sm font-semibold"><span className="grid h-7 w-7 place-items-center rounded-full bg-white text-cocoa"><Icon name="check"/></span>{x}</div>)}</div><div className="mt-9"><CTA>Ask about IPL on WhatsApp</CTA></div><p className="mt-4 text-xs leading-5 text-ink/45">IPL suitability and individual experiences vary. A consultation is recommended.</p></div></div></section>

    <section className="py-24 lg:py-32"><div className="container-page"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Treatment areas</p><h2 className="section-title">Care for the areas<br/>that matter to you.</h2><p className="mt-5 text-sm leading-6 text-ink/60">Ask us about availability and suitability for your preferred area.</p></div><div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{areas.map((area,i)=><div key={area} className="group flex min-h-36 flex-col justify-between rounded-2xl bg-cream p-5 transition hover:-translate-y-1 hover:shadow-soft"><span className="text-xs text-blush">0{i+1}</span><h3 className="font-display text-xl font-semibold">{area}</h3></div>)}</div></div></section>

    <section id="services" className="bg-ink py-24 text-white lg:py-32"><div className="container-page"><p className="eyebrow !text-blush">More ways to feel your best</p><div className="mt-4 grid gap-14 lg:grid-cols-2"><article><div className="h-72 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_70%_35%,#d8bdb0,transparent_25%),linear-gradient(130deg,#a48e82,#5f5048)]"><div className="m-5 flex h-[calc(100%-2.5rem)] items-end justify-center rounded-xl border border-white/20 pb-5 text-[9px] uppercase tracking-[.2em] text-white/50">Hair service image coming soon</div></div><h2 className="mt-7 font-display text-4xl sm:text-5xl">Hair services</h2><p className="mt-4 max-w-lg text-sm leading-7 text-white/60">Refresh your look with salon hair services delivered with the same attentive, personal care.</p><p className="mt-5 text-xs uppercase tracking-widest text-blush">Service menu · Details to be confirmed</p></article><article className="lg:mt-28"><div className="h-72 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_30%_30%,#dacfc0,transparent_26%),linear-gradient(130deg,#8c8177,#baaa9d)]"><div className="m-5 flex h-[calc(100%-2.5rem)] items-end justify-center rounded-xl border border-white/20 pb-5 text-[9px] uppercase tracking-[.2em] text-white/50">Beauty service image coming soon</div></div><h2 className="mt-7 font-display text-4xl sm:text-5xl">Beauty services</h2><p className="mt-4 max-w-lg text-sm leading-7 text-white/60">Make time for you with our selection of beauty services in a relaxed neighbourhood setting.</p><p className="mt-5 text-xs uppercase tracking-widest text-blush">Service menu · Details to be confirmed</p></article></div></div></section>

    <section id="faq" className="py-24 lg:py-32"><div className="container-page grid gap-14 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">Good to know</p><h2 className="section-title">Your questions,<br/>answered.</h2><p className="mt-6 text-sm leading-6 text-ink/60">Have another question? Send us a WhatsApp message and we’ll be happy to help.</p></div><div className="divide-y divide-sand border-y border-sand">{faqs.map(([q,a],i)=><details key={q} className="group py-6" open={i===0}><summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-semibold sm:text-2xl">{q}<span className="text-2xl font-light text-cocoa group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 text-sm leading-7 text-ink/60">{a}</p></details>)}</div></div></section>

    <section id="contact" className="bg-sage py-20 text-white lg:py-24"><div className="container-page grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-white/60">Ready when you are</p><h2 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-none sm:text-6xl lg:text-7xl">Let’s start with a conversation.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/70">Tell us which service you’re interested in and your preferred appointment timing. We’ll reply with the details you need.</p><div className="mt-8"><CTA light>Book via WhatsApp</CTA></div><p className="mt-4 text-xs text-white/50">WhatsApp number to be provided</p></div><div className="rounded-2xl border border-white/20 p-7"><div className="flex gap-4"><Icon name="pin"/><div><h3 className="font-display text-2xl">Visit us</h3><p className="mt-2 text-sm leading-6 text-white/65">Ang Mo Kio, Singapore<br/><span className="text-[#f1d3c3]">Full address to be provided</span></p></div></div><div className="mt-7 flex gap-4 border-t border-white/15 pt-7"><Icon name="clock"/><div><h3 className="font-display text-2xl">Opening hours</h3><p className="mt-2 text-sm text-[#f1d3c3]">To be provided</p></div></div></div></div></section>

    <footer className="bg-[#1c1a18] py-10 text-white"><div className="container-page flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div><div className="font-display text-3xl font-semibold tracking-wide">SPIRIT</div><div className="text-[9px] uppercase tracking-[.35em] text-white/55">Beauty Singapore</div><p className="mt-5 text-xs text-white/40">IPL hair removal · Hair · Beauty</p></div><div className="text-xs text-white/40 sm:text-right"><p>Ang Mo Kio, Singapore</p><p className="mt-2">© {new Date().getFullYear()} Spirit Beauty SG</p></div></div></footer>

    <a href={whatsappHref} aria-label="Book via WhatsApp" className="focus-ring fixed bottom-4 right-4 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#277d54] text-white shadow-xl transition hover:scale-105 sm:hidden"><Icon name="whatsapp"/></a>
  </main>;
}

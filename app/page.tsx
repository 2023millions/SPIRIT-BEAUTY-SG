const whatsappHref = "https://wa.me/6586952257?text=Hi%20Spirit%20Beauty%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.";

const iplPrices = [
  ["Upper Lip", "$18"],
  ["Underarm", "$38"],
  ["Face", "$48"],
  ["Brazilian", "$48"],
  ["Half Leg", "$68"],
];

const iplBenefits = [
  "Shaving and treatment gel included",
  "Unlimited shots for the treatment area",
  "Fast, targeted treatment",
  "Helps reduce the appearance of ingrown hairs",
  "No hard selling",
  "No hidden costs",
];

const reviews = [
  ["IPL · Cheryl", "Professional, honest and trustworthy service. A long-time client who noticed slower hair growth after several sessions."],
  ["IPL · Alicia", "Reasonable prices, visible results and great service. Highly recommended by a returning client."],
  ["IPL & Facial · iammey", "A long-time underarm and Brazilian IPL client praised the results, relaxing facial experience and clean space."],
  ["Hair · Josiah", "Praised the hairstylist's patience, experience and ability to understand the style a client wants."],
];

function WhatsAppButton({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 ${
        light ? "bg-white text-ink" : "bg-[#17130d] text-[#e6c56f]"
      }`}
    >
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#17130d]/90 text-white backdrop-blur">
        <div className="container-page flex min-h-20 items-center justify-between gap-4">
          <a href="#top" className="leading-none">
            <div className="font-display text-2xl font-semibold tracking-[.04em] text-[#e6c56f]">SPIRIT BEAUTY</div>
            <div className="mt-1 text-[8px] uppercase tracking-[.34em] text-[#f1dfae]">Singapore</div>
          </a>
          <nav className="hidden items-center gap-6 text-[11px] font-semibold uppercase tracking-[.16em] md:flex">
            <a href="#ipl">SHR IPL</a>
            <a href="#hair">Hair</a>
            <a href="#facial">Facial</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </nav>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full border border-[#e6c56f]/80 px-4 py-2 text-[11px] font-semibold text-[#f1dfae]">
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative min-h-[760px] bg-[#17130d] text-white">
        <img src="/media/storefront.webp" alt="Spirit Beauty storefront in Ang Mo Kio" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="container-page relative flex min-h-[760px] items-end pb-14 pt-36 sm:items-center sm:pb-0">
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[.25em] text-[#f1dfae]">Ang Mo Kio · Singapore</p>
            <h1 className="font-display text-[3.2rem] font-medium leading-[.92] tracking-[-.035em] sm:text-7xl lg:text-[5.5rem]">
              Smoother skin.<br />
              <span className="italic text-[#f0ddd3]">Fresh colour.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              SHR IPL hair removal, whole hair colour promotions and personalised facial care — all in one welcoming neighbourhood beauty studio.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <WhatsAppButton label="Book via WhatsApp" light />
              <a href="#ipl" className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold">See SHR IPL promotion ↓</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Spirit Beauty · Ang Mo Kio</p>
            <h2 className="section-title">Where Beauty<br />Meets Expertise.</h2>
            <p className="mt-5 text-sm leading-7 text-ink/65">
              Personalised beauty care, thoughtfully tailored to you. Professional SHR IPL Hair Removal, Hair and Facial services in Ang Mo Kio.
            </p>
            <div className="mt-7"><WhatsAppButton label="Enquire now" /></div>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-sand bg-cream shadow-soft">
            <img src="/media/storefront.webp" alt="Spirit Beauty storefront" className="aspect-[4/3] h-full w-full object-cover" />
          </figure>
        </div>
      </section>

      <section id="ipl" className="bg-cream py-24 lg:py-32">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">Main promotion · SHR IPL</p>
            <h2 className="section-title">Smoother skin starts here.</h2>
            <p className="mt-5 text-xl font-semibold text-cocoa">SHR · Super Hair Removal</p>
            <p className="mt-4 leading-7 text-ink/65">
              SHR uses repeated lower-energy light pulses to progressively warm the treatment area for fast coverage and a gentler treatment experience. Suitability and results vary by individual and skin type.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {iplPrices.map(([area, price]) => (
              <article key={area} className={`rounded-2xl border p-6 ${area === "Brazilian" ? "border-[#b98b2e] bg-[#17130d] text-white" : "border-sand bg-white"}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest ${area === "Brazilian" ? "text-[#e6c56f]" : "text-cocoa"}`}>
                  {area}{area === "Brazilian" ? " · Popular" : ""}
                </p>
                <div className="mt-4 font-display text-4xl">{price}</div>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-start">
            <div>
              <h3 className="font-display text-3xl font-semibold">Why clients choose our SHR IPL</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {iplBenefits.map((item) => (
                  <div key={item} className="rounded-xl bg-white p-4 text-sm font-semibold shadow-sm">✓ {item}</div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-5 text-ink/45">Hair-reduction results and treatment experience vary between individuals. Consultation is recommended.</p>
              <div className="mt-7"><WhatsAppButton label="Book SHR IPL" /></div>
            </div>
            <figure className="overflow-hidden rounded-3xl border border-sand bg-white shadow-soft">
              <img src="/media/ipl-brazilian.webp" alt="Brazilian IPL before and after result" className="w-full object-cover" />
              <figcaption className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-cocoa">Real client result · Brazilian IPL</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="hair" className="bg-[#17130d] py-24 text-white lg:py-32">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#e6c56f]">Hair · Main promotion</p>
              <h2 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-none sm:text-6xl">Fresh colour. Fresh look.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">Whole hair colour promotions, plus special pricing for highlights and balayage.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[["Men's Whole Hair Colour", "$50"], ["Ladies' Whole Hair Colour", "$90"], ["Highlight / Balayage", "From $310"]].map(([title, price]) => (
                  <article key={title} className="rounded-2xl border border-[#e6c56f]/25 bg-white/5 p-6">
                    <p className="text-[10px] uppercase tracking-widest text-[#e6c56f]">{title}</p>
                    <div className="mt-4 font-display text-4xl">{price}</div>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-white/45">Prices may vary for extra-long or very thick hair and services requiring additional bleaching or product.</p>
              <div className="mt-8"><WhatsAppButton label="Ask about hair promotions" light /></div>
            </div>
            <figure className="overflow-hidden rounded-3xl border border-white/15 bg-white/5">
              <img src="/media/hair-bob.webp" alt="Latest Spirit Beauty hair colour design" className="aspect-[4/5] h-full w-full object-cover" />
              <figcaption className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#e6c56f]">Latest hair colour design</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="facial" className="py-24 lg:py-32">
        <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Facial care</p>
            <h2 className="section-title">Skin concerns deserve personalised care.</h2>
            <p className="mt-6 text-sm leading-7 text-ink/60">Our therapist assesses your skin and discusses a suitable treatment approach with you.</p>
            <div className="mt-7 rounded-3xl bg-[#17130d] p-7 text-white">
              <p className="text-xs uppercase tracking-widest text-[#e6c56f]">Facial Trial</p>
              <div className="mt-3 font-display text-5xl">$88</div>
              <div className="mt-6"><WhatsAppButton label="Book facial trial" light /></div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Dermal Control Clear-Up Treatment", "Pico Laser Treatment", "AOPT (Advanced Optimal Pulse Technology)", "Nano Needle EMS Treatment"].map((item, index) => (
              <div key={item} className="rounded-2xl bg-cream p-6">
                <p className="text-xs font-semibold text-cocoa">0{index + 1}</p>
                <p className="mt-3 font-semibold leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-cream py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Client reviews</p>
            <h2 className="section-title">Trusted across IPL, hair and facial.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map(([title, quote]) => (
              <article key={title} className="rounded-2xl bg-white p-7 shadow-soft">
                <div className="text-[#c79f42]">★★★★★</div>
                <p className="mt-5 text-sm leading-7 text-ink/60">{quote}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-cocoa">{title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24 lg:py-32">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_.85fr]">
          <div>
            <p className="eyebrow">Visit Spirit Beauty</p>
            <h2 className="section-title">Blk 554 Ang Mo Kio Ave 10<br /><span className="text-cocoa">#01-2044 · Singapore 560554</span></h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-ink/60">For SHR IPL, hair colour, facial appointments or price enquiries, message us directly on WhatsApp.</p>
            <div className="mt-8"><WhatsAppButton label="Chat with Spirit Beauty" /></div>
          </div>
          <div className="rounded-3xl bg-[#17130d] p-8 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#e6c56f]">Before you visit</p>
            <div className="mt-6 space-y-4 text-sm leading-6 text-white/75">
              <p>• Appointment recommended for IPL, colour and facial services.</p>
              <p>• Send a photo on WhatsApp if you are enquiring about hair colour or balayage.</p>
              <p>• For IPL, tell us the treatment area so we can advise the current promotion.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-sand bg-[#17130d] py-10 text-white">
        <div className="container-page flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-display text-2xl text-[#e6c56f]">SPIRIT BEAUTY</div>
            <p className="mt-1 text-xs text-white/50">Hair · Facial · SHR IPL Hair Removal</p>
          </div>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#f1dfae]">WhatsApp us →</a>
        </div>
      </footer>

      <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat with Spirit Beauty on WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-xl font-bold text-white shadow-lg">W</a>
    </main>
  );
}

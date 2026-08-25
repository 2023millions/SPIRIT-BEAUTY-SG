"use client";

const whatsappHref =
  "https://wa.me/6586950000?text=Hi%20Spirit%20Beauty%20SG%2C%20I%20would%20like%20to%20make%20an%20appointment.";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[85vh] overflow-hidden">
        <img
          src="/media/storefront.webp"
          alt="Spirit Beauty SG"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-300">
            Ang Mo Kio · Singapore
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Spirit Beauty SG
          </h1>

          <h2 className="mt-5 max-w-3xl text-2xl font-semibold md:text-4xl">
            Smooth Skin. Confident You.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Professional SHR IPL Hair Removal, Hair Services and Facial Care
            in Ang Mo Kio.
          </p>

          <div className="mt-8">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-green-500 px-7 py-4 font-bold text-black"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Beauty Care Made Simple
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="/media/ipl-brazilian.webp"
              alt="SHR IPL Hair Removal"
              className="h-72 w-full object-cover"
            />

            <div className="p-7">
              <p className="text-sm font-semibold text-pink-300">
                FEATURED SERVICE
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                SHR IPL Hair Removal
              </h3>

              <p className="mt-3 leading-7 text-gray-300">
                Comfortable and convenient hair removal treatments for smoother,
                cleaner-looking skin.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-semibold text-pink-300"
              >
                Book Appointment →
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="/media/hair-bob.webp"
              alt="Hair Services"
              className="h-72 w-full object-cover"
            />

            <div className="p-7">
              <p className="text-sm font-semibold text-pink-300">
                HAIR SERVICES
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Cut · Colour · Treatment
              </h3>

              <p className="mt-3 leading-7 text-gray-300">
                Refresh your look with professional hair services tailored to
                your style.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-semibold text-pink-300"
              >
                Enquire on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">Ready to book?</h2>

          <p className="mt-4 text-gray-300">
            Contact Spirit Beauty SG on WhatsApp for appointments and enquiries.
          </p>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full bg-green-500 px-8 py-4 font-bold text-black"
          >
            WhatsApp Spirit Beauty SG
          </a>
        </div>
      </section>
    </main>
  );
}
const iplPrices=[["Upper Lip","$18"],["Underarm","$38"],["Face","$48"],["Brazilian","$48"],["Half Leg","$68"]];
const shrBenefits=["Shaving & treatment gel included","Unlimited shots for the treatment area","Helps reduce the appearance of ingrown hairs","Fast, targeted treatment","No hard selling","No hidden costs"];
const facialTreatments=["Dermal Control Clear-Up Treatment","Pico Laser Treatment","AOPT (Advanced Optimal Pulse Technology)","Nano Needle EMS Treatment"];
const facialBenefits=["Blemish care","Skin rejuvenation","Appearance of acne scars","Skin hydration","Oil-control support","Appearance of enlarged pores","Collagen-supporting treatment"];
const reviews=[
  ["IPL · Cheryl","Professional, honest and trustworthy service. A long-time client who noticed slower hair growth after several sessions and also enjoyed the facial care."],
  ["IPL · Alicia","Reasonable prices, visible results and great service. Highly recommended by a returning client."],
  ["IPL & Facial · iammey","A long-time underarm and Brazilian IPL client praised the results, relaxing facial experience, clean space and no hard selling."],
  ["Hair · Josiah","Praised the hairstylist's patience, experience and ability to understand the style a client wants."],
  ["Hair · Karl","A returning client highlighted strong fashion sense and hairstyling skill."],
  ["Hair · Customer Review","Recommended Spirit Beauty for patient service, careful workmanship and listening closely to the hairstyle requested."]
];

export default function Home(){
return <main>
<header className="absolute inset-x-0 top-0 z-20 border-b border-white/15 bg-black/25 text-white backdrop-blur-sm"><div className="container-page flex min-h-24 items-center justify-between gap-3 py-4"><a href="#top" className="focus-ring leading-none"><div className="font-display text-[1.55rem] font-semibold tracking-[.03em] text-[#d8b35c] sm:text-3xl">SPIRIT BEAUTY</div><div className="mt-1 text-[8px] uppercase tracking-[.34em] text-[#f0ddaa]">Singapore</div></a><nav className="hidden gap-7 text-[11px] font-semibold uppercase tracking-widest md:flex"><a href="#ipl">SHR IPL</a><a href="#hair">Hair</a><a href="#facial">Facial</a><a href="#reviews">Reviews</a><a href="#visit">Visit</a></nav><a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full border border-[#d8b35c]/80 px-4 py-2 text-[11px] font-semibold text-[#f0ddaa]">WhatsApp</a></div></header>

<section id="top" className="relative min-h-[760px] overflow-hidden bg-[radial-gradient(circle_at_76%_28%,rgba(222,194,126,.20),transparent_26%),linear-gradient(115deg,#282421_0%,#5f554f_48%,#96867c_100%)] text-white"><div className="container-page flex min-h-[760px] items-end pb-16 pt-40 sm:items-center sm:pb-0"><div className="max-w-3xl"><p className="mb-5 text-[11px] font-semibold uppercase tracking-[.25em] text-[#efdca7]">Ang Mo Kio · Singapore</p><h1 className="font-display text-[3.45rem] font-medium leading-[.92] tracking-[-.035em] sm:text-7xl lg:text-[6rem]">Smoother skin.<br/><span className="italic text-[#ecd9cf]">Fresh colour.</span></h1><p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">Discover SHR IPL hair removal, whole hair colour promotions and personalised facial care at Spirit Beauty.</p><div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row"><CTA light>Book via WhatsApp</CTA><a href="#ipl" className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold">See SHR IPL promotion <Icon name="arrow"/></a></div></div></div></section>

<section className="py-20 lg:py-24"><div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="eyebrow">Spirit Beauty · Ang Mo Kio</p><h2 className="section-title">Where Beauty<br/>Meets Expertise.</h2><p className="mt-5 text-sm leading-7 text-ink/60">Personalised beauty care, thoughtfully tailored to you. Professional <strong>SHR IPL Hair Removal, Hair & Facial services</strong> in Ang Mo Kio.</p></div><Media label="Spirit Beauty storefront" src="/media/storefront.webp"/></div></section>

<section id="ipl" className="bg-cream py-24 lg:py-32"><div className="container-page"><div className="max-w-3xl"><p className="eyebrow">Main promotion · SHR IPL</p><h2 className="section-title">Smoother skin starts here.</h2><p className="mt-6 text-xl font-semibold text-cocoa">SHR · Super Hair Removal</p><p className="mt-4 leading-7 text-ink/65">SHR is an advanced light-based hair reduction technology that builds on traditional IPL. Repeated lower-energy pulses progressively warm the targeted area, allowing fast coverage and a gentler treatment experience. Suitability and results vary by individual and skin type.</p></div>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{iplPrices.map(([area,price])=><article key={area} className={`rounded-2xl border p-6 ${area==="Brazilian"?"border-[#b98b2e] bg-[#17130d] text-white":"border-sand bg-white"}`}><p className={`text-xs font-semibold uppercase tracking-widest ${area==="Brazilian"?"text-[#d8b35c]":"text-cocoa"}`}>{area}{area==="Brazilian"&&<span className="ml-2">🔥 Popular</span>}</p><div className="mt-4 font-display text-4xl">{price}</div></article>)}</div>
<div className="mt-12 grid gap-10 lg:grid-cols-2"><div><h3 className="font-display text-3xl font-semibold">Why clients choose our SHR IPL</h3><div className="mt-6 grid gap-3 sm:grid-cols-2">{shrBenefits.map(x=><div key={x} className="flex gap-3 rounded-xl bg-white p-4 text-sm font-semibold"><span className="text-cocoa"><Icon name="check"/></span>{x}</div>)}</div><p className="mt-5 text-xs leading-5 text-ink/45">Hair-reduction results and treatment experience vary between individuals. Consultation is recommended.</p><div className="mt-7"><CTA>Book SHR IPL on WhatsApp</CTA></div></div><Media label="IPL treatment video" video/></div>
<div className="mt-12"><p className="eyebrow">Real client results</p><div className="mt-5 grid gap-5 sm:grid-cols-2"><Media label="Brazilian IPL before & after" src="/media/ipl-brazilian.webp"/><Media label="IPL before & after 2"/></div></div></div></section>

<section id="hair" className="bg-[#17130d] py-24 text-white lg:py-32"><div className="container-page"><p className="text-[11px] font-semibold uppercase tracking-[.24em] text-[#d8b35c]">Hair · Main promotion</p><h2 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-none sm:text-6xl">Fresh colour. Fresh look.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">Whole hair colour promotions, plus special pricing for highlights and balayage.</p><div className="mt-12 grid gap-5 md:grid-cols-3">{[["Men's Whole Hair Colour","$50"],["Ladies' Whole Hair Colour","$90"],["Highlight / Balayage","From $310"]].map(([t,p])=><article key={t} className="rounded-2xl border border-[#d8b35c]/30 bg-white/5 p-7"><p className="text-xs uppercase tracking-widest text-[#d8b35c]">{t}</p><div className="mt-5 font-display text-5xl">{p}</div></article>)}</div><p className="mt-4 text-xs leading-5 text-white/45">Prices may vary for extra-long or very thick hair and services requiring additional bleaching or product. Highlight and balayage start from $310.</p><div className="mt-10 grid gap-5 md:grid-cols-3"><Media label="Latest hair colour design" src="/media/hair-bob.webp" dark/><Media label="Latest hair colour design 2" dark/><Media label="Hair colouring video" video dark/></div><div className="mt-12 grid gap-5 sm:grid-cols-2"><article className="rounded-2xl border border-white/15 p-7"><p className="text-xs uppercase tracking-widest text-[#d8b35c]">Men's Haircut + Wash</p><div className="mt-4 font-display text-4xl">$28++</div></article><article className="rounded-2xl border border-white/15 p-7"><p className="text-xs uppercase tracking-widest text-[#d8b35c]">Ladies' Haircut + Wash</p><div className="mt-4 font-display text-4xl">$38++</div><p className="mt-3 text-xs text-white/45">Price varies according to hair length and service requirements.</p></article></div><div className="mt-9"><CTA light>Ask about hair promotions</CTA></div></div></section>

<section id="facial" className="py-24 lg:py-32"><div className="container-page"><div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow">Facial care</p><h2 className="section-title">Skin concerns deserve personalised care.</h2><p className="mt-6 text-sm leading-7 text-ink/60">Breakouts can be influenced by hormonal changes and individual lifestyle. Our therapist assesses your skin and discusses a suitable treatment approach with you.</p><div className="mt-7 rounded-2xl bg-[#17130d] p-7 text-white"><p className="text-xs uppercase tracking-widest text-[#d8b35c]">Facial Trial</p><div className="mt-3 font-display text-5xl">$88</div><div className="mt-6"><CTA light>Book facial trial</CTA></div></div></div><div className="grid gap-3">{facialTreatments.map((x,i)=><div key={x} className="flex gap-4 rounded-xl bg-cream p-5"><span className="text-xs font-semibold text-cocoa">0{i+1}</span><span className="font-semibold">{x}</span></div>)}</div></div><div className="mt-10 flex flex-wrap gap-2">{facialBenefits.map(x=><span key={x} className="rounded-full border border-sand px-4 py-2 text-xs font-semibold text-cocoa">{x}</span>)}</div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><Media label="Facial before & after"/><Media label="Facial result"/><Media label="Facial POV video 1" video/><Media label="Facial POV video 2" video/></div></div></section>

<section id="reviews" className="bg-cream py-24"><div className="container-page"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Client reviews</p><h2 className="section-title">Trusted by clients across IPL, hair & facial.</h2><p className="mt-5 text-sm text-ink/55">Selected feedback from Spirit Beauty clients.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{reviews.map(([t,q])=><article key={t} className="rounded-2xl bg-white p-7 shadow-soft"><div className="flex gap-1 text-[#c79f42]">{[1,2,3,4,5].map(s=><Icon key={s} name="star"/>)}</div><p className="mt-5 text-sm leading-7 text-ink/60">{q}</p><p className="mt-5 text-xs font-semibold uppercase tracking-widest text-cocoa">{t}</p></article>)}</div></div></section>

<section id="visit" className="py-24 lg:py-32"><div className="container-page grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">Visit Spirit Beauty</p><h2 className="section-title">Blk 554 Ang Mo Kio Ave 10<br/><span className="text-cocoa">#01-2044 · Singapore 560554</span></h2><p className="mt-6 text-sm leading-7 text-ink/60">Coming from Ang Mo Kio MRT? Use Exit A and take Bus 88. Alight at <strong>Blk 574 — Bus Stop 54581</strong>, then cross Ang Mo Kio Ave 10 and walk towards Blk 554.</p><div className="mt-8 space-y-5">{[["1","Ang Mo Kio MRT · Exit A"],["2","Board Bus 88 at Aft Ang Mo Kio Stn Exit A · Stop 54261"],["3","Alight at Blk 574 · Stop 54581"],["4","Cross Ang Mo Kio Ave 10 and walk to Blk 554 · #01-2044"]].map(([n,t])=><div key={n} className="flex gap-4 border-b border-sand pb-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#17130d] text-xs font-semibold text-[#d8b35c]">{n}</span><p className="pt-2 text-sm font-semibold">{t}</p></div>)}</div><p className="mt-5 text-xs leading-5 text-ink/45">Important: 54581 is the stop for the direction from Ang Mo Kio MRT. Stop 54589 is on the opposite side of Ang Mo Kio Ave 10.</p><div className="mt-8"><CTA>WhatsApp us if you need directions</CTA></div></div><div className="rounded-3xl border border-sand bg-cream p-7"><p className="eyebrow">Simple walking map</p><div className="mt-6 rounded-2xl bg-white p-6"><div className="space-y-4 text-sm font-semibold"><div className="rounded-xl border border-sand p-4">🚌 Bus 88 · Blk 574 · Stop 54581</div><div className="text-center text-cocoa">↓ Cross Ang Mo Kio Ave 10</div><div className="rounded-xl border border-sand p-4">🚶 Walk towards Blk 554</div><div className="text-center text-cocoa">↓</div><div className="rounded-xl bg-[#17130d] p-5 text-[#d8b35c]">📍 SPIRIT BEAUTY · #01-2044</div></div></div><p className="mt-5 text-xs leading-5 text-ink/45">Address: 554 Ang Mo Kio Ave 10, #01-2044, Singapore 560554 · WhatsApp +65 8695 2257.</p></div></div></section>

<a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp Spirit Beauty" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1fae68] text-white shadow-lg"><Icon name="whatsapp"/></a>
</main>;
}
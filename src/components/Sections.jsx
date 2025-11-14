import { motion } from 'framer-motion'

const Section = ({ id, eyebrow, title, copy, children, gradient = 'from-rose-100 via-fuchsia-100 to-indigo-100' }) => (
  <section id={id} className="relative py-24">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70`} />
    <div className="absolute inset-0 backdrop-blur-[2px]" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }} className="rounded-3xl border border-white/40 bg-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),0_10px_50px_-20px_rgba(2,6,23,0.25)] backdrop-blur-2xl overflow-hidden">
        <div className="p-10 sm:p-14">
          <p className="text-sm uppercase tracking-widest text-slate-700/70 mb-2">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-transparent">{title}</h2>
          <p className="mt-4 text-slate-600/90 max-w-3xl">{copy}</p>
          {children}
        </div>
      </motion.div>
    </div>
  </section>
)

export default function Sections() {
  return (
    <>
      <Section id="maison" eyebrow="The Maison" title="Heritage, Reimagined" copy="Founded on the Left Bank, our atelier blends Parisian savoir-faire with future-forward technology. Each piece is a promise—precision-tailored, feather-light, endlessly luminous.">
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl h-40 shadow-sm" />
          ))}
        </div>
      </Section>

      <Section id="collection" eyebrow="Signature Collection" title="Iridescent Silhouettes" copy="Considered forms wrapped in ethereal textiles. Palette: obsidian, pearl, lilac haze—finished with chromatic accents.">
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="group rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl overflow-hidden shadow-lg">
              <div className="h-56 bg-gradient-to-br from-slate-200 to-slate-100" />
              <div className="p-5">
                <p className="text-slate-700/80">Look {idx + 1}</p>
                <p className="text-slate-500 text-sm">Silk-organza, hand-finished</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="craft" eyebrow="Art of Craft" title="Hand, Heart, Algorithm" copy="Draped by artisans, refined by code. Seamless seams meet parametric precision—our promise of tomorrow's couture.">
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { t: 'Textiles', d: 'Rare fibers woven into glass-sheen surfaces.' },
            { t: 'Tailoring', d: 'Measured with micron-level accuracy.' },
            { t: 'Finish', d: 'Iridescent coatings for a luminous aura.' },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl p-6">
              <p className="font-medium text-slate-800">{f.t}</p>
              <p className="text-slate-600 mt-2">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="lookbook" eyebrow="Lookbook" title="Seasonal Narratives" copy="A visual poem in seven movements—each frame a reflection of light, texture, and motion." gradient="from-indigo-100 via-violet-100 to-fuchsia-100">
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="aspect-[3/4] rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl shadow-md" />
          ))}
        </div>
      </Section>

      <Section id="fragrance" eyebrow="The Scent" title="The Fragrance of Creativity" copy="A clean, minimalist accord—sparkling citrus over velvet woods—bottled in chroma-glass. Complement your silhouette." gradient="from-rose-100 via-rose-50 to-amber-100">
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl h-64" />
          <div className="rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl p-6">
            <p className="text-slate-700/90 leading-relaxed">Crafted with perfumers in Grasse, this scent is a study in modern elegance. Clean, radiant, unforgettable.</p>
            <div className="mt-6 flex gap-3">
              <button className="px-5 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800">Shop Fragrance</button>
              <button className="px-5 py-3 rounded-full bg-white/70 border border-white/40 backdrop-blur-md text-slate-900">Discover Notes</button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="bespoke" eyebrow="Private Atelier" title="Bespoke by Appointment" copy="Enter a world of made-to-measure. Reserve an intimate session with our master tailors—virtual or in-salon." gradient="from-slate-100 via-slate-50 to-indigo-100">
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl p-6">
            <p className="text-slate-700">In-Salon Paris</p>
            <p className="text-slate-500 text-sm">Left Bank atelier</p>
          </div>
          <div className="rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl p-6">
            <p className="text-slate-700">Virtual Worldwide</p>
            <p className="text-slate-500 text-sm">Secure 4K fittings</p>
          </div>
          <div className="rounded-2xl border border-white/50 bg-white/50 backdrop-blur-xl p-6">
            <p className="text-slate-700">Concierge</p>
            <p className="text-slate-500 text-sm">White-glove delivery</p>
          </div>
        </div>
      </Section>

      <footer className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500">© Maison Éclat — All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

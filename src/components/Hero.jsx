import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl sm:text-6xl font-semibold leading-tight tracking-tight bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-transparent">
            The Fragrance of Couture
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }} className="mt-6 text-lg text-slate-600/90">
            An odyssey of fabric and form. Crafted with rare textiles, tailored to perfection, and finished with an iridescent glow.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-10 flex items-center gap-4">
            <a href="#collection" className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition shadow-lg shadow-slate-900/20">Explore Collection</a>
            <a href="#maison" className="px-6 py-3 rounded-full bg-white/70 backdrop-blur-md border border-white/40 text-slate-900 hover:bg-white/90 transition">About the Maison</a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6">
            <div className="h-12 w-12 rounded-xl border border-white/60 bg-white/60 backdrop-blur-md shadow-sm" />
            <div className="h-12 w-12 rounded-xl border border-white/60 bg-white/60 backdrop-blur-md shadow-sm" />
            <div className="h-12 w-12 rounded-xl border border-white/60 bg-white/60 backdrop-blur-md shadow-sm" />
          </div>
        </div>

        <div className="lg:col-span-6" />
      </div>
    </section>
  )
}

'use client'

import Image from "next/image";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-cream to-cream-light">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-yoga.jpg"
            alt="Yoga practice"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-serif"
          >
            welcome to my space
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg md:text-xl text-gray-700 mb-12"
          >
            <p>
            Hi, I'm Luciné! Guiding others to expand into their best selves through movement, breath, and inward exploration is where I feel most authentically me.
            </p>
            <p>
              Yoga—my personal catalyst for self-love, growth, and healing—is the method through which I do this. Teaching yoga allows me to express myself, connect with others, and align with my purpose. Here on my site, you'll find a one-stop shop for all of my offerings—both in-person and online.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-sage text-gray-800 px-8 py-3 rounded-full text-lg font-medium hover:bg-sage-dark hover:text-gray-900 transition-colors ring-2 ring-sage/20 hover:ring-sage/30"
            >
              More About Me
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cream pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">About Me</h2>

            <div className="relative h-[400px] rounded-lg overflow-hidden mb-12 gap-8">
                <Image
                  src="/about-yoga.jpg"
                  alt="Yoga practice"
                  fill
                  className="object-cover"
                />
              </div>
            
            <div className="grid md:grid-cols-1 gap-8 mb-12">
              <div>
                <p className="mb-6">
                  I was fortunate to grow up with yoga woven into my life—both my mom and maternal grandfather were dedicated yogis who believed deeply in passing the practice on. Because of them, I was always familiar with posture names and had the quiet confidence of knowing what to expect in a yoga class. But it wasn't until 2018, shortly after graduating from college, that I began to cultivate my own personal relationship with the practice. Since then, it's pretty much been at the forefront of my life.
                </p>

                <p className="mb-6">
                  There were definitely ebbs and flows as I began cultivating my own relationship with yoga. While I was immediately inspired by the strength, presence, and flexibility I saw in advanced practitioners—both online and in studios—I quickly learned that there are no shortcuts in yoga. In fact, it's not about the destination at all. It's about what's here, now. That lesson continues to support me far beyond the mat, offering guidance in every area of my life.
                </p>

                <p className="mb-6">
                Physically, I began to focus on the importance of building a strong foundation and developing a deep understanding of the basics. This has become a central part of my teaching style: foundational and explanation-based, with the intention of helping students move beyond simply following cues to truly understanding their own bodies.
              </p>

              <p className="mb-12">
                I don't believe there's a one-size-fits-all approach to yoga—or to movement in general. But I do believe that when we root ourselves in the fundamentals, we create space to explore, adapt, and shape a practice that supports our unique needs and rhythms.
              </p>
              </div>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Private Yoga Section */}
      <section id="private-yoga" className="py-20 bg-cream-light pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Private / 1:1 Yoga</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="mb-6">
                  Through private instruction, these personalized sessions are designed to help you cultivate a deeper, more intentional connection with your body. With focused individual attention, we work together to open, strengthen, and flow in ways that align with your unique needs. Whether you're navigating injuries, addressing limitations, or striving toward personal goals like toning up, mastering advanced postures, or enhancing overall flexibility and strength, these sessions are tailored to support your journey.
                </p>

                <div className="bg-cream-light p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 font-serif">Session Booking Logistics:</h3>
                  <ul className="space-y-2">
                    <li>Standard Price: $120 for 60min session</li>
                    <li>First Time Student Intro Offer: $80 for 60min session</li>
                    <li>3 Session Bundle: $330</li>
                    <li>First Time Student Intro 3 Session Bundle: $280</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 mb-6">
                  * Booking price is standard $120 when booking on my schedule. For 1st time students, reach out to lucine.janjigian@gmail.com & you will receive the link for the discounted scheduling.
                </p>

                <Link
                  href="https://calendly.com/lucine-janjigian/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-sage text-gray-800 px-8 py-3 rounded-full text-lg font-medium hover:bg-sage-dark hover:text-gray-900 transition-colors ring-2 ring-sage/20 hover:ring-sage/30"
                >
                  Book a Session
                </Link>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/private-yoga.jpg"
                  alt="Private yoga session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Classes Section */}
      <section id="free-classes" className="py-20 bg-cream pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Free Classes Online</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="mb-6">
                  Want to get a feel for my teaching and try it out for free? My YouTube classes range from beginner to intermediate/advanced levels and are a great way to explore my style and vibe at your own pace. Feel free to dive in anytime!
                </p>
                <Link
                  href="https://www.youtube.com/user/luc1n3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-sage text-gray-800 px-8 py-3 rounded-full text-lg font-medium hover:bg-sage-dark hover:text-gray-900 transition-colors ring-2 ring-sage/20 hover:ring-sage/30"
                >
                  Watch on YouTube
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/youtube-preview.jpg"
                  alt="YouTube class preview"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cream-light pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-serif">Get in Touch</h2>

            <div className="bg-cream rounded-lg p-12 text-center">
              <div className="space-y-8">
                <a 
                  href="mailto:lucine.janjigian@gmail.com"
                  className="flex items-center justify-center gap-3 text-xl text-gray-800 hover:text-sage transition-colors"
                >
                  <EnvelopeIcon className="h-6 w-6" />
                  lucine.janjigian@gmail.com
                </a>
                <a 
                  href="https://instagram.com/lucine.jan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-xl text-gray-800 hover:text-sage transition-colors"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @lucine.jan
                </a>
                <a 
                  href="https://tiktok.com/@lucinejan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-xl text-gray-800 hover:text-sage transition-colors"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  @lucinejan
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

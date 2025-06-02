'use client'

import Image from "next/image";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { useState } from 'react'

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
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
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
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Hi, I'm Luciné!
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg md:text-xl text-gray-700 mb-12"
          >
            <p>
              Guiding others to expand into their best selves through movement, breath, and inward exploration is where I feel most authentically me.
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
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              More About Me
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="mb-6">
                  I was fortunate to grow up with yoga woven into my life—both my mom and maternal grandfather were dedicated yogis who believed deeply in passing the practice on. Because of them, I was always familiar with posture names and had the quiet confidence of knowing what to expect in a yoga class. But it wasn't until 2018, shortly after graduating from college, that I began to cultivate my own personal relationship with the practice. Since then, it's pretty much been at the forefront of my life.
                </p>

                <p className="mb-6">
                  There were definitely ebbs and flows as I began cultivating my own relationship with yoga. While I was immediately inspired by the strength, presence, and flexibility I saw in advanced practitioners—both online and in studios—I quickly learned that there are no shortcuts in yoga. In fact, it's not about the destination at all. It's about what's here, now. That lesson continues to support me far beyond the mat, offering guidance in every area of my life.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/about-yoga.jpg"
                  alt="Yoga practice"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="mb-6">
              Physically, I began to focus on the importance of building a strong foundation and developing a deep understanding of the basics. This has become a central part of my teaching style: foundational and explanation-based, with the intention of helping students move beyond simply following cues to truly understanding their own bodies.
            </p>

            <p className="mb-12">
              I don't believe there's a one-size-fits-all approach to yoga—or to movement in general. But I do believe that when we root ourselves in the fundamentals, we create space to explore, adapt, and shape a practice that supports our unique needs and rhythms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Private Yoga Section */}
      <section id="private-yoga" className="py-20 bg-gray-50 pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Private / 1:1 Yoga</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="mb-6">
                  Through private instruction, these personalized sessions are designed to help you cultivate a deeper, more intentional connection with your body. With focused individual attention, we work together to open, strengthen, and flow in ways that align with your unique needs. Whether you're navigating injuries, addressing limitations, or striving toward personal goals like toning up, mastering advanced postures, or enhancing overall flexibility and strength, these sessions are tailored to support your journey.
                </p>

                <div className="bg-white p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Session Booking Logistics:</h3>
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
                  className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors"
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
      <section id="free-classes" className="py-20 bg-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Free Classes Online</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="mb-6">
                  Want to get a feel for my teaching and try it out for free? My YouTube classes range from beginner to intermediate/advanced levels and are a great way to explore my style and vibe at your own pace. Feel free to dive in anytime!
                </p>
                <Link
                  href="https://www.youtube.com/user/luc1n3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors"
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
      <section id="contact" className="py-20 bg-gray-50 pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay in Touch</h2>
                  <p className="text-gray-600 mb-6">
                    Subscribe to my newsletter to stay updated on new offerings, retreats, and more.
                  </p>
                  <form className="flex gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="/contact-yoga.jpg"
                    alt="Yoga practice"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

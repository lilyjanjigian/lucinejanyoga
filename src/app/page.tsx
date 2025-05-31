'use client'

import Image from "next/image";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-yoga.jpg"
            alt="Yoga practice"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Luciné Jan Yoga
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Find your balance, strength, and inner peace
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6">
                I've created this space to be a welcoming, approachable, and educational place for those looking to begin their yoga journey or looking to deepen their existing practice.
              </p>
              <p className="text-lg text-gray-600">
                It is my personal philosophy that when it comes to yoga, we build from a strong foundation, cater to our unique bodies and needs, and should have fun and feel good while doing it.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about-yoga.jpg"
                alt="Yoga instructor"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Class Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Class Offerings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner's Yoga",
                description: "Perfect for those new to yoga. Learn the fundamentals in a supportive environment.",
                image: "/beginner-yoga.jpg"
              },
              {
                title: "Vinyasa Flow",
                description: "Dynamic movement synchronized with breath. Build strength and flexibility.",
                image: "/vinyasa-yoga.jpg"
              },
              {
                title: "Restorative Yoga",
                description: "Deep relaxation and stress relief through gentle poses and mindful breathing.",
                image: "/restorative-yoga.jpg"
              }
            ].map((class_, index) => (
              <motion.div
                key={class_.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={class_.image}
                    alt={class_.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{class_.title}</h3>
                  <p className="text-gray-600">{class_.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to start your yoga journey? Have questions about classes? I'm here to help!
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors">
            Contact Me
          </button>
        </div>
      </section>
    </main>
  );
}

'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Rocket,
  BarChart,
} from 'lucide-react';

/* =========================
   DATA
========================= */
const whyChooseUs = [
  {
    id: 1,
    title: 'Innovative Thinking',
    description:
      'We bring creative and future-ready solutions that help businesses stay ahead in the digital world.',
    icon: Lightbulb,
  },
  {
    id: 2,
    title: 'Goal-Oriented Approach',
    description:
      'Every strategy we design is aligned with your business goals to deliver measurable success.',
    icon: Target,
  },
  {
    id: 3,
    title: 'Growth Focused',
    description:
      'Our solutions are scalable and designed to support your long-term growth.',
    icon: TrendingUp,
  },
  {
    id: 4,
    title: 'Client-Centric',
    description:
      'We believe in strong partnerships, transparency, and long-term collaboration.',
    icon: Users,
  },
  {
    id: 5,
    title: 'Fast Execution',
    description:
      'Speed matters. We deliver high-quality solutions without unnecessary delays.',
    icon: Rocket,
  },
  {
    id: 6,
    title: 'Data-Driven Results',
    description:
      'Our decisions are backed by insights and analytics to maximize ROI.',
    icon: BarChart,
  },
];

/* =========================
   PAGE
========================= */
export default function WhyChooseUs() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Why Choose Us
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6">
              In the crowded world of IT companies, our approach sets us apart.
              We focus on delivering solutions that truly transform businesses.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.id}
                  className="group border-none transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

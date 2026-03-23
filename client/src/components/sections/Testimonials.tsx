'use client';

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   DATA
========================= */
const blogPosts = [
  {
    id: 1,
    title: "Understanding IFMIS Architecture in Modern Government Systems",
    excerpt:
      "A complete overview of how IFMIS works, its core modules, and how government departments use it to manage finances efficiently.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "IFMIS",
    date: "15 Jan 2026",
    readTime: "6 min read",
    author: "Rishi Sharma",
  },
  {
    id: 2,
    title: "Angular 19 Performance Tips for Large Enterprise Applications",
    excerpt:
      "Learn advanced Angular optimization techniques including lazy loading and state management best practices.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    category: "Angular",
    date: "10 Jan 2026",
    readTime: "8 min read",
    author: "Tech Team",
  },
  {
    id: 3,
    title: "Bootstrap 5 vs Tailwind CSS: Which One Should You Choose?",
    excerpt:
      "A practical comparison of Bootstrap 5 and Tailwind CSS with real-world use cases.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    category: "UI/UX",
    date: "05 Jan 2026",
    readTime: "5 min read",
    author: "UI Expert",
  },
  {
    id: 4,
    title: "Building Secure Payment Integrations in Government Portals",
    excerpt:
      "Step-by-step guide to integrating payment gateways securely in large-scale government applications.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    category: "Payments",
    date: "01 Jan 2026",
    readTime: "7 min read",
    author: "FinTech Lead",
  },
  {
    id: 5,
    title: "NgRx State Management Explained with Real Examples",
    excerpt:
      "Understand NgRx concepts like store, actions, reducers, and effects using simple examples.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    category: "NgRx",
    date: "28 Dec 2025",
    readTime: "9 min read",
    author: "Angular Architect",
  },
  {
    id: 6,
    title: "Designing Scalable UI for Enterprise Applications",
    excerpt:
      "Best practices for designing scalable and reusable UI components.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Design",
    date: "22 Dec 2025",
    readTime: "6 min read",
    author: "Product Designer",
  },
];

/* =========================
   PAGE
========================= */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value
    setIsMobile(window.innerWidth < 768);

    // Handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine items per view based on screen size
  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, blogPosts.length - itemsPerView);
  const canGoNext = index < maxIndex;
  const canGoPrev = index > 0;

  const next = () => {
    if (canGoNext) {
      setIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (canGoPrev) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Insights
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6">
            We keep our visitors updated through highly informative blogs.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">

          {/* Navigation */}
          <button
            onClick={prev}
            disabled={!canGoPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 transition-all ${
              canGoPrev
                ? "bg-white shadow-md hover:shadow-lg cursor-pointer"
                : "bg-gray-200 shadow-none cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronLeft className={canGoPrev ? "text-gray-800" : "text-gray-400"} />
          </button>

          <button
            onClick={next}
            disabled={!canGoNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 transition-all ${
              canGoNext
                ? "bg-white shadow-md hover:shadow-lg cursor-pointer"
                : "bg-gray-200 shadow-none cursor-not-allowed opacity-50"
            }`}
          >
            <ChevronRight className={canGoNext ? "text-gray-800" : "text-gray-400"} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
            >
              {blogPosts.slice(index, index + itemsPerView).map((post) => (
                <div
                  key={post.id}
                  className="rounded-xl bg-white shadow hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="relative h-56">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                      <a href={`/blog/${post.id}`} className="text-orange-500">
                        <ArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "bg-orange-500 w-8"
                  : "bg-gray-300 w-2 hover:bg-orange-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        {/* Footer Link */}
        <div className="text-center mt-8">
          <a
            href="/blogs"
            className="inline-flex items-center text-orange-500 font-semibold text-lg hover:text-orange-600 transition-colors"
          >
            Explore more <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

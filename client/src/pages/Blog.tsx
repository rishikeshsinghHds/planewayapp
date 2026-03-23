'use client';

import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useSEO } from '@/hooks/use-seo';
import { ArrowRight, Calendar, Clock, User, Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

/* =========================
   BLOG DATA
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
    link: "/blog/ifmis-architecture",
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
    link: "/blog/angular-performance",
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
    link: "/blog/bootstrap-vs-tailwind",
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
    link: "/blog/secure-payments",
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
    link: "/blog/ngrx-explained",
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
    link: "/blog/scalable-ui",
  },
  {
    id: 7,
    title: "REST API Best Practices for Enterprise Applications",
    excerpt:
      "Learn how to design scalable and secure REST APIs following industry best practices.",
    image: "https://images.unsplash.com/photo-1516534775068-bb57846d9c2d",
    category: "REST API",
    date: "20 Dec 2025",
    readTime: "7 min read",
    author: "Backend Expert",
    link: "/blog/rest-api-best-practices",
  },
  {
    id: 8,
    title: "TypeScript Advanced Patterns and Techniques",
    excerpt:
      "Master advanced TypeScript concepts for building robust and maintainable applications.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    category: "TypeScript",
    date: "18 Dec 2025",
    readTime: "10 min read",
    author: "TypeScript Master",
    link: "/blog/typescript-patterns",
  },
  {
    id: 9,
    title: "Database Optimization Strategies",
    excerpt:
      "Comprehensive guide to optimizing database queries and improving application performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Database",
    date: "15 Dec 2025",
    readTime: "8 min read",
    author: "DB Admin",
    link: "/blog/database-optimization",
  },
];

/* =========================
   PAGE
========================= */
export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Set SEO tags
  useSEO({
    title: 'Blog | Technology Insights & Tech Articles - Alpha Grid',
    description:
      'Explore our tech blog covering IFMIS, Angular, UI/UX, TypeScript, REST APIs, and more. Get insights from industry experts on software development, database optimization, and enterprise applications.',
    keywords:
      'blog, technology, IFMIS, Angular, TypeScript, REST API, UI/UX, NgRx, database, software development',
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogType: 'website',
  });

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[500px] w-full overflow-hidden bg-black  flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/90 opacity-90" />
          
          <div className="container relative mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white">
                Our <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
                Discover insights, tips, and best practices from our team of experts
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blogs by title, author, or keywords..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => handleSearch('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500 hover:text-orange-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Results Count */}
            <div className="text-center mt-6 text-gray-600">
              <p>Showing {paginatedPosts.length} of {filteredPosts.length} posts</p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {paginatedPosts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="rounded-xl bg-white shadow-md hover:shadow-2xl transition-all overflow-hidden group"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 flex-wrap">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{post.author}</span>
                          </div>
                          <a
                            href={`/blog/${post.id}`}
                            className="text-orange-500 hover:text-orange-600 transition-colors"
                          >
                            <ArrowRight className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex justify-center items-center gap-2 mt-16"
                  >
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        currentPage === 1
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500'
                      }`}
                    >
                      Previous
                    </button>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`w-10 h-10 rounded-lg font-medium transition-all ${
                            currentPage === i + 1
                              ? 'bg-orange-500 text-white shadow-lg'
                              : 'bg-white border border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        currentPage === totalPages
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500'
                      }`}
                    >
                      Next
                    </button>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-2xl font-bold text-gray-700 mb-2">No blogs found </p>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

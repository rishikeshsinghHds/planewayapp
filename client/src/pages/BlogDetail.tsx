'use client';

import { useState } from 'react';
import { useRoute } from 'wouter';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useSEO } from '@/hooks/use-seo';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

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
    content: `
      <h2>Introduction</h2>
      <p>IFMIS (Integrated Financial Management Information System) is a comprehensive software system designed to manage government finances. It provides a unified platform for all financial transactions, budget management, and reporting in government organizations.</p>
      
      <h2>Core Modules</h2>
      <p>The system consists of several key modules that work together seamlessly:</p>
      <ul>
        <li><strong>Budget Module:</strong> Handles budget planning, allocation, and monitoring</li>
        <li><strong>Accounting Module:</strong> Manages financial records and transactions</li>
        <li><strong>Procurement Module:</strong> Oversees purchasing and vendor management</li>
        <li><strong>Payroll Module:</strong> Handles employee compensation and benefits</li>
        <li><strong>Reporting Module:</strong> Generates financial statements and reports</li>
      </ul>
      
      <h2>Implementation Benefits</h2>
      <p>Organizations implementing IFMIS experience improved financial control, transparency, and efficiency. The system reduces manual errors, enhances audit trails, and provides real-time financial visibility to stakeholders.</p>
      
      <h2>Best Practices</h2>
      <p>Successful IFMIS implementation requires proper training, change management, and continuous system maintenance. Organizations should establish clear policies and procedures to maximize the system's benefits.</p>
      
      <h2>Conclusion</h2>
      <p>IFMIS represents a significant advancement in government financial management. By adopting this system, organizations can achieve greater financial accountability and operational efficiency.</p>
    `,
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
    content: `
      <h2>Angular Performance Optimization</h2>
      <p>Angular 19 brings numerous performance improvements and new features that help developers build faster, more efficient applications.</p>
      
      <h2>Lazy Loading Strategies</h2>
      <p>Lazy loading is crucial for reducing initial bundle size and improving application startup time. Implement route-based lazy loading for feature modules and consider dynamic imports for heavy components.</p>
      
      <h2>Change Detection Optimization</h2>
      <p>Understanding Angular's change detection mechanism is essential. Use OnPush strategy to limit change detection cycles and improve performance in large component trees.</p>
      
      <h2>State Management</h2>
      <p>NgRx and similar state management libraries help maintain application state efficiently. Proper state architecture prevents unnecessary re-renders and improves application scalability.</p>
      
      <h2>Bundle Size Reduction</h2>
      <p>Use tree-shaking, code splitting, and AOT compilation to reduce your application's bundle size. Monitor bundle metrics regularly and identify opportunities for optimization.</p>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process. Regular profiling, monitoring, and staying updated with Angular's best practices ensure your applications remain fast and efficient.</p>
    `,
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
    content: `
      <h2>Framework Comparison</h2>
      <p>Bootstrap 5 and Tailwind CSS are two popular CSS frameworks with different approaches to styling web applications.</p>
      
      <h2>Bootstrap 5 Advantages</h2>
      <ul>
        <li>Pre-designed components ready to use</li>
        <li>Extensive documentation and community support</li>
        <li>Easier for beginners</li>
        <li>Great for rapid prototyping</li>
      </ul>
      
      <h2>Tailwind CSS Advantages</h2>
      <ul>
        <li>Utility-first approach for maximum customization</li>
        <li>Smaller final bundle size with purging</li>
        <li>Better for complex designs</li>
        <li>More modern development experience</li>
      </ul>
      
      <h2>Performance Comparison</h2>
      <p>Tailwind CSS typically results in smaller file sizes when properly configured with PurgeCSS. Bootstrap bundles all components, resulting in larger files unless carefully optimized.</p>
      
      <h2>Learning Curve</h2>
      <p>Bootstrap is easier to learn for beginners with pre-built components, while Tailwind requires understanding the utility-first philosophy but offers more control.</p>
      
      <h2>Conclusion</h2>
      <p>Choose Bootstrap for rapid development and Tailwind for maximum customization and optimal performance. Your project requirements should guide your choice.</p>
    `,
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
    content: `
      <h2>Payment Integration Overview</h2>
      <p>Secure payment integration is critical for government portals handling public funds. This guide covers best practices and implementation strategies.</p>
      
      <h2>Security Requirements</h2>
      <p>Government payment systems must comply with industry standards including PCI DSS, SSL/TLS encryption, and secure authentication mechanisms.</p>
      
      <h2>Payment Gateway Selection</h2>
      <p>Choose payment gateways with strong security credentials, good documentation, and support for multiple payment methods required by government portals.</p>
      
      <h2>Implementation Best Practices</h2>
      <ul>
        <li>Always use HTTPS for all payment-related communications</li>
        <li>Never store sensitive payment information client-side</li>
        <li>Implement tokenization for recurring payments</li>
        <li>Maintain comprehensive audit logs</li>
      </ul>
      
      <h2>Testing and Compliance</h2>
      <p>Thoroughly test payment workflows in sandbox environments. Conduct security audits and maintain compliance with all relevant regulations.</p>
      
      <h2>Conclusion</h2>
      <p>Secure payment integration requires attention to detail and adherence to security standards. Proper implementation protects users and builds trust in government systems.</p>
    `,
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
    content: `
      <h2>Understanding NgRx</h2>
      <p>NgRx is a reactive state management library for Angular applications based on RxJS. It implements the Redux pattern for managing application state.</p>
      
      <h2>Core Concepts</h2>
      
      <h3>Store</h3>
      <p>The store is the single source of truth for your application state. It holds all application data in a single, immutable state tree.</p>
      
      <h3>Actions</h3>
      <p>Actions are plain objects that describe events in your application. They communicate user interactions and external events to the store.</p>
      
      <h3>Reducers</h3>
      <p>Reducers are pure functions that take the current state and an action, then return a new state. They must be pure and have no side effects.</p>
      
      <h3>Effects</h3>
      <p>Effects handle side effects like HTTP calls, local storage operations, and other asynchronous operations in isolation.</p>
      
      <h2>Benefits</h2>
      <ul>
        <li>Predictable state management</li>
        <li>Time-travel debugging</li>
        <li>Separated concerns</li>
        <li>Better testability</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>NgRx provides a robust framework for managing complex application state. Mastering these concepts is essential for building scalable Angular applications.</p>
    `,
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
    content: `
      <h2>Scalable UI Design Principles</h2>
      <p>Creating scalable UI systems is essential for enterprise applications that grow over time. This article covers key principles and practices.</p>
      
      <h2>Component Architecture</h2>
      <p>Build a strong component library with reusable, composable components. Define clear component APIs and maintain consistent design patterns.</p>
      
      <h2>Design Systems</h2>
      <p>Implement a comprehensive design system that includes typography, colors, spacing, and component patterns. This ensures consistency across the application.</p>
      
      <h2>Responsive Design</h2>
      <p>Plan for multiple screen sizes and devices from the start. Mobile-first design approach helps create interfaces that scale gracefully.</p>
      
      <h2>Performance Considerations</h2>
      <p>Optimize UI rendering, lazy-load components, and minimize CSS. Monitor performance metrics and iterate based on real user data.</p>
      
      <h2>Conclusion</h2>
      <p>Scalable UI design requires planning, consistency, and continuous improvement. Invest in design systems and component libraries for long-term success.</p>
    `,
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
    content: `
      <h2>REST API Fundamentals</h2>
      <p>REST (Representational State Transfer) is the most popular architectural style for building web APIs. Understanding its principles is fundamental for modern web development.</p>
      
      <h2>API Design Best Practices</h2>
      <ul>
        <li>Use proper HTTP methods (GET, POST, PUT, DELETE)</li>
        <li>Design intuitive resource paths</li>
        <li>Implement proper error handling</li>
        <li>Version your API</li>
        <li>Document comprehensively</li>
      </ul>
      
      <h2>Security Considerations</h2>
      <p>Implement authentication, authorization, rate limiting, and input validation. Use HTTPS for all communications and follow OWASP guidelines.</p>
      
      <h2>Performance Optimization</h2>
      <p>Implement caching strategies, pagination, filtering, and compression. Monitor API performance and optimize database queries.</p>
      
      <h2>Conclusion</h2>
      <p>Well-designed REST APIs form the foundation of modern web applications. Following best practices ensures scalability, security, and maintainability.</p>
    `,
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
    content: `
      <h2>Advanced TypeScript Concepts</h2>
      <p>TypeScript provides advanced features that help build more robust and maintainable applications. Master these concepts to write professional-grade code.</p>
      
      <h2>Generics</h2>
      <p>Generics allow you to write flexible, reusable code that works with various types while maintaining type safety. Use them extensively in utility functions and libraries.</p>
      
      <h2>Advanced Types</h2>
      <p>Explore union types, intersection types, mapped types, and conditional types. These features provide powerful type composition capabilities.</p>
      
      <h2>Decorators</h2>
      <p>Decorators enable you to add metadata and modify classes and methods. They're useful for dependency injection, validation, and aspect-oriented programming.</p>
      
      <h2>Module System</h2>
      <p>Organize code using TypeScript modules. Implement proper encapsulation and maintain clear dependencies between modules.</p>
      
      <h2>Conclusion</h2>
      <p>Advanced TypeScript features provide powerful tools for building scalable applications. Invest time in learning these concepts for long-term benefits.</p>
    `,
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
    content: `
      <h2>Database Performance</h2>
      <p>Database optimization is crucial for application performance. This guide covers strategies to improve query performance and system efficiency.</p>
      
      <h2>Indexing Strategies</h2>
      <p>Proper indexing significantly improves query performance. Create indexes on frequently searched columns, but be mindful of write performance impact.</p>
      
      <h2>Query Optimization</h2>
      <ul>
        <li>Use EXPLAIN to analyze query plans</li>
        <li>Avoid N+1 query problems</li>
        <li>Use joins efficiently</li>
        <li>Implement query caching</li>
      </ul>
      
      <h2>Database Design</h2>
      <p>Design schemas with normalization principles. Balance between normalized and denormalized structures based on access patterns.</p>
      
      <h2>Monitoring and Maintenance</h2>
      <p>Monitor slow queries, maintain statistics, and perform regular backups. Use profiling tools to identify bottlenecks.</p>
      
      <h2>Conclusion</h2>
      <p>Database optimization requires understanding both your data and access patterns. Regular monitoring and optimization ensure consistent performance.</p>
    `,
  },
];

/* =========================
   PAGE
========================= */
export default function BlogDetail() {
  const [, params] = useRoute('/blog/:id');
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const blogId = params?.id ? parseInt(params.id) : null;
  const blog = blogPosts.find(post => post.id === blogId);

  // Set SEO tags
  useSEO({
    title: blog
      ? `${blog.title} | Tech Blog - Alpha Grid`
      : 'Blog Not Found | Alpha Grid',
    description: blog
      ? blog.excerpt
      : 'The blog post you are looking for does not exist.',
    keywords: blog
      ? `${blog.category}, ${blog.title}, blog, technology, ${blog.author}`
      : 'blog, technology',
    ogImage: blog?.image,
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogType: 'article',
    author: blog?.author,
    articlePublishedTime: blog?.date,
  });

  if (!blog) {
    return (
      <div className="min-h-screen bg-white font-sans flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    const text = encodeURIComponent(blog.title);
    const url = encodeURIComponent(currentUrl);

    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
      toast({
        title: "Shared!",
        description: `Blog shared on ${platform}`,
      });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Blog link copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-96 md:h-[500px] overflow-hidden"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </a>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* Title and Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {blog.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                {blog.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-orange-500" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Share Button */}
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </button>

                {/* Share Menu */}
                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 flex gap-2 z-10"
                  >
                    <button
                      onClick={() => {
                        handleShare('facebook');
                        setShowShareMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5 text-blue-600" />
                    </button>
                    <button
                      onClick={() => {
                        handleShare('twitter');
                        setShowShareMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5 text-blue-400" />
                    </button>
                    <button
                      onClick={() => {
                        handleShare('linkedin');
                        setShowShareMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-blue-700" />
                    </button>
                    <button
                      onClick={() => {
                        handleCopyLink();
                        setShowShareMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-1"
                      title="Copy link"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Blog Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">About the Author</h3>
              <p className="text-gray-600">
                {blog.author} is an experienced professional with expertise in {blog.category}. They share their knowledge and insights through this blog to help the community stay updated with the latest developments in technology and business.
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

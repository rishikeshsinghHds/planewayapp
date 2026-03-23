import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  author?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
}

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    // Set title
    document.title = config.title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);

    // Set keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', config.keywords || '');

    // Set author
    if (config.author) {
      let metaAuthor = document.querySelector('meta[name="author"]');
      if (!metaAuthor) {
        metaAuthor = document.createElement('meta');
        metaAuthor.setAttribute('name', 'author');
        document.head.appendChild(metaAuthor);
      }
      metaAuthor.setAttribute('content', config.author);
    }

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: config.title },
      { property: 'og:description', content: config.description },
      { property: 'og:type', content: config.ogType || 'website' },
      ...(config.ogImage ? [{ property: 'og:image', content: config.ogImage }] : []),
      ...(config.ogUrl ? [{ property: 'og:url', content: config.ogUrl }] : []),
    ];

    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:title', content: config.title },
      { name: 'twitter:description', content: config.description },
      ...(config.ogImage ? [{ name: 'twitter:image', content: config.ogImage }] : []),
    ];

    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });

    // Set article tags for blog posts
    if (config.articlePublishedTime) {
      let metaTag = document.querySelector('meta[property="article:published_time"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', 'article:published_time');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', config.articlePublishedTime);
    }

    if (config.articleModifiedTime) {
      let metaTag = document.querySelector('meta[property="article:modified_time"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', 'article:modified_time');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', config.articleModifiedTime);
    }
  }, [config]);
}

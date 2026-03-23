import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number | string;
  height?: number | string;
  priority?: boolean;
}

/**
 * SEO-friendly responsive image component
 * Includes proper alt text, lazy loading, and srcset support
 */
export function ResponsiveImage({
  src,
  alt,
  title,
  className = '',
  loading = 'lazy',
  width,
  height,
  priority = false,
}: ResponsiveImageProps) {
  // Generate srcset for responsive images
  const generateSrcSet = (imageSrc: string) => {
    if (imageSrc.includes('unsplash.com')) {
      return `${imageSrc}?w=480&q=80 480w,
              ${imageSrc}?w=768&q=80 768w,
              ${imageSrc}?w=1024&q=80 1024w,
              ${imageSrc}?w=1440&q=80 1440w`;
    }
    return undefined;
  };

  return (
    <img
      src={src}
      alt={alt}
      title={title || alt}
      className={className}
      loading={priority ? 'eager' : loading}
      srcSet={generateSrcSet(src)}
      sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1440px"
      width={width}
      height={height}
      decoding="async"
    />
  );
}

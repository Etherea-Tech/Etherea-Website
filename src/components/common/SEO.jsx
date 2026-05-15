import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, url, image, type = 'website' }) {
  const siteTitle = title ? `${title} | Heizen.work` : 'Heizen.work - Professional Digital Solutions';
  const defaultDesc = "Transforming businesses with innovative digital solutions. Smartly Designed, Perfectly Aligned.";
  const defaultImage = "https://heizen.work/og-image.jpg";
  const defaultUrl = "https://heizen.work";

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={url || defaultUrl} />
    </Helmet>
  );
}

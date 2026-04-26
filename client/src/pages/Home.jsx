import React from 'react';
import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import ProductCategories from '../components/home/ProductCategories';
import WhyChooseUs from '../components/home/WhyChooseUs';
import WhoWeServe from '../components/home/WhoWeServe';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Compliance from '../components/home/Compliance';
import LocalAdvantage from '../components/home/LocalAdvantage';
import EnquiryCTA from '../components/home/EnquiryCTA';
import BlogPreview from '../components/home/BlogPreview';
import ContactSection from '../components/home/ContactSection';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Hero />
      <StatsBar />
      <ProductCategories />
      <WhyChooseUs />
      <WhoWeServe />
      <FeaturedProducts />
      <Compliance />
      <LocalAdvantage />
      <EnquiryCTA />
      <BlogPreview />
      <ContactSection />
    </motion.div>
  );
};

export default Home;

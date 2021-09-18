import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CTAClaimsSection from "../components/CTAClaimsSection";
import TestimonialSection from "../components/TestimonialSection";
import ShowcaseSection from "../components/ShowcaseSection";
import Footer from "../components/Footer";

const Page: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CTAClaimsSection />
      <TestimonialSection />
      <ShowcaseSection />
      <Footer />
    </>
  );
};

export default Page;

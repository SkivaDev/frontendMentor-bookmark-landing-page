import React from "react";
import Layout from "../containers/Layout";
import HeroSection from "../containers/HeroSection";
import Features from "../containers/Features";
import Extensions from "../containers/Extensions";
import FAQSection from "../containers/FAQSection";
import FormSection from "../containers/FormSection";

function Home() {
  return (
    <>
      <Layout>
        <main>
          <HeroSection />
          <Features/>
          <Extensions/>
          <FAQSection/>
          <FormSection/>
        </main>
      </Layout>
    </>
  );
}

export default Home;

import React from "react";
import Layout from "../containers/Layout";
import HeroSection from "../containers/HeroSection";
import Features from "../containers/Features";

function Home() {
  return (
    <>
      <Layout>
        <main>
          <HeroSection />
          <Features/>
        </main>
      </Layout>
    </>
  );
}

export default Home;

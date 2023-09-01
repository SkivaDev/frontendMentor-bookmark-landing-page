import React from "react";
import Layout from "../containers/Layout";
import HeroSection from "../containers/HeroSection";
import Features from "../containers/Features";
import Extensions from "../containers/Extensions";

function Home() {
  return (
    <>
      <Layout>
        <main>
          <HeroSection />
          <Features/>
          <Extensions/>
        </main>
      </Layout>
    </>
  );
}

export default Home;

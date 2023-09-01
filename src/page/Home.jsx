import React from "react";
import Layout from "../containers/Layout";
import HeroSection from "../containers/HeroSection";

function Home() {
  return (
    <>
      <Layout>
        <main>
          <HeroSection />
        </main>
      </Layout>
    </>
  );
}

export default Home;

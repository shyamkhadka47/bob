import HeroSection from "@/components/Hero";
import PhotoGrid from "@/components/PhotoGrid";
import { popularPhotos } from "@/mockData";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <PhotoGrid
        title="My Artworks"
        align="center"
        button={false}
        // subtitle="Art Gallery Created by "
        photos={popularPhotos}
      />
    </div>
  );
};

export default page;

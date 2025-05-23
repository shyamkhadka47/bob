import HeroSection from "@/components/Hero";
import VideoGallery from "@/components/VideoGallery";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div>
        <h1 className="text-3xl font-bold text-center py-8">Videos</h1>
        <VideoGallery />
      </div>
    </div>
  );
};

export default page;

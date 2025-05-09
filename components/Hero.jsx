import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative mt-[120px] container mx-auto  max-w-[90vw] h-[600px] md:h-[450px] rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0  w-full h-full">
        <video src="/walkabout.mp4" muted autoPlay playsInline loop className="w-full h-full object-cover"></video>
        {/* <Image
          src="/hero.jpg"
          alt="Mountain landscape with people at sunset"
          fill
          priority
          className="object-cover"
        /> */}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-2xl">
  {/* Main Heading */}
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight mb-6">
    {`Art That Reflects Culture, Identity, and History`}
  </h1>

  {/* Subheading */}
  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
    Discover the powerful sculptures and multimedia art by Bob Haozous, capturing the essence of history, humor, and modern life.
  </p>
</div>

      </div>

  
    </div>
  );
}

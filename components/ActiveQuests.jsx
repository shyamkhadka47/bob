import React from 'react';
import { ChevronRight, Clock } from 'lucide-react';



const quests = [
  {
    id: 1,
    title: "Make the Moon",
    image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d",
    prize: "$2,000 USD",
    days: 14,
    sponsor: "OlympPix"
  },
  {
    id: 2,
    title: "Fine Art",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062",
    prize: "$2,000 USD",
    days: 8,
    sponsor: "PicShare"
  },
  {
    id: 3,
    title: "Cropped+Parts",
    image: "https://images.unsplash.com/photo-1579541591970-7776b1a38821",
    prize: "$1,000 USD",
    days: 7,
    sponsor: "PicShare"
  },
  {
    id: 4,
    title: "Conceptually Still",
    image: "https://images.unsplash.com/photo-1566217688581-b2191944c2f9",
    prize: "$500 USD",
    days: 5,
    sponsor: "PicShare"
  }
];

const ActiveQuests = () => {
  return (
    <section className="container mx-auto px-4 my-10">
      <div className="section-heading">
        <h2 className="text-xl font-bold">Active Quests</h2>
        <a href="#" className="view-all">
          View All <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quests.map((quest) => (
          <div key={quest.id} className="border rounded-lg overflow-hidden">
            <div className="h-40 overflow-hidden relative">
              <img src={quest.image} alt={quest.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="flex items-center gap-1 text-xs text-white">
                  <Clock className="w-3 h-3" /> {quest.days} days left
                </div>
              </div>
            </div>
            
            <div className="p-3">
              <h3 className="font-medium text-base">{quest.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full inline-flex items-center">
                    {quest.prize}
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  by {quest.sponsor}
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button className="bg-black text-white text-xs py-1.5 rounded">Submit Now</button>
                <button className="border border-gray-300 text-gray-700 text-xs py-1.5 rounded">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiveQuests;

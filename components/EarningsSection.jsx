import React from 'react';

const EarningsSection = () => {
  return (
    <section className="px-[5%] md:px-[10%] my-12 grid md:grid-cols-2 gap-8 items-center">
      <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg flex justify-center">
        <div className="bg-black rounded-xl w-64 shadow-lg">
          <div className="flex justify-between items-center mb-3">
            <div className="text-xs text-gray-400">Example</div>
            <div className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">Approved</div>
          </div>
          <div className="border-b border-gray-800 pb-2">
            <div className="text-xs text-gray-400">Number Sold</div>
            <div className="text-white text-xl">7</div>
          </div>
          <div className="pt-2">
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-400">Total Earnings</div>
              <div className="text-green-500 text-lg font-medium">$183.74</div>
            </div>
            <div className="bg-gray-800 h-2 rounded-full mt-2 mb-4">
              <div className="bg-green-500 h-2 w-2/3 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
              <div>
                <div>CPA</div>
                <div className="text-white">$14.00</div>
              </div>
              <div>
                <div>Photos</div>
                <div className="text-white">$169.74</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-2">{`Why join the world's best photography community?`}</h2>
        <h3 className="text-3xl font-bold mb-4">Earn from your passion</h3>
        <p className="text-gray-600 mb-4">
          License your photos through our exclusive partners and generate passive income. Get paid for your creativity while sharing your work with a global audience.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-opacity-80 transition">
          Sign up for free
        </button>
      </div>
    </section>
  );
};

export default EarningsSection;

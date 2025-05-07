import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="px-[5%] md:px-[10%] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className=''>
            <h3 className="font-bold mb-4">About me</h3>
            <div>Bob Haozous is a renowned sculptor and multimedia artist from Santa Fe, New Mexico. His work explores themes of culture, identity, and the environment, inviting audiences to reflect on the intersections of history, humor, and contemporary life.</div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 sm:ml-16">Quick Links</h3>
            <ul className="space-y-2 sm:ml-16 ">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Popular photos</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">{`Editors' Choice`}</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Quests</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Become a Contributor</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Content types</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Distribution</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 ">Contact</h3>
            <ul className="space-y-2 ">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">About Licensing</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Become a Contributor</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submission Requirements</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 sm:ml-16">Social</h3>
            <ul className="space-y-2 sm:ml-16">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Pinterest</a></li>
            </ul>
          </div>
          
         
        </div>
        
        <div className="mt-12 pt-6 border-t border-white ">
        <div className="flex flex-col md:flex-row gap-4 py-10  justify-between md:items-center bg-secondary">
        <p className="capitalize text-white text-[16px]">
          Copyright <b>© 2025</b> <span className='underline underline-offset-[8px] mx-2'>Bob Haozous</span> All Rights Reserved.
        </p>
        <p className="capitalize text-yellow-500 text-[16px] ">
          designed & developed by{" "}
          <Link
            href={"https://www.designtechjoy.com"}
            className="text-primary font-bold"
          >
            Design Tech Joy
          </Link>
        </p>
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

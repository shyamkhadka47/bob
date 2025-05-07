import Link from 'next/link';
import React from 'react';


const navLinks= [
  {name:"Storyteller", url:"/storyteller"},
  {name:"Visual History", url:"/visual-history"},
  {name:"Videos", url:"/videos"},
  {name:"Biography", url:"/biography"},
  {name:"Contact", url:"/contact"}
]

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16 font-serif">
      <div className="px-[5%] md:px-[10%] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className=''>
            <h3 className="font-bold mb-4">About me</h3>
            <div>Bob Haozous is a renowned sculptor and multimedia artist from Santa Fe, New Mexico. His work explores themes of culture, identity, and the environment, inviting audiences to reflect on the intersections of history, humor, and contemporary life.</div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 sm:ml-16">Quick Links</h3>
            <ul className="space-y-2 sm:ml-16 ">
              {navLinks.map((el,i)=>(
                <li key={i} className="text-lg text-gray-400 hover:text-white">
                  <Link href={el.url}>{el.name}</Link>
                </li>
              ))}
             
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 ">Contact</h3>
            <ul className="space-y-2 ">
              <li><a href="#" className="text-lg text-gray-400 hover:text-white">About Licensing</a></li>
              <li><a href="#" className="text-lg text-gray-400 hover:text-white">Become a Contributor</a></li>
              <li><a href="#" className="text-lg text-gray-400 hover:text-white">Submission Requirements</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 sm:ml-16">Social</h3>
            <ul className="space-y-2 sm:ml-16">
              <li><a href="#" className="text-lg text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-lg text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-lg text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-lg text-gray-400 hover:text-white">Pinterest</a></li>
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

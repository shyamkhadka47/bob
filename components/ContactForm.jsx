'use client'

import { useState } from 'react'
import { FiChevronDown, FiSend, FiCheckCircle, FiCircle } from 'react-icons/fi'

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 relative">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[72rem] max-w-none -translate-x-1/2 rotate-[30deg] "
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">Contact Me</h2>
        <p className="mt-2 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ab odit sunt voluptas, id ratione reprehenderit quos? Minus ea, placeat voluptatem veritatis, incidunt corrupti eveniet commodi vel id numquam nisi.</p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5 flex rounded-md bg-white outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
              <div className="relative">
                <select className="appearance-none rounded-l-md py-2 pr-7 pl-3.5 text-base text-gray-500 bg-transparent focus:outline-none">
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="123-456-7890"
                className="flex-1 py-2 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          {/* Custom Toggle */}
          <div className="sm:col-span-2 flex items-center gap-x-4">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition ${
                agreed ? 'bg-indigo-100 text-indigo-600 border-indigo-300' : 'bg-gray-100 text-gray-600 border-gray-300'
              }`}
            >
              {agreed ? <FiCheckCircle className="text-xl" /> : <FiCircle className="text-xl" />}
              <span className="text-sm font-medium">Agree to privacy policy</span>
            </button>
           
          </div>
        </div>

        {/* Submit */}
        <div className="mt-10">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-700 focus:outline-2 focus:outline-indigo-600"
          >
            <FiSend className="text-lg" />
           {` Let's talk`}
          </button>
        </div>
      </form>
    </div>
  )
}

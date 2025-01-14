import { Button } from '@/components/ui/button'
import React from 'react'

const contact = () => {
  return (
    <div>
  
      <section className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 animate-bounce">Contact Us</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          We would love to hear from you! Please fill out the form below.
        </p>
        <form className="dark:bg-zinc-800 bg-zinc-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block dark:text-gray-200 text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none bg-slate-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none bg-slate-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none bg-slate-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={4}
              placeholder="Your Message"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
      </section>
      <section>
      </section>
    </div>
  )
}

export default contact


    
  
 

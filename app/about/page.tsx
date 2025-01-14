import { Button } from "@/components/ui/button";
import React from "react";

const about = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center min-h-auto p-6">
        <h1 className="text-4xl font-bold  mb-4 animate-bounce">About Us</h1>
        <p className="text-lg text-center max-w-2xl mb-6">
          Welcome to our blog! We share insights, stories, and experiences to
          inspire and inform our readers.
        </p>
        <Button className="mt-6 w-full sm:w-60 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeInUp">
          Learn More
        </Button>
      </section>
      <section className="flex flex-col items-center justify-center px-6 py-12 space-y-6 bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">
          Our mission is to provide valuable content that inspires and informs
          our readers, fostering a sense of community and growth.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center p-4 space-y-4 hover:scale-110 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
            <svg
              className="w-12 h-12 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.798A11.955 11.955 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 4.423-3.582 8.182-8.382 8.798a11.914 11.914 0 002.828-.504m-.586 7.707l3.5-3.5a1 1 0 111.414 1.414l-3.5 3.5a1 1 0 01-1.414-1.414z"
              />
            </svg>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              Inspiration
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 space-y-4 hover:scale-110 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
            <svg
              className="w-12 h-12 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm0 6c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm0 6c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 20c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm6-10c0 6.627-5.373 12-12 12S0 20.627 0 14a12.002 12.002 0 0124 0 12.002 12.002 0 01-24 0z"
              />
            </svg>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              Community
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 space-y-4 hover:scale-110 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
            <svg
              className="w-12 h-12 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-13h2v6h-2zm0 8h2v2h-2z"
              />
            </svg>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              Feedback
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 space-y-4 hover:scale-110 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
            <svg
              className="w-12 h-12 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 9h6v6H9z"
              />
            </svg>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              Blog
            </p>
          </div>
        </div>
      </section>
      <section className=" py-12  px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold  text-gray-800 dark:text-slate-300 mb-4 animate-pulse">
            What Our Readers Say
          </h2>
          <div className="flex flex-col space-y-6">
            <blockquote className=" p-6 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                &quot;This blog has changed my perspective on many topics. The
                insights are invaluable!&quot;
              </p>
              <footer className="mt-4 text-gray-800 dark:text-gray-300 font-semibold">
                - Reader Name
              </footer>
            </blockquote>
            <blockquote className=" p-6 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md transition-transform transform hover:scale-105">
              <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                &quot;I love the community feel of this blog. It&apos;s like a
                breath of fresh air!&quot;
              </p>
              <footer className="mt-4 text-gray-800 dark:text-gray-300 font-semibold">
                - Another Reader
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;

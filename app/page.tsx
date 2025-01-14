// 'use client'
// import Link from "next/link";
// import React, {  useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import CommentsSection from "@/components/Comments";
// import { client } from "@/sanity/lib/client";

// export interface Blog {
//   title: string;
//   description: string;
//   postImage: {
//     asset: {
//       url: string;
//     };
//   };
//   slug: string;
// }

// export const getBlogs = async () => {
//   const res = await client.fetch(`*[_type == 'blogs'] | order(_createdAt asc) {
// description,
// title,
// postImage {
//   asset -> {
//     url
//   }
// },
// slug {
//   current
// }
// }`);
// return res
// }
// const HomePage =  () => {
//   const reviews = [
//     {
//       name: "John Doe",
//       feedback:
//         "This blog has transformed my understanding of the topic. Highly recommend!",
//       rating: 5,
//     },
//     {
//       name: "Jane Smith",
//       feedback:
//         "A fantastic resource for anyone looking to learn more. Great insights!",
//       rating: 4,
//     },
//     {
//       name: "Alice Johnson",
//       feedback:
//         "I love the variety of topics covered. Always something new to discover!",
//       rating: 5,
//     },
//   ];



//   const [blogs,setBlogs] = useState<Blog[]>([])
//   useEffect(() => {
//     async function fetchData() {
//       try{
//       const res = await fetch('https://xn8n8w7b.apicdn.sanity.io/v2021-03-25/data/query/production?query=*%5B_type+%3D%3D+%27blogs%27%5D+%7C+order%28_createdAt+asc%29+%7B%0A++description%2C%0A++title%2C%0A++publishedAt%2C%0A++%22author%22%3A+author-%3E%7B%0A++++++++name%2C%0A++++++++image%2C%0A++++++++bio%0A++++++%7D%2C%0A++postImage+%7B%0A++++asset+-%3E+%7B%0A++++++url%0A++++%7D%0A++%7D%2C%0A++%22slug%22%3A+slug.current%0A%7D&returnQuery=false');
//       // getBlogs();
//       // setBlogs(res);}
//       const result = await res.json();
//       console.log(result); // Log the response data
//       setBlogs(result);
//     }catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//     fetchData();
//   }, [])

//   return (
//     <main>
//       <div className="p-4 md:flex flex-col md:justify-between gap-10">
//         <div className="relative flex flex-col items-center h-full text-center p-4">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate__animated animate__fadeInDown">
//             Welcome to Our Blog
//           </h1>
//           <p className="mt-4 text-base sm:text-lg md:text-xl animate__animated animate__fadeInUp">
//             Discover the latest insights and stories from our community.
//           </p>
//           <Button className="mt-6 w-full sm:w-60 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeInUp">
//             <Link href="/blog"> Explore Blogs</Link>
//           </Button>
//         </div>
//         <div className="flex flex-col text-center p-4">
//           <Image
//             src="/image1.png"
//             alt="alt"
//             width={600}
//             height={355}
//             className="w-full lg:hidden h-auto"
//           />
//           <Image
//             src="/image.png"
//             alt="alt"
//             width={989}
//             height={585}
//             className="w-full hidden lg:block h-auto"
//           />
//         </div>
//       </div>
//       <section className="py-10 bg-gray-100 dark:bg-neutral-900 mt-16 ">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold animate__animated animate__fadeIn">
//             Top Blogs
//           </h2>
//           <p className="mt-4 text-lg md:text-xl animate__animated animate__fadeInUp">
//             Check out our latest and most popular blog posts!
//           </p>
//           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogs.map((blog, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 animate__animated animate__fadeInUp"
//               >
//                 {blog.postImage?.asset?.url && (
//                   <Image
//                     src={blog.postImage.asset.url}
//                     alt={blog.title}
//                     width={150}
//                     height={100}
//                     className="w-full h-48 object-cover rounded-t-lg"
//                   />
//                 )}

//                 <h3 className="text-xl dark:text-slate-300 font-semibold text-gray-800 mt-4">
//                   {blog.title}
//                 </h3>
//                 <p className="mt-2 dark:text-slate-400 text-gray-600">
//                   {blog.description}
//                 </p>

//                 {blog.slug && (
//                   <Button className="mt-4 inline-block bg-black shadow transition">
//                     <Link href={`/blog/${blog.slug}`}>Read More</Link>
//                   </Button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="py-20 ">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold animate__animated animate__fadeIn">
//             What Our Readers Say
//           </h2>
//           <p className="mt-4 text-lg md:text-xl  animate__animated animate__fadeInUp">
//             Here are some reviews from our amazing community!
//           </p>
//           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {reviews.map((review, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 animate__animated animate__fadeInUp"
//               >
//                 <h3 className="text-xl font-semibold dark:text-slate-300 text-gray-800">
//                   {review.name}
//                 </h3>
//                 <p className="mt-2 dark:text-slate-400 text-gray-600">
//                   &quot;{review.feedback}&quot;
//                 </p>
//                 <div className="mt-4 flex justify-center">
//                   {Array.from({ length: review.rating }, (_, i) => (
//                     <svg
//                       key={i}
//                       className="w-5 h-5 text-yellow-500"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 15l-5.878 3.09 1.121-6.535L0 6.545l6.545-.955L10 0l2.455 5.59L20 6.545l-5.243 4.005 1.121 6.535z" />
//                     </svg>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <CommentsSection />
//     </main>
//   );
// };

// export default HomePage;


'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CommentsSection from "@/components/Comments";
import { client } from "@/sanity/lib/client";

export interface Blog {
  title: string;
  description: string;
  postImage: {
    asset: {
      url: string;
    };
  };
  slug: string;
}

export const getBlogs = async () => {
  const res = await client.fetch(`*[_type == 'blogs'] | order(_createdAt asc) {
description,
title,
postImage {
  asset -> {
    url
  }
},
"slug": slug.current
}[0...3]`);
  return res;
};

const HomePage = () => {
  const reviews = [
    {
      name: "John Doe",
      feedback:
        "This blog has transformed my understanding of the topic. Highly recommend!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      feedback:
        "A fantastic resource for anyone looking to learn more. Great insights!",
      rating: 4,
    },
    {
      name: "Alice Johnson",
      feedback:
        "I love the variety of topics covered. Always something new to discover!",
      rating: 5,
    },
  ];

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://xn8n8w7b.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type+%3D%3D+%27blogs%27%5D+%7C+order%28_createdAt+asc%29+%7B%0Adescription%2C%0Atitle%2C%0ApostImage+%7B%0A++asset+-%3E+%7B%0A++++url%0A++%7D%0A%7D%2C%0A%22slug%22%3A+slug.current%0A%7D%5B0...3%5D'
        );
        const result = await res.json();
        console.log('API Response:', result); // Log the response data
        if (Array.isArray(result.result)) {
          setBlogs(result.result);
        } else {
          setError('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch blogs. Please try again later.');
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <div className="p-4 md:flex flex-col md:justify-between gap-10">
        <div className="relative flex flex-col items-center h-full text-center p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate__animated animate__fadeInDown">
            Welcome to Our Blog
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl animate__animated animate__fadeInUp">
            Discover the latest insights and stories from our community.
          </p>
          <Button className="mt-6 w-full sm:w-60 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeInUp">
            <Link href="/blog"> Explore Blogs</Link>
          </Button>
        </div>
        <div className="flex flex-col text-center p-4">
          <Image
            src="/image1.png"
            alt="alt"
            width={600}
            height={355}
            className="w-full lg:hidden h-auto"
          />
          <Image
            src="/image.png"
            alt="alt"
            width={989}
            height={585}
            className="w-full hidden lg:block h-auto"
          />
        </div>
      </div>
      <section className="py-10 bg-gray-100 dark:bg-neutral-900 mt-16 ">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold animate__animated animate__fadeIn">
            Top Blogs
          </h2>
          <p className="mt-4 text-lg md:text-xl animate__animated animate__fadeInUp">
            Check out our latest and most popular blog posts!
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 animate__animated animate__fadeInUp"
              >
                {blog.postImage?.asset?.url && (
                  <Image
                    src={blog.postImage.asset.url}
                    alt={blog.title}
                    width={150}
                    height={100}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}

                <h3 className="text-xl dark:text-slate-300 font-semibold text-gray-800 mt-4">
                  {blog.title}
                </h3>
                <p className="mt-2 dark:text-slate-400 text-gray-600">
                  {blog.description}
                </p>

                {blog.slug && typeof blog.slug === 'string' && (
  <Button className="mt-4 inline-block bg-black shadow transition">
    <Link href={`/blog/${encodeURIComponent(blog.slug)}`}>Read More</Link>
  </Button>
)}


              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold animate__animated animate__fadeIn">
            What Our Readers Say
          </h2>
          <p className="mt-4 text-lg md:text-xl  animate__animated animate__fadeInUp">
            Here are some reviews from our amazing community!
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 animate__animated animate__fadeInUp"
              >
                <h3 className="text-xl font-semibold dark:text-slate-300 text-gray-800">
                  {review.name}
                </h3>
                <p className="mt-2 dark:text-slate-400 text-gray-600">
                  &quot;{review.feedback}&quot;
                </p>
                <div className="mt-4 flex justify-center">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.121-6.535L0 6.545l6.545-.955L10 0l2.455 5.59L20 6.545l-5.243 4.005 1.121 6.535z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CommentsSection />
    </main>
  );
};

export default HomePage;
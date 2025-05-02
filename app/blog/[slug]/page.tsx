import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Components } from "@/components/CustomComponents";
import CommentsSection from "@/components/Comments";

interface Author {
  name: string;
  image?: string;
}

interface Block {
  _type: string;
  children: Array<{ text: string }>;
}

interface Blog {
  title: string;
  description: string;
  author: Author;
  publishedAt: string;
  postImage: string;
  body: Block[];
  slug: string;
}

export interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}


async function fetchBlog(slug: string): Promise<Blog | null> {
  const query = `
    *[_type == 'blogs' && slug.current == $slug][0] {
      title,
      description,
      "author": author->{
        name,
        image,
        bio
      },
      publishedAt,
      postImage,
      body,
      slug
    }
  `;
  const blog = await client.fetch(query, { slug });

  if (!blog) {
    return null;
  }
  return blog;
}

// export default async function BlogPage({
//   params,
// }: PageProps): Promise<JSX.Element> {
//   const blog = await fetchBlog(params.slug);

//   if (!blog) {
//     notFound();
//   }
//   console.log(blog.body);
//   return (
//     <div className="max-w-5xl m-auto p-6 bg-white dark:bg-neutral-900 shadow-md rounded-lg">
//       {/* Blog Title */}
//       <h1 className="text-4xl dark:text-slate-300 text-gray-800 font-bold mb-4">
//         {blog.title}
//       </h1>

//       {/* Author Info */}
//       <div className="flex items-center mb-4">
//         {blog.author.image && (
//           <Image
//             src={urlFor(blog.author.image).url()}
//             alt={blog.author.name}
//             width={50}
//             height={50}
//             className="rounded-full mr-3"
//           />
//         )}
//         <p className="text-gray-600 dark:text-slate-400">
//           By <span className="font-semibold">{blog.author.name}</span>
//           on {new Date(blog.publishedAt).toLocaleDateString()}
//         </p>
//       </div>

//       {/* Blog Description */}
//       <p className="text-gray-800 dark:text-slate-300 font-semibold text-lg border-l-4 border-r-gray-900 pl-3 mb-4">
//         &quot;{blog.description}&quot;
//       </p>

//       {/* Blog Image */}
//       {blog.postImage && (
//         <Image
//           src={urlFor(blog.postImage).url()}
//           alt={blog.title}
//           width={800}
//           height={400}
//           className="rounded-lg mb-6"
//         />
//       )}

//       {/* Blog Body */}
//       <section className="prose dark:text-slate-300 text-gray-800 mt-6">
//         {/* {blog.body.map((block: Block, index: number) => {
//           if (block._type === "block") {
//             return (
//               <PortableText
//                 key={index}
//                 value={blog.body}
//                 components={Components}
//               />
//             );
//           }
//           return null;
//         })} */}
//         <PortableText value={blog.body} components={Components} />
//       </section>

//       <CommentsSection />
//     </div>
//   );
// }
export default async function BlogPage({
  params,
}: PageProps): Promise<JSX.Element | null> {
  const resolvedParams = await params; // Await the params promise
  const blog = await fetchBlog(resolvedParams.slug);

  if (!blog) {
    notFound();
    return null; // Ensure TypeScript understands execution won't continue
  }

  return (
    <div className="max-w-5xl m-auto p-6 bg-white dark:bg-neutral-900 shadow-md rounded-lg">
      <h1 className="text-4xl dark:text-slate-300 text-gray-800 font-bold mb-4">
        {blog.title}
      </h1>

      <div className="flex items-center mb-4">
        {blog.author.image && (
          <Image
            src={urlFor(blog.author.image)?.url() || '/default-author.png'}
            alt={blog.author.name}
            width={50}
            height={50}
            className="rounded-full mr-3"
          />
        )}
        <p className="text-gray-600 dark:text-slate-400">
          By <span className="font-semibold">{blog.author.name}</span> on{' '}
          {new Date(blog.publishedAt).toLocaleDateString()}
        </p>
      </div>

      <p className="text-gray-800 dark:text-slate-300 font-semibold text-lg border-l-4 border-r-gray-900 pl-3 mb-4">
        &quot;{blog.description}&quot;
      </p>

      {blog.postImage && (
        <Image
          src={urlFor(blog.postImage)?.url() || '/default-blog.png'}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
      )}

      <section className="prose dark:text-slate-300 text-gray-800 mt-6">
        <PortableText value={blog.body} components={Components} />
      </section>

      <CommentsSection />
    </div>
  );
}

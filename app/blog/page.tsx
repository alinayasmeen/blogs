'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import CommentsSection from "@/components/Comments";

interface Author {
  name: string;
  image?: string;
}

interface Blog {
  title: string;
  description: string;
  author: Author;
  publishedAt: string;
  postImage: {
    asset: {
      url: string;
    };
  };
  slug: string;
}

const GetBlogs = async (): Promise<Blog[]> => {
  const query = `*[_type == 'blogs'] | order(_createdAt asc) {
    description,
    title,
    publishedAt,
    "author": author->{
      name,
      image,
      bio
    },
    postImage {
      asset -> {
        url
      }
    },
    "slug": slug.current
  }`;

  try {
    const res = await client.fetch(query);
    if (!res || res.length === 0) {
      throw new Error("No blogs found");
    }
    return res;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchBlogs = async () => {
      try {
        const response = await GetBlogs();
        if (mounted) setBlogs(response);
      } catch {
        if (mounted) setError("Failed to fetch blogs. Please try again later.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchBlogs();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold flex justify-center mb-6">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={`${blog.title}-${index}`}
            className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden"
          >
            {blog.postImage?.asset?.url && (
              <Image
                src={blog.postImage.asset.url || "/default-image.png"}
                alt={blog.title}
                width={150}
                height={100}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            )}

            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 dark:text-slate-300">
                {blog.description}
              </p>
              <p className="text-gray-500 dark:text-slate-300 text-sm mt-2">
                By {blog.author.name} on{" "}
                {new Date(blog.publishedAt).toLocaleDateString()}
              </p>
              {blog.slug && (
                <Link
                  href={`/blog/${blog.slug}`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Read more
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <CommentsSection />
    </div>
  );
};

export default Blog;

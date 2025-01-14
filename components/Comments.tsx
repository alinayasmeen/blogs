'use client';

import React, { useState } from "react";
import { Button } from "./ui/button";

function CommentsSection() {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  
  const handleCommentSubmit = () => {
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setComment("");  // Clear the input after submit
      setName("");     // Clear the name input after submit
    }
  };

  return (
    <div className="mt-10 bg-zinc-300 dark:bg-zinc-900 ">
    <div className="max-w-2xl  mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
          className="border border-gray-300 rounded-md p-2 w-full mb-2"
        />
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Leave a comment"
          className="border border-gray-300 rounded-md p-2 w-full h-24 resize-none"
        />
      </div>
      <Button 
        onClick={handleCommentSubmit}
        className="rounded-md px-4 py-2 transition"
      >
        Submit
      </Button>
      <div className="mt-6">
        {comments.map((com, index) => (
          <div key={index} className="border-b border-gray-200 py-2">
            <p className="font-bold">{com.name}</p>
            <p>{com.comment}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default CommentsSection;

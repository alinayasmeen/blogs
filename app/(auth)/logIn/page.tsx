// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
// import React from 'react'

// const Login = () => {
//   return (
  
//     <div className="flex items-center justify-center min-h-screen ">
//       <div className="p-8 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 w-96">
//         <h2 className="text-2xl font-bold text-center  mb-6">Login</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <Button
//               type="submit"
//               className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Login
//             </Button>
//           </div>
//         </form>
//         <p className="mt-4 text-center text-gray-600 dark:text-gray-400 text-sm">
//           Don&apos;t have an account? <Link href="/signUp" className="text-blue-500 hover:text-blue-700">Signup</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login


'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email.');
      return;
    }
    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      alert('Login successful!');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/signUp" className="text-blue-500 hover:text-blue-700">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

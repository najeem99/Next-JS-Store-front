import React from 'react'

export default function NotfoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
          <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
            <img className='rounded-xl' src="https://media.tenor.com/JOiBmvPAvPsAAAAM/crying.gif" />
          <p className="text-gray-600 mt-6">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
      );
    }

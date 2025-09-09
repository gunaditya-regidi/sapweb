'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documentation..."
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </form>

      {/* Documentation Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Getting Started */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-600 mb-4">Learn the basics of our platform and get started quickly.</p>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-500 hover:underline">Quick Start Guide</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Installation</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Basic Concepts</a></li>
          </ul>
        </div>

        {/* API Reference */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          <p className="text-gray-600 mb-4">Detailed documentation of our API endpoints and usage.</p>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-500 hover:underline">Authentication</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Endpoints</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Error Handling</a></li>
          </ul>
        </div>

        {/* Guides */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Guides</h2>
          <p className="text-gray-600 mb-4">Step-by-step guides for common use cases.</p>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-500 hover:underline">User Management</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Data Integration</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Best Practices</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Small business & Startup",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      timeLabel: "Today",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/api/placeholder/400/250",
      tags: ["Tax & Audit", "Management"],
      tagColors: ["text-purple-600", "text-gray-700"]
    },
    {
      id: 2,
      title: "Scale-Up Company Offer",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      description: "Mental models are simple expressions of complex processes or relationships.",
      image: "/api/placeholder/400/250",
      tags: ["Tax", "Research", "Compliance"],
      tagColors: ["text-blue-500", "text-blue-600", "text-orange-600"]
    },
    {
      id: 3,
      title: "Growing Business Package",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/api/placeholder/400/250",
      tags: ["Audit", "Money Back"],
      tagColors: ["text-purple-600", "text-blue-600"]
    },
    {
      id: 4,
      title: "Scale-Up Company Offer",
      author: "Karan Kumar",
      date: "1 Jan 2023",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      image: "/api/placeholder/400/250",
      tags: ["Money", "Management"],
      tagColors: ["text-purple-600", "text-gray-700"]
    },
    {
      id: 5,
      title: "Scale-Up Company Offer",
      author: "Richa Singh",
      date: "1 Jan 2023",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: "/api/placeholder/400/250",
      tags: ["Tax Return", "News", "Audit"],
      tagColors: ["text-green-600", "text-pink-600", "text-red-600"]
    },
    {
      id: 6,
      title: "Scale-Up Company Offer",
      author: "Miss Nora",
      date: "1 Jan 2023",
      description: "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "/api/placeholder/400/250",
      tags: ["Private Limited Company", "Customer Success"],
      tagColors: ["text-purple-600", "text-blue-800"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h5 className="text-orange-400 font-medium tracking-wide uppercase mb-2">EXPLORE OUR BLOGS</h5>
        <h2 className="text-4xl font-bold text-gray-900">Accelerate Digital Transformation</h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col">
            {/* Image */}
            <div className="mb-4 overflow-hidden">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Author info */}
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>{blog.author} • {blog.date}</span>
              {blog.timeLabel && (
                <span className="ml-1"> • {blog.timeLabel}</span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-between">
              {blog.title}
              <ArrowUpRight className="h-5 w-5 text-gray-400" />
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4">{blog.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className={`${blog.tagColors[index]} text-sm`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <div className="flex justify-center mt-12">
        <button className="flex items-center bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md">
          Show more blogs
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default BlogList;
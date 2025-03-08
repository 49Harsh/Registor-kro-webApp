import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Small business & Startup",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      timeLabel: "Today",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/imgss/digi-1.png",
      tags: [
        { name: "Tax & Audit", color: "bg-purple-100 text-purple-600" },
        { name: "Management", color: "bg-gray-100 text-gray-700" }
      ],
    },
    {
      id: 2,
      title: "Scale-Up Company Offer",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      description: "Mental models are simple expressions of complex processes or relationships.",
      image: "/imgss/digi-2.png",
      tags: [
        { name: "Tax", color: "bg-blue-100 text-blue-500" },
        { name: "Research", color: "bg-blue-100 text-blue-600" },
        { name: "Compliance", color: "bg-orange-100 text-orange-600" }
      ],
    },
    {
      id: 3,
      title: "Growing Business Package",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/imgss/digi-3.png",
      tags: [
        { name: "Audit", color: "bg-purple-100 text-purple-600" },
        { name: "Money Back", color: "bg-blue-100 text-blue-600" }
      ],
    },
    {
      id: 4,
      title: "Scale-Up Company Offer",
      author: "Karan Kumar",
      date: "1 Jan 2023",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      image: "/imgss/digi-2.png",
      tags: [
        { name: "Money", color: "bg-purple-100 text-purple-600" },
        { name: "Management", color: "bg-gray-100 text-gray-700" }
      ],
    },
    {
      id: 5,
      title: "Scale-Up Company Offer",
      author: "Richa Singh",
      date: "1 Jan 2023",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: "/imgss/digi-3.png",
      tags: [
        { name: "Tax Return", color: "bg-green-100 text-green-600" },
        { name: "News", color: "bg-pink-100 text-pink-600" },
        { name: "Audit", color: "bg-red-100 text-red-600" }
      ],
    },
    {
      id: 6,
      title: "Scale-Up Company Offer",
      author: "Miss Nora",
      date: "1 Jan 2023",
      description: "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "/imgss/digi-1.png",
      tags: [
        { name: "Private Limited Company", color: "bg-purple-100 text-purple-600" },
        { name: "Customer Success", color: "bg-blue-100 text-blue-800" }
      ],
    }
  ];

  // For SEO - add these to your index.html or use react-helmet if needed
  React.useEffect(() => {
    document.title = "Accelerate Digital Transformation | Our Blogs";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our blogs on digital transformation, business growth, and more.");
    }
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h5 className="text-orange-400 font-medium tracking-wide uppercase mb-2">EXPLORE OUR BLOGS</h5>
        <h2 className="text-4xl font-bold text-gray-900">Accelerate Digital Transformation</h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article key={blog.id} className="flex flex-col h-full group">
            {/* Image */}
            <div className="mb-4 overflow-hidden rounded-md">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Author info */}
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>{blog.author} • {blog.date}</span>
              {blog.timeLabel && (
                <span className="ml-1"> • {blog.timeLabel}</span>
              )}
            </div>

            {/* Title with arrow */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-between group-hover:text-blue-600 transition-colors duration-200">
              <a href={`/blog/${blog.id}`} className="outline-none focus:underline">
                {blog.title}
              </a>
              <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4">{blog.description}</p>

            {/* Tags with background color */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className={`${tag.color} text-sm px-3 py-1 rounded-full`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Show more button */}
      <div className="flex justify-center mt-12">
        <button 
          className="flex items-center bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
          aria-label="Show more blogs"
        >
          Show more blogs
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default BlogList;
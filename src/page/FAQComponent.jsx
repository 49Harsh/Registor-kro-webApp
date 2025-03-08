import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FAQComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, our software can recover deleted files from your desktop. It uses advanced scanning algorithms to find and restore files that have been deleted from your computer."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, our software can recover deleted files from your desktop. It uses advanced scanning algorithms to find and restore files that have been deleted from your computer."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, our software can recover deleted files from your desktop. It uses advanced scanning algorithms to find and restore files that have been deleted from your computer."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, our software can recover deleted files from your desktop. It uses advanced scanning algorithms to find and restore files that have been deleted from your computer."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, our software can recover deleted files from your desktop. It uses advanced scanning algorithms to find and restore files that have been deleted from your computer."
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* FAQ Header */}
      <div className="text-center mb-8">
        <p className="text-orange-500 font-medium mb-2">FAQ</p>
        <h2 className="text-4xl font-bold text-stone-800">Frequent Ask Questions</h2>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="border rounded-lg overflow-hidden cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center p-5 bg-white">
              <h3 className="font-medium text-stone-800">{item.question}</h3>
              <div className="text-stone-600">
                <ChevronRight className={`h-6 w-6 transition-transform duration-200 ${expandedIndex === index ? 'transform rotate-90' : ''}`} />
              </div>
            </div>
            {expandedIndex === index && (
              <div className="p-5 bg-gray-50 border-t">
                <p className="text-stone-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8">
        <button className="bg-blue-800 text-white py-3 px-6 rounded-md flex items-center mx-auto">
          Show more
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default FAQComponent;
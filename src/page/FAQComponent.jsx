import React, { useState, useCallback, memo } from 'react';
import { ChevronRight } from 'lucide-react';

// Memoized FAQ Item component to prevent unnecessary re-renders
const FAQItem = memo(({ item, index, isExpanded, onToggle }) => {
  return (
    <div
      className="border rounded-lg overflow-hidden cursor-pointer transition-colors hover:border-orange-200"
      onClick={() => onToggle(index)}
    >
      <div className="flex justify-between items-center p-4 sm:p-5 bg-white">
        <h3 className="font-medium text-stone-800 text-sm sm:text-base">{item.question}</h3>
        <div className="text-stone-600 flex-shrink-0 ml-2">
          <ChevronRight 
            className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 ${
              isExpanded ? 'transform rotate-90' : ''
            }`} 
            aria-hidden="true"
          />
        </div>
      </div>
      {isExpanded && (
        <div className="p-4 sm:p-5 bg-gray-50 border-t">
          <p className="text-stone-700 text-sm sm:text-base">{item.answer}</p>
        </div>
      )}
    </div>
  );
});

// Add display name for better debugging
FAQItem.displayName = 'FAQItem';

const FAQComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Memoize toggle function to prevent recreating on each render
  const toggleFAQ = useCallback((index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

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
    <section className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12" aria-labelledby="faq-heading">
      {/* FAQ Header - Semantic HTML */}
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-orange-500 font-medium mb-1 sm:mb-2">FAQ</p>
        <h2 id="faq-heading" className="text-2xl sm:text-4xl font-bold text-stone-800">Frequent Ask Questions</h2>
      </div>

      {/* FAQ Items - Using semantic HTML */}
      <div className="space-y-3 sm:space-y-4" role="list">
        {faqItems.map((item, index) => (
          <FAQItem
            key={`faq-item-${index}`}
            item={item}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={toggleFAQ}
          />
        ))}
      </div>

      {/* Show More Button - With proper accessibility */}
      <div className="text-center mt-6 sm:mt-8">
        <button 
          className="bg-blue-800 text-white py-2 px-5 sm:py-3 sm:px-6 rounded-md flex items-center mx-auto transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-expanded="false"
        >
          <span>Show more</span>
          <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default FAQComponent;
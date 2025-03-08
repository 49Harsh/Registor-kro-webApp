import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Memoized Star components to prevent unnecessary re-renders
const FullStar = memo(() => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
));

const HalfStar = memo(() => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <defs>
      <linearGradient id="half-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="#D1D5DB" />
      </linearGradient>
    </defs>
    <path fill="url(#half-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
));

const EmptyStar = memo(() => (
  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
));

// Memoized TestimonialCard component
const TestimonialCard = memo(({ testimonial }) => {
  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FullStar key={`full-${i}`} />);
    }
    
    // Half star
    if (halfStar) {
      stars.push(<HalfStar key="half" />);
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<EmptyStar key={`empty-${i}`} />);
    }
    
    return stars;
  };

  return (
    <div className="min-w-full sm:min-w-[85%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.33%-1rem)] px-2">
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 h-full shadow-lg">
        {/* Quote icon */}
        <div className="text-3xl sm:text-4xl text-gray-400 font-serif mb-2 sm:mb-3" aria-hidden="true">"</div>
        
        {/* Rating */}
        <div className="flex mb-3 sm:mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
          {renderStars(testimonial.rating)}
        </div>
        
        {/* Testimonial */}
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-5 sm:line-clamp-none">
          {testimonial.quote}
        </p>
        
        {/* Author */}
        <div className="flex items-center mt-auto">
          <img 
            src={testimonial.avatar} 
            alt={`${testimonial.author}'s profile`} 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 object-cover"
            loading="lazy"
          />
          <div>
            <h4 className="font-bold text-base sm:text-lg">{testimonial.author}</h4>
            <p className="text-gray-600 text-xs sm:text-sm">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

const TestimonialSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const sliderRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      avatar: "/imgss/digi-1.png"
    },
    {
      id: 2,
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      avatar: "/imgss/digi-2.png"
    },
    {
      id: 3,
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      avatar: "/imgss/digi-3.png"
    },
    {
      id: 4,
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      avatar: "imgss/digi-2.png"
    },
    {
      id: 5,
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      avatar: "imgss/digi-1.png"
    },
  ];

  // Update visible slides based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else if (window.innerWidth >= 640) {
        setVisibleSlides(1.2); // Show a bit of the next slide on small devices
      } else {
        setVisibleSlides(1);
      }
    };

    // Set initial value
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Memoize navigation functions to prevent unnecessary re-renders
  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);

  const goToSlide = useCallback((index) => {
    setActiveSlide(index);
  }, []);

  // Auto-play functionality with continuous looping
  useEffect(() => {
    let intervalId;
    
    if (!isPaused) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, nextSlide]);

  // Pause auto-play on hover/focus
  const pauseAutoPlay = () => setIsPaused(true);
  const resumeAutoPlay = () => setIsPaused(false);

  // Calculate the translation percentage based on visible slides
  const getTranslateX = () => {
    return `translateX(-${(activeSlide * 100) / visibleSlides}%)`;
  };

  return (
    <section 
      className="bg-blue-900 w-full py-8 sm:py-12 px-3 sm:px-4" 
      aria-labelledby="testimonials-heading"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      onFocus={pauseAutoPlay}
      onBlur={resumeAutoPlay}
      ref={sliderRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
          <h2 id="testimonials-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center sm:text-left">
            What people say about us
          </h2>
          
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              className="rounded-full bg-white p-2 sm:p-3 text-blue-900 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </button>
            <button 
              onClick={nextSlide}
              className="rounded-full bg-orange-400 p-2 sm:p-3 text-white hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        
        {/* Testimonials Slider */}
        <div 
          className="overflow-hidden"
          aria-live="polite"
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out" 
            style={{ transform: getTranslateX() }}
          >
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2" role="tablist">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                activeSlide === index ? "w-6 bg-orange-400" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={activeSlide === index}
              role="tab"
              tabIndex={activeSlide === index ? 0 : -1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
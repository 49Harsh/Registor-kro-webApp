import React, { useState, memo } from 'react';
import { Check } from 'lucide-react';

const FeatureItem = memo(({ text }) => (
  <div className="flex items-center">
    <div className="bg-white bg-opacity-20 rounded-full p-1 mr-2">
      <Check className="h-4 w-4" aria-hidden="true" />
    </div>
    <span>{text}</span>
  </div>
));

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const features = [
    "Instant results",
    "User-friendly interface",
    "Personalized customization"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Email submitted:', email);
      // await submitEmail(email);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="w-full py-16 px-6 bg-gradient-to-r from-orange-400 via-amber-500 to-blue-900 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold mb-3 tracking-wide" aria-label="Brand positioning">
          1% OF THE INDUSTRY
        </p>
        
        <h1 
          id="hero-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
        >
          Welcome to your new digital reality. Now.
        </h1>
        
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row mb-12 max-w-xl mx-auto"
          aria-label="Email subscription form"
        >
          <div className="flex-grow">
            <label htmlFor="email-input" className="sr-only">Email Address</label>
            <input
              id="email-input"
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-l sm:rounded-r-none text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          
          <button
            type="submit"
            className="bg-orange-400 text-white font-medium px-6 py-3 rounded sm:rounded-l-none hover:bg-orange-500 transition-colors mt-2 sm:mt-0 disabled:bg-orange-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 justify-items-center">
          {features.map((feature, index) => (
            <FeatureItem key={`feature-${index}`} text={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
    return (
<section className="bg-white">
  <div className="container py-16 mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
    <div className="flex flex-col md:flex-row">
     <div className="md:w-1/2 mb-6 md:mb-0">
      <figure className="relative max-w transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
      <LazyLoadImage src="https://i.ibb.co/ZhyNXS6/close-up-chef-cooking-restaurant-kitchen.jpg" alt="Our Story" className="w-full h-full object-cover rounded-lg shadow-md"/>
      </figure>
      </div>
      <div className="md:w-1/2 md:pl-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Our Story</h3>
        <p className="text-gray-600 mb-4">Sprouted Kitchen is a Professional Chef Hunting Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Chef Hunting, with a focus on dependability and online most valuable chef list. We're working to turn our passion for Chef Hunting into a booming online website. We hope you enjoy our Chef Hunting as much as we enjoy offering them to you.

I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
        <a href="#" className="inline-block py-2 px-4 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors duration-300">Learn More</a>
      </div>
    </div>
  </div>
</section>

    );
};

export default About;
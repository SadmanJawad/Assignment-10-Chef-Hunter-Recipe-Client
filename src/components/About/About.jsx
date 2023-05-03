import React from 'react';

const About = () => {
    return (
<section className="bg-white">
  <div className="container py-16 mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
    <div className="flex flex-col md:flex-row">
     <div className="md:w-1/2 mb-6 md:mb-0">
        <img src="https://i.ibb.co/ZhyNXS6/close-up-chef-cooking-restaurant-kitchen.jpg" alt="Our Story" className="w-full h-full object-cover rounded-lg shadow-md"/>
      </div>
      <div className="md:w-1/2 md:pl-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Our Story</h3>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo sed viverra venenatis, elit sapien hendrerit massa, ac rutrum tortor quam eu ex. Morbi at dapibus felis.</p>
        <p className="text-gray-600 mb-4">Aliquam eu tellus aliquam, bibendum tellus eget, tincidunt quam. Maecenas vel justo ut felis consectetur venenatis nec ut odio. Duis maximus dolor eget semper varius.</p>
        <p className="text-gray-600 mb-4">Sed vitae elit ut erat euismod tempor vel ut nisi. In mattis neque ut lacinia euismod. Donec non risus massa. Morbi lacinia, dolor a dapibus accumsan, eros risus ultrices nibh, sit amet ultrices turpis purus non leo.</p>
        <a href="#" className="inline-block py-2 px-4 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors duration-300">Learn More</a>
      </div>
    </div>
  </div>
</section>

    );
};

export default About;
// src/components/Explore.jsx
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import HeaderLogo from "../assets/Header-Logo.png";
import { FaInfoCircle } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Explore = () => {
  const therapists = [
    { name: "Julian Rogers", title: "Family psychologist, Psy. D" },
    { name: "Ruth Clark", title: "Clinical psychologist, Psy. D" },
    { name: "Joseph Powers", title: "Practicing psychologist, Psy. D" },
    { name: "Ruth Clark", title: "Clinical psychologist, Psy. D" },
    { name: "Robert Johnston", title: "Practicing psychologist, Psy. D" },
    { name: "Carmella Floyd", title: "Clinical psychologist, Psy. D" },
    { name: "Merryl Morton", title: "Child psychologist" },
    { name: "Carmella Floyd", title: "Clinical psychologist, Psy. D" },
  ];

  const testimonials = [
    {
      name: "Kerry Banks",
      title: "Housewife",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 5,
    },
    {
      name: "Damian York",
      title: "Entrepreneur",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#f9f4ff]">
      <header className="flex items-center justify-between pt-12 px-12 w-full ">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={HeaderLogo} alt="Logo" className="h-[120px] w-[120px]" />
          </Link>
        </div>
        <nav
          className={`md:flex gap-6 justify-evenly flex-1 text-lg ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/" className="text-gray-700">
            Home
          </Link>
          <a href="#" className="text-gray-700">
            About
          </a>
          <a href="#" className="text-gray-700">
            Learn
          </a>
          <a href="#" className="text-gray-700">
            Play
          </a>
          <Link to="/explore" className="text-gray-700">
            Explore
          </Link>
          <a href="#" className="text-gray-700">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-black font-bold">EN</span>
          <button className="px-12 py-4 bg-[#380760] text-white rounded-lg">
            Log in
          </button>
          <button
            className="p-2 bg-white border rounded"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <AiOutlineClose className="h-6 w-6 text-gray-700" />
            ) : (
              <AiOutlineMenu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </header>
      <header className="flex flex-col md:flex-row gap-20 items-center py-16 container mx-auto text-center md:text-left">
        <div className="flex-1 md:flex-none relative">
          <h1 className="text-8xl font-bold text-[#4d2e9b]">
            Explore
            <div className="absolute top-16 left-0 text-8xl font-bold text-[#4d2e9b] opacity-20 transform -translate-y-1/4 pointer-events-none">
              Explore
            </div>
          </h1>
        </div>
        <div className="flex-1 md:ml-8 md:mt-0">
          <p className="text-4xl font-bold text-gray-700">
            Exxplooorr Edu is one of world best virtual learning Reaction
            eLearning
          </p>
          <p className="text-xl text-[#4d2e9b] mt-2 font-semibold">
            You can be your own Guiding star with our help
          </p>
        </div>
      </header>

      <nav className="flex justify-around items-center bg-white py-6 px-10 custom-shadow">
        <div className="flex space-x-20 ">
          <Link
            to="#"
            className="text-lg font-medium text-gray-500 hover:text-gray-900"
          >
            Movies
          </Link>
          <Link
            to="#"
            className="text-lg font-medium text-gray-500 hover:text-gray-900"
          >
            Book
          </Link>
          <Link
            to="#"
            className="text-xl font-medium text-gray-500 hover:text-gray-900"
          >
            Directory
          </Link>
          <div className="relative">
            <Link to="#" className="text-xl font-medium text-purple-600 ">
              Therapist
            </Link>
            <div className="absolute w-28 h-1 rounded-full bg-[#d9539c] -bottom-6 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <Link
            to="#"
            className="text-xl font-medium text-gray-500 hover:text-gray-900"
          >
            Quotes
          </Link>
        </div>

        <Link to="#" className="text-xl text-blue-600 hover:text-gray-900">
          <FaInfoCircle />
        </Link>
      </nav>
      <section className="container mx-auto mb-24 flex gap-[340px] mt-16">
        <div>
          <h2 className="text-4xl font-extrabold">Meet our Therapist</h2>
          <p className="text-muted-foreground text-left mt-2 text-gray-500 max-w-lg">
            Praesent vel risus vitae arcu mattis varius. Integer sodales lorem
            ac ligula. Itae arcu mattis varius.
          </p>
        </div>
        <div className="flex space-x-12 mt-2">
          <div>
            <h3 className="text-4xl font-extrabold text-right text-primary text-[#4d2e9b]">
              12
            </h3>
            <p className="text-muted-foreground">Qualified specialists</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-right text-primary text-[#D9539C]">
              99%
            </h3>
            <p className="text-muted-foreground">Effectiveness of therapy</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto">
        {therapists.map((therapist, index) => (
          <div
            key={index}
            className=" bg-white rounded-lg shadow-md flex flex-col "
          >
            <div className="w-full h-64 bg-gray-300 rounded-t-lg mb-4" />
            <div className="container mx-auto items-center py-2 w-full">
              <p className="text-[#D9539C] text-center mb-2">
                {therapist.title}
              </p>
              <h3 className="text-xl font-bold text-center">
                {therapist.name}
              </h3>
              <div className="flex space-x-2 mt-2 justify-center">
                <FaFacebookF className="w-6 h-6 bg-[#E0C23D] text-white rounded-full p-1" />
                <FaInstagram className="w-6 h-6 bg-[#E0C23D] text-white rounded-full p-1" />
                <FaTwitter className="w-6 h-6 bg-[#E0C23D] text-white rounded-full p-1" />
                <WhatsAppIcon className="w-6 h-6 bg-[#E0C23D] text-white rounded-full p-1" />
              </div>
            </div>
          </div>
        ))}
        <div className="flex mt-8 space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 ${
                page === 1
                  ? "bg-[#6d28d9] text-white"
                  : "bg-white text-gray-800"
              } rounded-full`}
            >
              {page}
            </button>
          ))}
        </div>
      </section>

      <section className="text-center mt-12 relative py-16">
        <h2 className="text-4xl font-extrabold">What patients say</h2>
        <p className="mt-2 max-w-lg container mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry printing and typesetting industry
        </p>
        <div className="flex justify-center items-center mt-8 space-x-4 relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrevClick}
            className="absolute left-20 transform -translate-y-1/2 top-1/2 bg-[#D9539C] p-2 rounded-full"
          >
            <FaChevronLeft className="text-white w-6 h-6" />
          </button>

          {/* Testimonials */}
          <div className="flex space-x-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg max-w-xl h-52"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
                    <div className="justify-center">
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-pink-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-left">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNextClick}
            className="absolute right-20 transform -translate-y-1/2 top-1/2 bg-[#D9539C] p-2 rounded-full"
          >
            <FaChevronRight className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          <span
            className={`w-6 h-1 rounded-full ${
              currentIndex === 1 ? "bg-[#4d2e9b]" : "bg-gray-400"
            }`}
          />
          <span
            className={`w-20 h-1 rounded-full ${
              currentIndex === 0 ? "bg-[#4d2e9b]" : "bg-gray-400"
            }`}
          />
          <span
            className={`w-6 h-1 rounded-full ${
              currentIndex === 1 ? "bg-[#4d2e9b]" : "bg-gray-400"
            }`}
          />
          <span
            className={`w-6 h-1 rounded-full ${
              currentIndex === 1 ? "bg-[#4d2e9b]" : "bg-gray-400"
            }`}
          />
        </div>
      </section>
    </div>
  );
};

export default Explore;

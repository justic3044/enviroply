import React from 'react';
import { Shield, Award, Users, Target, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Justice",
      role: "Senior Environmental Health Practitioner",
      description:
        "Justice has over 10 months of experience in occupational health and safety, specializing in compliance audits and risk assessments.",
      photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Justin Smith",
      role: "Consultant",
      description:
        "Justin brings 3 years of consulting expertise, focusing on food safety, environmental audits, and tailored compliance solutions.",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      name: "Sarah Smith",
      role: "Training Specialist",
      description:
        "Sarah has trained over 10 professionals, developing customized workshops and practical courses in environmental management.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-800 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About EnviroHealth
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed">
             We help organisations meet regulatory standards, reduce environmental health-related risks and embed sustainable practices. 
             </p>
          </div>
        </div>
      </section>

 

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              {/*<p className="text-xl text-gray-600">
                Background about us.
               </p> */}
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  EnviroPly Environmental Health Solutions is a proudly South African consultancy founded by a team of qualified Environmental Health Practitioners. 
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                 We specialize in bridging the gap between compliance and practice by offering expert services in food safety, compliance auditing, professional training, impact assessments, and waste management planning.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                 Guided by integrity, innovation, and a passion for healthier communities, we empower businesses, institutions, and municipalities to meet legal requirements while promoting sustainable, safe, and responsible environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Qualified Environmental Health Practitioners and consultants dedicated to your success
            </p>
          </div>

         
        {/* Slideshow Section */}
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-teal-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 mt-3">{member.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Let's discuss how our expertise can help your business achieve compliance and operational excellence.
          </p>
          <a
            href="/contact"
            className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Users, FileText, Leaf, ArrowRight, Award } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Food Safety & Hygiene Services',
      description: 'Comprehensive food safety training, HACCP implementation, and compliance with R638 regulations.',
      features: ['Staff Training', 'Certificate of Acceptability', 'HACCP Audits', 'Temperature Control']
    },
    {
      icon: CheckCircle,
      title: 'Compliance Auditing & Guidance',
      description: 'Expert audits ensuring compliance with OHSA, NEMWA, Foodstuffs Act, and local by-laws.',
      features: ['Gap Analysis', 'Risk Assessments', 'Compliance Reports', 'Ongoing Monitoring']
    },
    {
      icon: Users,
      title: 'Professional Training',
      description: 'CPD-aligned training for health professionals and specialized workshops for various sectors.',
      features: ['EHP Training', 'Healthcare Waste Management', 'Infection Prevention', 'Food Handler Training']
    },
    {
      icon: FileText,
      title: 'Environmental Health Impact Assessments',
      description: 'Comprehensive EHIA reports in line with NEMA: Waste Act, 2008 and regulatory requirements.',
      features: ['Impact Assessments', 'Community Engagement', 'Risk Identification', 'Mitigation Planning']
    },
    {
      icon: Leaf,
      title: 'Waste Management Planning',
      description: 'Tailored waste management strategies for healthcare, hospitality, retail, and industrial sectors.',
      features: ['Waste Segregation', 'NEMWA Compliance', 'Recycling Initiatives', 'Monitoring & Evaluation']
    }
  ];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Environmental Health & Compliance — Made Practical
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-teal-100 leading-relaxed">
              We help organisations meet regulatory standards, reduce Environmental Health-related risks and embed sustainable practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-800 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Environmental Health Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From food safety compliance to environmental impact assessments, we provide the expertise your business needs to operate safely and legally.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-teal-100 p-3 rounded-lg mr-4">
                      <IconComponent className="h-8 w-8 text-teal-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors duration-200"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EnviroPly?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise in South African regulations and commitment to excellence makes us the trusted partner for your environmental health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Knowledge & practicality</h3>
              <p className="text-gray-600">
                Better understanding of regulations such R638, OHSA, NEMWA, and local by-laws, including practical experience.  
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tailored Solutions</h3>
              <p className="text-gray-600">
                Customized services for restaurants, hospitals, manufacturers, and all business types.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-teal-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to make it practical?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Get a free consultation and discover how we can help your business meet all regulatory requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Book concultation
            </Link>
            <a
              href="tel:+27737375027"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-800 transition-all duration-300"
            >
              Call +2773 737 5027
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
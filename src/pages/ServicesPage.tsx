import React from 'react';
import { Shield, CheckCircle, Users, FileText, Leaf, Phone, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'food-safety',
      icon: Shield,
      title: 'Food Safety & Hygiene Services',
      description: 'Comprehensive food safety solutions ensuring compliance with South African regulations.',
      details: [
        'Training of staff on food safety, hygiene practices, and compliance with Regulation R638, Meat Safety Act, and related laws',
        'Assistance with applications for Certificates of Acceptability (COA) and compliance inspections',
        'Development and compilation of food safety files including policies, cleaning schedules, monitoring records, and staff training records',
        'Menu and layout plan reviews for new or existing food premises to meet design and hygiene requirements',
        'HACCP-based food safety audits and implementation support',
        'Guidance on temperature control, safe storage, pest control, and waste handling on food premises',
        'Tailored support for restaurants, supermarkets, butcheries, street vendors, and informal traders to comply with legal requirements'
      ]
    },
    {
      id: 'compliance',
      icon: CheckCircle,
      title: 'Compliance Auditing & Guidance',
      description: 'Expert auditing services ensuring full compliance with health, safety, and environmental regulations.',
      details: [
        'Comprehensive audits of health, safety, and environmental compliance in line with South African laws (OHSA, NEMWA, Foodstuffs Act, local by-laws)',
        'Gap analysis and risk assessments to identify non-compliance and corrective actions',
        'Preparation of compliance reports and practical recommendations for improvement',
        'Ongoing compliance monitoring support for businesses (monthly/quarterly)',
        'Advisory services for organizations preparing for inspections by authorities',
        'Guidance in achieving and maintaining regulatory certifications'
      ]
    },
    {
      id: 'training',
      icon: Users,
      title: 'Training for Health Professionals',
      description: 'Professional development and specialized training programs for various sectors.',
      details: [
        'Workshops and CPD-aligned training for Environmental Health Practitioners (EHPs) and healthcare workers',
        'Training on hospital and clinical waste management in line with healthcare risk waste standards',
        'Hygiene and infection prevention workshops for hospitals, clinics, and community health facilities',
        'Public health safety courses covering sanitation, outbreak response, and occupational health basics',
        'Development of training materials, checklists, and toolkits to support health professionals'
      ],
      subServices: [
        {
          title: 'Food Handler Training',
          details: 'Training of staff on food safety, hygiene practices, and compliance with Regulation R638, Meat Safety Act, and related laws'
        },
        {
          title: 'Waste Handler Training', 
          details: 'Training staff on correct waste handling, storage, and disposal practices'
        }
      ]
    },
    {
      id: 'eia',
      icon: FileText,
      title: 'Environmental Health Impact Assessments (EHIA)',
      description: 'Comprehensive assessments evaluating potential health and environmental impacts of projects.',
      details: [
        'Comprehensive assessment of projects to evaluate potential health and environmental impacts',
        'Compilation of EHIA reports in line with NEMA: Waste Act, 2008 and other relevant legislation',
        'Community and stakeholder engagement to ensure inclusive consultation',
        'Identification of risks related to air quality, water, sanitation, waste, and occupational health',
        'Development of mitigation measures and monitoring plans to ensure compliance and sustainability',
        'Support for project approval processes with municipalities and regulatory bodies'
      ]
    },
    {
      id: 'waste',
      icon: Leaf,
      title: 'Waste Management Planning',
      description: 'Tailored waste management strategies for various sectors ensuring regulatory compliance.',
      details: [
        'Development of tailored waste management strategies for healthcare, hospitality, retail, and industrial sectors',
        'Design of integrated waste segregation systems (general, hazardous, recyclable, and healthcare risk waste)',
        'Assistance with compliance to NEMWA (National Environmental Management: Waste Act, 2008)',
        'Support in setting up recycling initiatives',
        'Ongoing monitoring and evaluation of waste management practices',
        'Provision of waste management compliance toolkits and reporting templates'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-800 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              Comprehensive environmental health solutions tailored to meet South African regulatory requirements and industry best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-8">
                        <div className="bg-teal-100 p-4 rounded-xl mr-6">
                          <IconComponent className="h-10 w-10 text-teal-700" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                          <p className="text-xl text-gray-600">{service.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Includes:</h3>
                          <ul className="space-y-3">
                            {service.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-teal-50 rounded-xl p-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            {service.id === 'training' ? 'Specialized Training Programs' : 'Key Benefits'}
                          </h4>
                          
                          {service.subServices ? (
                            <div className="space-y-4">
                              {service.subServices.map((subService, subIndex) => (
                                <div key={subIndex} className="bg-white rounded-lg p-4">
                                  <h5 className="font-semibold text-gray-900 mb-2">{subService.title}</h5>
                                  <p className="text-sm text-gray-600">{subService.details}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <ul className="space-y-2">
                              <li className="flex items-center text-gray-700">
                                <ArrowRight className="h-4 w-4 text-teal-600 mr-2" />
                                Regulatory Compliance
                              </li>
                              <li className="flex items-center text-gray-700">
                                <ArrowRight className="h-4 w-4 text-teal-600 mr-2" />
                                Risk Reduction
                              </li>
                              <li className="flex items-center text-gray-700">
                                <ArrowRight className="h-4 w-4 text-teal-600 mr-2" />
                                Professional Support
                              </li>
                              <li className="flex items-center text-gray-700">
                                <ArrowRight className="h-4 w-4 text-teal-600 mr-2" />
                                Ongoing Monitoring
                              </li>
                            </ul>
                          )}
                          
                          <div className="mt-6">
                            <a
                              href="/contact"
                              className="inline-flex items-center bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors duration-200"
                            >
                              Get Quote <ArrowRight className="h-4 w-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8">
            Contact us to discuss your specific environmental health requirements and get a tailored proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Request Consultation
            </a>
            <a
              href="tel:+27111234567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
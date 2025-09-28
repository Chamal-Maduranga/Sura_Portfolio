'use client'
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, User, GraduationCap, Briefcase, Award, Globe, FileText, TrendingUp, Users, CheckCircle, Copy, Check } from 'lucide-react';

export default function Portfolio() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('suramini1991@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handlePhoneCopy = async () => {
    try {
      await navigator.clipboard.writeText('+971 50 437 4491');
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone:', err);
    }
  };

  const experiences = [
    {
      title: "Accounts Executive cum Customer Service + Documentation",
      company: "Bright Seashore Shipping LLC - UAE",
      location: "Al Nadha",
      period: "Nov 2023 - Present",
      highlights: [
        "Import/Export Declarations with HS codes and product descriptions",
        "Bank reconciliations and stock maintenance",
        "Government body coordination (Ministry of Economy, Dubai Trade, FTA)",
        "Custom document submissions and MOFA payments",
        "Payroll processing and WPS bank transfers"
      ]
    },
    {
      title: "Senior Account Executive",
      company: "Sea Master Global Sea Shipping Agents LLC - UAE",
      period: "Sep 2023 – Nov 2023",
      highlights: [
        "Financial statements analysis and strategic recommendations",
        "Tax compliance and audit coordination",
        "Cash flow management and financial software oversight",
        "Shipping documents and customs forms preparation"
      ]
    },
    {
      title: "Account Executive",
      company: "Simtech Marine Lanka (PVT) LTD - Sri Lanka",
      period: "May 2019 - March 2022",
      highlights: [
        "Financial records maintenance and transaction recording",
        "Invoice preparation and payment tracking",
        "Bank reconciliation and expense report processing",
        "Tax filing support and audit documentation"
      ]
    },
    {
      title: "Junior Accounts Executive",
      company: "Perma Shipping Lanka (PVT) LTD - Sri Lanka",
      period: "Feb 2016 - April 2019",
      highlights: [
        "Financial data organization and tax return preparation",
        "Inter-company accounts and reconciliation",
        "Payroll collaboration and compliance monitoring",
        "Principal accounts preparation and query resolution"
      ]
    }
  ];

  const education = [
    {
      degree: "BSc in Business & Management",
      institution: "Cardiff Metropolitan University - Sri Lanka",
      year: "2019"
    },
    {
      degree: "Diploma in Advanced Business Management",
      institution: "NIBM - Sri Lanka",
      year: "2015"
    },
    {
      degree: "Diploma in Information and Communication Technologies",
      institution: "Aquinas College of Higher Studies",
      year: "2008"
    },
    {
      degree: "Diploma in Computerized Accounting",
      institution: "Siksil Institute",
      year: "2012"
    },
    {
      degree: "AAT (Intermediate) - Sri Lanka",
      year: "2012"
    },
    {
      degree: "CIMA Certificate Level",
      year: "2015"
    }
  ];

  const skills = [
    "Financial Analysis", "Import/Export Documentation", "Tax Compliance",
    "Payroll Processing", "Bank Reconciliation", "Customs Clearance",
    "Financial Reporting", "Audit Coordination", "Cash Flow Management",
    "Government Liaison", "Team Leadership", "Strategic Planning"
  ];

  const languages = [
    { lang: "Sinhalese", level: "Native" },
    { lang: "English", level: "Fluent" },
    { lang: "Hindi", level: "Basic" },
    { lang: "Tamil", level: "Basic" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-white/30 shadow-lg hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/profile-picture.jpg" 
                    alt="Neelakanthi Suramini" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Neelakanthi Suramini
                </h1>
              </div>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed animate-fade-in-delayed">
                Inspirational Accounting & Finance Professional with 10+ Years Experience
              </p>
              <div className="flex flex-wrap gap-3">
                {["Sri Lanka & UAE Experience", "Logistics & Shipping Expert", "Team Leadership"].map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium animate-slide-in-left"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-fade-in-right hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div 
                  className="flex items-center gap-3 text-white cursor-pointer group hover:bg-white/10 rounded-lg p-2 -m-2 transition-all duration-200"
                  onClick={handleEmailCopy}
                >
                  <Mail className="w-5 h-5 text-blue-300 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm group-hover:text-blue-200 transition-colors duration-200">suramini1991@gmail.com</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-green-300 animate-scale-in" />
                    ) : (
                      <Copy className="w-4 h-4 text-blue-300" />
                    )}
                  </div>
                </div>
                {emailCopied && (
                  <div className="text-green-300 text-xs animate-fade-in-up bg-green-500/20 px-2 py-1 rounded">
                    Email copied to clipboard!
                  </div>
                )}
                <div 
                  className="flex items-center gap-3 text-white cursor-pointer group hover:bg-white/10 rounded-lg p-2 -m-2 transition-all duration-200"
                  onClick={handlePhoneCopy}
                >
                  <Phone className="w-5 h-5 text-blue-300 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm group-hover:text-blue-200 transition-colors duration-200">+971 50 437 4491</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {phoneCopied ? (
                      <Check className="w-4 h-4 text-green-300 animate-scale-in" />
                    ) : (
                      <Copy className="w-4 h-4 text-blue-300" />
                    )}
                  </div>
                </div>
                {phoneCopied && (
                  <div className="text-green-300 text-xs animate-fade-in-up bg-green-500/20 px-2 py-1 rounded">
                    Phone copied to clipboard!
                  </div>
                )}
                <div className="flex items-center gap-3 text-white hover:bg-white/10 rounded-lg p-2 -m-2 transition-all duration-200">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <span className="text-sm">UAE & Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3 text-white hover:bg-white/10 rounded-lg p-2 -m-2 transition-all duration-200">
                  <Calendar className="w-5 h-5 text-blue-300" />
                  <span className="text-sm">September 6, 1991</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 animate-fade-in-up hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center animate-pulse-gentle">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Professional Summary</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Accomplished Accounting and Finance professional with over 10 years of comprehensive experience across Sri Lanka and the UAE. 
                Specialized in import/export operations, shipping documentation, and financial management. Known for exceptional team leadership, 
                driving corporate goals achievement, and maintaining a "Can Do Attitude." Passionate about service excellence, productivity, 
                and continuous professional development with a proven track record of delivering results in dynamic environments.
              </p>
            </section>

            {/* Experience Section */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 animate-fade-in-up hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center animate-pulse-gentle">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Professional Experience</h2>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 border-l-2 border-blue-200 last:border-l-0 animate-slide-in-left group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors duration-300 hover:shadow-md">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                        <span className="font-medium">{exp.company}</span>
                        {exp.location && <span>• {exp.location}</span>}
                        <span className="text-blue-600 font-medium">• {exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 animate-fade-in opacity-0" style={{ animationDelay: `${(index * 200) + (idx * 100)}ms`, animationFillMode: 'forwards' }}>
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 animate-fade-in-up hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse-gentle">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Education & Qualifications</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    {edu.institution && <p className="text-gray-600 mb-2">{edu.institution}</p>}
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills Section */}
            <section className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200 animate-fade-in-right hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center animate-pulse-gentle">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Core Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 rounded-lg text-sm font-medium border border-blue-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:scale-105 transition-all duration-200 animate-fade-in cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages Section */}
            <section className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200 animate-fade-in-right hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center animate-pulse-gentle">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Languages</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 hover:scale-105 transition-all duration-200 animate-slide-in-right"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <span className="font-medium text-gray-800">{lang.lang}</span>
                    <span className="text-sm bg-gray-200 px-2 py-1 rounded text-gray-700">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Achievements */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 border border-blue-200 animate-fade-in-right hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center animate-pulse-gentle">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Key Strengths</h3>
              </div>
              <div className="space-y-3">
                {[
                  "10+ Years Cross-Cultural Experience",
                  "Import/Export Compliance Expert",
                  "Financial Systems Implementation",
                  "Team Leadership & Development"
                ].map((strength, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 animate-slide-in-left"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{strength}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Neelakanthi Suramini. Professional Accounting & Finance Services.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Committed to excellence in financial management and logistics operations.
          </p>
        </div>
      </footer>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceGentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulseGentle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-bounce-gentle {
          animation: bounceGentle 2s infinite;
        }

        .animate-pulse-gentle {
          animation: pulseGentle 2s infinite;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
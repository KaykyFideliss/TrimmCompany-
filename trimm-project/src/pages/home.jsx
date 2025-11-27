import React from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, BarChart } from 'lucide-react';





const home = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-20 shadow-2xl mb-12">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-600 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-600 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm text-blue-400 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            New Features Available
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Build faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Trimm</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            The ultimate platform to streamline your workflow. Create, manage, and scale your projects with an interface designed for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all border border-gray-700">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { label: 'Active Users', value: '50k+', color: 'text-blue-600' },
          { label: 'Projects Created', value: '120k+', color: 'text-purple-600' },
          { label: 'Uptime', value: '99.9%', color: 'text-green-600' },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
            <h3 className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</h3>
            <p className="text-gray-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Trimm?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide the tools you need to succeed in a competitive landscape. Powerful, flexible, and easy to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap size={32} className="text-amber-500" />,
              title: 'Lightning Fast',
              desc: 'Optimized for speed and performance, ensuring your projects load instantly.'
            },
            {
              icon: <Shield size={32} className="text-emerald-500" />,
              title: 'Secure by Default',
              desc: 'Enterprise-grade security features built-in to protect your data and users.'
            },
            {
              icon: <BarChart size={32} className="text-indigo-500" />,
              title: 'Real-time Analytics',
              desc: 'Gain insights with our powerful dashboard and tracking tools.'
            }
          ].map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="mb-6 p-4 bg-gray-50 rounded-xl inline-block group-hover:bg-white group-hover:shadow-md transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your workflow?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of developers who are building the future with Trimm today.
          </p>
          <button className="px-10 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
            Start Free Trial
          </button>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default Home;

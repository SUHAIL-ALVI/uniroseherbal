import React from "react";
import {
  Github,
  Youtube,
  Twitch,
  Phone,
  MapPin,
  Clock,
  Youtube as MessageCircle,
  Star,
  Shield,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white">
      {/* Top Banner */}
      <div className="bg-green-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="font-medium">
            Ready to get started? Join thousands of satisfied customers!
          </p>
          <button className="mt-4 md:mt-0 bg-white text-green-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info & Mission */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <h2 className="text-2xl font-bold mb-2">CompanyName</h2>
              <p>Empowering innovation through digital excellence</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-white" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-white" />
                <span>123 Innovation Drive, Tech City</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-white" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Solutions & Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Solutions</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Products</h4>
                <ul className="space-y-2">
                  {["Enterprise", "Startup", "Business", "Personal"].map(
                    (item) => (
                      <li key={item}>
                        <a href="#" className="hover:underline">
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Services</h4>
                <ul className="space-y-2">
                  {["Consulting", "Integration", "Support", "Training"].map(
                    (item) => (
                      <li key={item}>
                        <a href="#" className="hover:underline">
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Resources & Community */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Resources</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Learn</h4>
                <ul className="space-y-2">
                  {["Documentation", "Tutorials", "Blog", "Case Studies"].map(
                    (item) => (
                      <li key={item}>
                        <a href="#" className="hover:underline">
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Community</h4>
                <ul className="space-y-2">
                  {["Forums", "Events", "Discord", "GitHub"].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter & Stats */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Stay Connected</h3>
              <p className="text-sm">
                Get the latest updates and news directly to your inbox.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 px-4 py-2 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Company Stats */}
            <div className="pt-6 border-t border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Star className="text-white" size={20} />
                  <div>
                    <p className="text-2xl font-bold">99%</p>
                    <p className="text-sm">Satisfaction</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="text-white" size={20} />
                  <div>
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6">
              {[
                { Icon: Github, label: "GitHub" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Twitch, label: "Twitch" },
                { Icon: MessageCircle, label: "Blog" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-center">
              © 2025 Unirose Herbals. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex justify-center md:justify-end space-x-6 text-sm">
              <a href="/PrivacyPolicy" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Terms
              </a>
              <a href="#" className="hover:underline">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

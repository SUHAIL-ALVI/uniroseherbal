"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Permanent_Marker } from "next/font/google";
const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  content: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon: Icon,
  title,
  content,
}) => (
  <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 border border-white/20">
    <div className="rounded-full bg-blue-500/10 p-3">
      <Icon className="h-6 w-6 text-gray-600" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-1">{content}</p>
    </div>
  </div>
);

const ContactUs: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-white-100 to-pink-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1
            className={`${permanent_marker.className} text-5xl font-bold text-gray-900 mb-5`}
          >
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Have questions? We are love to hear from you. Send us a message and
            we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-6">
              <ContactInfo
                icon={MapPin}
                title="Our Location"
                content="123 Business Avenue, Tech District, CA 94123"
              />
              <ContactInfo
                icon={Phone}
                title="Phone Number"
                content="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={Mail}
                title="Email Address"
                content="contact@company.com"
              />
              <ContactInfo
                icon={Clock}
                title="Business Hours"
                content="Mon-Fri: 9:00 AM - 6:00 PM"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="backdrop-blur-sm bg-slate-200/50 shadow-xl border-white/20">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we &apos;ll get back to you
                  shortly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <Input
                        name="name"
                        placeholder="Enter you name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="unirose@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      placeholder="How can we help?"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-600 to-pink-300 hover:from-blue-700 hover:to-green-700 text-white py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>

                {submitted && (
                  <Alert className="mt-6 bg-green-50 border-green-100 text-green-700">
                    <AlertDescription className="flex items-center">
                      Thank you for your message! We&apos;ll get back to you
                      soon.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

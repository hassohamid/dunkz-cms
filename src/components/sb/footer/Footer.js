"use client";
import { storyblokEditable } from "@storyblok/react";
import FooterColumn from "./FooterColumn";

export default function Footer({ blok }) {
  return (
    <footer {...storyblokEditable(blok)} className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {blok.newsletter_title || "Sign up for our newsletter"}
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              {blok.newsletter_description ||
                "Be the first to know about our special offers, new product launches, and events"}
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-r-md hover:bg-gray-800 transition-colors">
                Sign Up
              </button>
            </div>
          </div>

          {/* Footer Columns */}
          <div className="lg:col-span-3">
            <div className="grid gap-8 grid-cols-2 sm:grid-cols-3">
              {blok.columns?.map((col) => (
                <FooterColumn blok={col} key={col._uid} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

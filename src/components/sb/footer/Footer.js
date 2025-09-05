"use client";
import { storyblokEditable } from "@storyblok/react";
import FooterColumn from "./FooterColumn";
import { Mail } from "lucide-react";

export default function Footer({ blok }) {
  return (
    <footer {...storyblokEditable(blok)} className="bg-neutral-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Newsletter Section - Only show if enabled */}
          {blok.show_newsletter && (
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">
                {blok.newsletter_title}
              </h2>
              <p className="text-gray-400 mb-6 max-w-md text-balance">
                {blok.newsletter_description}
              </p>

              <div className="mt-6">
                <div className="flex items-center gap-x-3">
                  <div className="relative">
                    <Mail className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-3 py-2 text-gray-200 bg-white outline-none border border-gray-700 focus:border-gray-500 shadow-sm rounded-lg placeholder-gray-400"
                    />
                  </div>
                  <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-lg shadow">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Footer Columns */}
          <div
            className={blok.show_newsletter ? "lg:col-span-3" : "lg:col-span-5"}
          >
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

"use client";

import React from "react";
import Link from "next/link";
import { Star, ExternalLink, MessageCircleHeart, Trophy } from "lucide-react";

// TODO (owner): replace with your real Google Business review link
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=Magic+Prints+For+You+Arlington+TX";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i <= rating ? "fill-[#ffcc00] text-[#ffcc00]" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d90082]">
            Customer Reviews
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#41137e] sm:text-5xl">
            Loved by Hosts Across DFW
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <article className="flex flex-col items-center rounded-[28px] border border-purple-100 bg-[#FDF9FF] p-10 text-center shadow-[0_18px_50px_rgba(65,19,126,0.07)]">
            <p className="text-6xl font-black tracking-tight text-[#41137e]">
              4.9
            </p>
            <div className="mt-3">
              <Stars rating={5} />
            </div>
            <p className="mt-4 text-base font-bold text-gray-600">
              4.9 stars from 70 Google reviews
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Real customers, real events — quinceañeras, weddings, birthdays
              and corporate celebrations across Dallas–Fort Worth.
            </p>
          </article>

          <article className="flex flex-col items-center rounded-[28px] border border-purple-100 bg-[#FDF9FF] p-10 text-center shadow-[0_18px_50px_rgba(65,19,126,0.07)]">
            <Trophy className="h-12 w-12 text-[#d90082]" />
            <p className="mt-4 text-2xl font-black leading-snug tracking-tight text-[#41137e]">
              #1 Balloon Store in Arlington 2026
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-gray-400">
              BusinessRate
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Ranked first among Arlington balloon stores by BusinessRate for
              2026, based on our public Google reviews.
            </p>
          </article>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Had a great experience with us? We would love to hear about it.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff2a70] to-[#d90082] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircleHeart className="h-5 w-5" />
            Leave a Review on Google
            <ExternalLink className="h-4 w-4" />
          </a>
          <p className="mt-4">
            <Link
              href="/quote"
              className="text-sm font-bold text-[#d90082] underline underline-offset-4 hover:text-[#41137e]"
            >
              Or start your own order here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

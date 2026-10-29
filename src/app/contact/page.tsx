import React from "react";
import Link from "next/link";
import { MapPin, Mail, Instagram, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Magic Prints For You — Arlington, TX",
  description:
    "Contact Magic Prints For You in Arlington, TX for custom photo boards, backdrops, cutouts, seating charts and floor wraps. Visit our store, email us, or request a quote online.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <section className="relative bg-[#0A0212] px-6 py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#41137e]/40 via-transparent to-[#d90082]/30" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#ffcc00]">
            <MapPin className="h-4 w-4" /> Arlington, Texas
          </p>
          <h1 className="magic-headline mt-6 text-4xl! sm:text-5xl! md:text-6xl!">
            Contact Magic Prints For You
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Questions about a photo board, backdrop, cutout or floor wrap?
            Reach out — or start your quote online and we will follow up by
            email with the exact details.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff2a70] to-[#d90082] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-105"
            >
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-white/10"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-[28px] border border-purple-100 bg-white p-8 shadow-[0_18px_50px_rgba(65,19,126,0.07)]">
            <MapPin className="h-8 w-8 text-[#d90082]" />
            <h2 className="mt-4 text-xl font-black text-[#41137e]">
              Visit Our Store
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              Magic Prints For You
              <br />
              1600 Industrial Ct
              <br />
              Arlington, TX 76011
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Pickup available at our Arlington store. Local delivery in the
              Dallas–Fort Worth area and nationwide shipping on every product.
            </p>
          </article>

          <article className="rounded-[28px] border border-purple-100 bg-white p-8 shadow-[0_18px_50px_rgba(65,19,126,0.07)]">
            <Mail className="h-8 w-8 text-[#d90082]" />
            <h2 className="mt-4 text-xl font-black text-[#41137e]">
              Email &amp; Social
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              Email:{" "}
              <a
                href="mailto:info@magicprintsforyou.com"
                className="font-bold text-[#d90082] underline underline-offset-4 hover:text-[#41137e]"
              >
                info@magicprintsforyou.com
              </a>
            </p>
            <p className="mt-3 flex items-center gap-2 text-base text-gray-600">
              <Instagram className="h-5 w-5 text-[#d90082]" />
              <a
                href="https://www.instagram.com/magicprintsforyou"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#d90082] underline underline-offset-4 hover:text-[#41137e]"
              >
                @magicprintsforyou
              </a>
            </p>
            <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-gray-500">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#d90082]" />
              <span>
                Mon – Sat: 9:00 AM – 6:00 PM
                <br />
                Sunday: Scheduled Installations Only
              </span>
            </p>
          </article>
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-[28px] bg-[#FDF9FF] border border-purple-100 p-10 text-center">
          <h2 className="text-2xl font-black tracking-tight text-[#41137e]">
            Ready to start your order?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-gray-600">
            Send us your photo or design idea, the size you need and your event
            date. We confirm the exact quote by email before anything is
            printed.
          </p>
          <Link
            href="/quote"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff2a70] to-[#d90082] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-105"
          >
            Get My Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

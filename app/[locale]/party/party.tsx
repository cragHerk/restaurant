"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CONTACT_PHONE = "+48 536 265 668";

export default function Party({
  translations,
}: {
  translations: {
    title1: string;
    title2: string;
    description: string;
    description2: string;
  };
}) {
  return (
    <section className="relative bg-black text-g overflow-hidden">
      {/* Hero / title */}
      <div className="relative pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-g/10 blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative pt-[96px] pb-6 px-4 text-center"
        >
          <span className="block text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            {translations.title1}
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            {translations.title2}
          </span>
        </motion.h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-3 pb-10">
        {/* Desktop: 3 kafle w jednym rzędzie; mniejsze ekrany: dopasowanie do 2 kolumn */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)] p-4"
          >
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="font-serif text-lg md:text-xl text-white/90 text-balance">
                  {translations.description}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/party/1.jpg"
                  width={600}
                  height={800}
                  alt="event"
                  className="h-full w-full object-cover aspect-[4/5] transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)] p-4"
          >
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/party/2.jpg"
                  width={600}
                  height={800}
                  alt="event"
                  className="h-full w-full object-cover aspect-[4/5] transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="font-serif text-lg md:text-xl text-white/90 text-balance">
                  {translations.description2}
                </p>
              </div>
            </div>
          </motion.article>

          {/* Card 3 */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)] p-4"
          >
            {/* Na mobile: tylko kafelek WhatsApp z ikoną i numerem */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center sm:hidden">
                <a
                  href="https://wa.me/48536265668"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex flex-col items-center justify-center gap-3"
                >
                  <span className="text-white font-bold text-sm tracking-wide">
                    {CONTACT_PHONE}
                  </span>
                </a>
              </div>

              <div className="hidden sm:block relative overflow-hidden rounded-2xl">
                <Image
                  src="/party/3.jpg"
                  width={600}
                  height={800}
                  alt="event"
                  className="h-full w-full object-cover aspect-[4/5] transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              {/* Chmurka z numerem pod obrazkiem (desktop) */}
              <div className="hidden sm:block">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <span className="block text-white font-bold text-base tracking-wide text-center">
                    {CONTACT_PHONE}
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

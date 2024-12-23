"use client";

import React from "react";
import { productsData } from "../datas/productsData";

export default function Gallery() {
  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      <h1 className="uppercase text-6xl font-black text-center text-white mb-8">
        Filter <span className="text-pink-500">galery</span>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
                
            </div>
          ))}
        </div>
      </h1>
    </section>
  );
}

"use client";

import React from "react";
import { productsData } from "../datas/productsData";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      <h1 className="uppercase text-6xl font-black text-center text-white mb-8">
        Filter <span className="text-pink-500">galery</span>{" "}
      </h1>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {productsData.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
          >
            <img
              className="w-full h-64 object-cover rounded-t-2xl"
              src={product.img}
              alt={product.title}
            />

            <div className="p-6">
              <h6 className="text-xl font-bold text-gray-900 mb-2">
                {product.title}
              </h6>

              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, id!
              </p>
              <button className="text-pink-500 text-sm font-medium hover:text-pink-600">
                En savoir plus
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

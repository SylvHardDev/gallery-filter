// "use client";

import { useState } from "react";
import { productsData } from "../datas/productsData";
import Image from "next/image";

// type ImageProps = {
//   img: string;
//   alt: string;
//   category: string;
//   title: string;
//   description: string;
//   width: number;
//   height: number;
// };

// const productsData = [
//   {
//     category: "jeans",
//     img: "/public/imgs/jean-01.jpg",
//     title: "Nom de l'article",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, explicabo?",
//   },
//   {
//     category: "tshirt",
//     img: "/public/imgs/tshirt-01.jpg",
//     title: "Nom de l'article",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, explicabo?",
//   },
//   {
//     category: "chaussures",
//     img: "/public/imgs/shoes-01.jpg",
//     title: "Nom de l'article",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, explicabo?",
//   },
//   {
//     category: "jeans",
//     img: "/public/imgs/jean-02.jpg",
//     title: "Nom de l'article",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, explicabo?",
//   },
//   {
//     category: "tshirt",
//     img: "./imgs/tshirt-02.jpg",
//     title: "Nom de l'article",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, explicabo?",
//   },
//   {
//     category: "chaussures",
//     img: "./imgs/shoes-02.jpg",
//     title: "Nom de l'article",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, explicabo?",
//   },
//   {
//     category: "jeans",
//     img: "/public/imgs/jean-03.jpg",
//     title: "Nom de l'article",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, explicabo?",
//   },
//   {
//     category: "tshirt",
//     img: "/public/imgs/tshirt-03.jpg",
//     title: "Nom de l'article",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, explicabo?",
//   },
//   {
//     category: "chaussures",
//     img: "/public/imgs/shoes-03.jpg",
//     title: "Nom de l'article",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, explicabo?",
//   },
// ];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("tous");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      <h1 className="uppercase text-6xl font-black text-center text-white mb-8">
        Filter <span className="text-pink-500">galery</span>
      </h1>

      <div className="mb-12">
        <div className="flex justify-center max-w-[365px] mx-auto border-b border-pink-500">
          {["tous", "jeans", "tshirt", "chaussures"].map((filter) => (
            <button
              key={filter}
              className={`px-6 py-2 font-medium text-sm ${
                activeFilter === filter
                  ? "text-white bg-pink-500 hover:text-pink-500"
                  : "transition-all"
              }`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter === "tous"
                ? "tous"
                : filter.charAt(0).toLocaleUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {productsData
          .filter(
            (product) =>
              activeFilter === "tous" || product.category === activeFilter
          )
          .map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              {/* <img
                className="w-full h-64 object-cover rounded-t-2xl"
                src={product.img}
                alt={product.title}
              /> */}
              <Image
              className="w-full h-64 object-cover rounded-t-2xl"
              src={product.img}
              alt={product.title}
              width={600}
              height={600}
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

import React from "react";
import DataImage from "../data";

const Hero = () => {
  return (
    <section id="beranda" className="pt-10">
      <div className="hero mt-16 py-10 grid md:grid-cols-2 items-center pt-4 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Thumbnail"
              className="w-10 rounded-md"
            />
            <q>Detail adalah kunci kualitas dan antarmuka hebat. 💻🧪</q>
          </div>

          <h1 className="text-4xl/tight font-bold mb-4">
            Hi, Saya Ayu Wulandari
          </h1>

          <p className="text-base/loose mb-6 opacity-70">
            Saya memiliki pengalaman lebih dari 4 tahun dalam bidang Frontend
            Development dan Software Quality Assurance. Keahlian saya mencakup
            pembuatan website yang responsif, user-friendly, serta melakukan
            pengujian perangkat lunak secara menyeluruh untuk memastikan
            kualitas aplikasi tetap optimal.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="text-white px-4 py-2 rounded-md border border-violet-600 bg-violet-600 hover:bg-transparent transition-all"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#project"
              className="text-white px-4 py-2 rounded-md border border-violet-600 bg-transparent hover:bg-violet-600 transition-all"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        {/* Gambar di sebelah kanan */}
        <div className="flex justify-center md:justify-end">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[400px] rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

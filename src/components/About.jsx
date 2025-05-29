import React from "react";
import DataImage from "../data";

const About = () => {
  return (
    <section id="tentang" className="pt-16">
      <div className="tentang mt-16 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg ">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Ayu Wulandari, seorang Frontend Developer dan
            Software Quality Assurance. Saya memiliki ketertarikan dalam
            membangun antarmuka pengguna yang responsif dan ramah pengguna,
            sekaligus memastikan kualitas perangkat lunak melalui proses
            pengujian yang sistematis dan menyeluruh. Kombinasi keahlian ini
            membantu saya dalam mengembangkan produk digital yang tidak hanya
            menarik secara visual tetapi juga stabil dan andal saat digunakan.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  20<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  3<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

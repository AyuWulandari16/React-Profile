import React from "react";
import DataImage from "../data";

const About = () => {
  return (
    <div className="tentang mt-32 py-10">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg ">
        <img
          src={DataImage.HeroImage}
          alt="Image"
          className="w-12 rounded-md mb-10 sm:hidden"
        />
        <p className="text-base/loose mb-10">
          Hi, perkenalkan saya Ayu Wulandari, seorang Full Stack Web Developer
          dan Designer untuk UI/UX Design maupun Product Digital, Saya percaya
          bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga
          setiap proyek yang saya kembangkan tidak hanya terlihat menarik tetapi
          juga memberikan pengalaman pengguna yang optimal.
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
                45<span className="text-violet-500">+</span>
              </h1>
              <p>Proyek Selesai</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                4<span className="text-violet-500">+</span>
              </h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

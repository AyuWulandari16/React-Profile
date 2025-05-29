import React from "react";
import { listProyek } from "../data";

const Project = () => {
  return (
    <section id="project" className="pt-6">
      <div className="project mt-16 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">
          Beberapa proyek yang telah saya buat.
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-zinc-800 rounded-md flex flex-col h-full"
            >
              <img src={project.gambar} alt="Project Image" loading="lazy" />
              <div className="flex flex-col flex-grow">
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <p className="text-base/loose mb-4">{project.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-auto pt-6 text-center">
                  <a
                    href="#"
                    className="text-white px-4 py-2 block rounded-md border border-violet-600 bg-violet-600 hover:bg-transparent transition-all"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

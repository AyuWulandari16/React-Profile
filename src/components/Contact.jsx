import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pt-6">
      <div className="contact mt-16 sm:p-10 p-0">
        <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">
          Mari terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/ayuwwee16@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full cursor-pointer text-white px-4 py-2 rounded-md border border-violet-600 bg-violet-600 hover:bg-transparent transition-all"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const Home = () => {
  return (
    <section className="bg-white ">
      <div className="container mx-auto py-16">
        <div className="flex flex-col justify-center items-center space-y-3">
          <p className="w-[400px] uppercase text-center rounded-full font-semibold text-black bg-slate-50 border-1 border-black/10 px-4 py-2">
            welcome to our spell fixer
          </p>
          <h1 className="text-2xl text-center md:text-4xl text-black font-bold py-6">
            Spellcheck for Bengali & English <br /> Smart. Fast. Accurate
            <span className="text-green-500">.</span>
          </h1>
          <p className="text-center text-slate-500 text-lg md:text-xl font-medium w-[800px]">
          Type with confidence! ShuddhoSpell helps you write flawless Bengali and English by correcting spelling and grammar instantly. Simple, smart, and super fast!
          </p>
          <button className="bg-black text-white px-12 py-2 rounded-full mt-5 cursor-pointer">Explore More...</button>
        </div>
      </div>
    </section>
  );
};

export default Home;

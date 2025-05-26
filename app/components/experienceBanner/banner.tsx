"use client";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="mx-5 flex flex-col lg:flex-row items-center justify-between px-6 py-12 shadow-lg hover:shadow-xl rounded-2xl">
      
    
      <div className="w-full lg:w-1/2 flex justify-center lg:ml-10">
        <Image 
          src="/banner.png" 
          alt="Trabajo remoto" 
          width={400} 
          height={400} 
          priority 
          className="max-w-full h-auto"
        />
      </div>

      
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mt-6 lg:mt-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0A2342]">
          ¿Te gustaría ganar experiencia?
        </h2>
        <p className="text-md md:text-lg text-[#2196F3]">
          Descubre todos los proyectos disponibles para que puedas desarrollar tu experiencia
          laboral y así trabajar en la empresa que deseas y alcanzar tus objetivos profesionales.
        </p>
        <Link href="/projects">
          <button className="bg-[#D3EAFD] text-[#0A2342] cursor-pointer px-6 py-3 rounded-md hover:bg-[#1E88E5] hover:text-white transition">
            Ver más...
          </button>
        </Link>
      </div>
    </section>
  );
}

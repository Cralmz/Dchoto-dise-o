'use client';

import React from 'react';

export default function SignUpForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-blue-100 to-white">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex w-[900px] max-w-full">
        {/* Izquierda */}
        <div className="w-1/2 flex flex-col justify-center items-center p-4">
          <h2 className="text-3xl font-bold mb-2">CREATE ACCOUNT</h2>
          <p className="mb-4 text-sm text-gray-600">
            Already have an account?{' '}
            <a href="#" className="text-blue-600 font-medium">Log in</a>
          </p>
          <img src="/imagen.png" alt="Imagen de fondo" className="w-full h-full" />
          <p className="text-sm text-gray-400 mt-6">© Dchoto</p>
        </div>

        { }
        {}
        <div className="w-1/2 flex flex-col space-y-4">
        <label className="text-sm mb-1 block">Last names</label>
          <div className="flex gap-4">
            <input type="text" placeholder="" className="input" />
            <input type="text" placeholder="" className="input" />
          </div>
            <label className="text-sm mb-1 block">Names</label>
            <div className="flex gap-4">
              <input type="text" placeholder="" className="input" />
              <input type="text" placeholder="" className="input" />
            </div>
          <div>
            <label className="text-sm mb-1 block">Birth Date</label>
            <div className="flex gap-2">
              <input type="text" placeholder="Month" className="input" />
              <input type="text" placeholder="Day" className="input" />
              <input type="text" placeholder="Year" className="input" />
            </div>
          </div>
            <label className="text-sm mb-1 block">DUI</label>
              <input type="text" placeholder="" className="input" />
            <label className="text-sm mb-1 block">E-mail</label>
          <input type="email" placeholder="" className="input" />
          <label className="text-sm mb-1 block">Password</label>
          <input type="password" placeholder="" className="input" />
          <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Continue</button>
        </div>
      </div>
    </div>
  );
}

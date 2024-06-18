'use client';

import { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';


export default function Page() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  useEffect(() => {
    setTimeout(() => {
      flipCard();
    }, 1000);
  });

  return (
    <main className="flex min-h-screen flex-col bg-[#F0EAF4]">
      <header className="flex h-20 w-full items-center justify-between bg-white px-24 md:h-24">
        <div className="text-black text-lg font-bold">PIXLET.</div>
        <nav className="flex space-x-4">
          <a href="#about" className="text-[#7A7A7A] text-lg font-semibold px-2">About</a>
          <a href="#contact" className="text-[#7A7A7A] text-lg font-semibold px-2">Contact</a>
          <a href="#donate" className="text-[#7A7A7A] text-lg font-semibold px-2">Donate</a>
        </nav>
      </header>
      <div className="flex grow flex-col items-center justify-center gap-4 mt-10">
        <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
          <div>
            <img src="/flip-watermelon.svg" alt="flipping flower animation" className="w-20 h-20" />
          </div>
          <div>
            <img src="/flip-flower.svg" alt="flipping watermelon animation" className="w-20 h-20" />
          </div>
        </ReactCardFlip>
        <p className="font-semibold text-2xl text-gray-800 md:text-3xl md:leading-normal text-center">
          Get 5 chances to guess why today matters
        </p>
        <div className="flex space-x-4">
          {/* tktk - bolder should be modulized */}
          <button className="bg-transparent border border-[#32517D] text-[#32517D] font-medium px-6 py-2 rounded-full">
            How to play
          </button>
          <button className="bg-[#32517D] text-white font-medium px-6 py-2 rounded-full">
            Play
          </button>
        </div>
      </div>
    </main>
  );
}
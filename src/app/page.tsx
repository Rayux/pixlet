import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F0EAF4]">
      <header className="flex h-20 w-full items-center justify-between bg-white px-4 md:h-24">
        <div className="text-black text-2xl font-bold">Pixlet</div>
        <nav className="flex space-x-4">
          <a href="#about" className="text-black text-lg">About</a>
          <a href="#contact" className="text-black text-lg">Contact</a>
          <a href="#donate" className="text-black text-lg">Donate</a>
        </nav>
      </header>
      <div className="flex grow flex-col items-center justify-center gap-4 mt-10">
        <img src="" alt="Pixel Art" className="w-20 h-20" />
        <p className="text-2xl text-gray-800 md:text-3xl md:leading-normal text-center">
          <strong>Get 5 chances to guess the year of ____</strong>
        </p>
        <div className="flex space-x-4">
          <button className="bg-transparent border border-[#32517D] text-[#32517D] px-6 py-2 rounded-full">
            How to play
          </button>
          <button className="bg-[#32517D] text-white px-6 py-2 rounded-full">
            Play
          </button>
        </div>
      </div>
    </main>
  );
}

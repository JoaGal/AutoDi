import Image from "next/image";
import Link from "next/link";
import Im from "../assets/Joaquin.jpeg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import briefcase from "../assets/briefcase.svg";

export default function contact() {
  return (
    <>
      <div className="bg-[url(./assets/wave.svg)] bg-no-repeat bg-cover bg-bottom md:h-60 h-20 w-full" />
      <div className="flex justify-center items-center m-2 animate__animated animate__bounceInDown">
        <div className=" md:p-10 text-center p-5 mt-10 text-stone-50 bg-lime-500 shadow-lg rounded-lg drop-shadow-lg animate__animated animate__bounceInDown">
          <h1 className="md:text-4xl text-3xl text-lime-500 rounded-lg bg-stone-50 font-bold shadow-lg drop-shadow-lg p-2">Joaquin Galdeano</h1>
          <div className="p-2 bg-stone-50 mt-5 rounded-lg shadow-lg drop-shadow-lg">
          <Image src={Im} alt="Joaquin" className="w-auto md:w-96" />
          </div>
          <div className="flex justify-between p-2">
            <Link href="https://www.linkedin.com/in/joaquin-galdeano-174281209/" className="bg-stone-50 mt-5 rounded-lg shadow-lg drop-shadow-lg">
              <Image src={linkedin} alt="linkedin" className="w-20 md:w-24" />
            </Link>
            <Link href="https://github.com/JoaGal" className="bg-stone-50 mt-5 rounded-lg shadow-lg drop-shadow-lg">
              <Image src={github} alt="linkedin" className="w-20 md:w-24" />
            </Link>
            <Link href="https://briefcase-joagal.vercel.app/" className="bg-stone-50 mt-5 rounded-lg shadow-lg drop-shadow-lg">
              <Image src={briefcase} alt="linkedin" className="w-20 md:w-24" />
            </Link>
          </div>
          <p className="text-stone-50 text-lg font-bold mt-2 md:mt-5">React Front-end Developer</p>
        </div>
      </div>
    </>
  );
}

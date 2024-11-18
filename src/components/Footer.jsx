import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 w-full h-40 flex flex-col items-center justify-center gap-10">
      <h1 className="font-semibold text-xl">@2024 - Direitos Reservados</h1>
      <div className="flex w-1/2 self-center justify-center gap-8">
      <FaInstagram className="h-9 w-9 hover:text-blue-200"/>
      <FaFacebook className="h-9 w-9 hover:text-blue-200"/>
      <FaLinkedin className="h-9 w-9 hover:text-blue-200"/>
      <MdEmail className="h-9 w-9 hover:text-blue-200"/>
      </div>
      
    </footer>
  );
}

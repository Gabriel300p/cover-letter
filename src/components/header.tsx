import { FC } from "react";
import {
  PiEnvelopeSimpleFill,
  PiGlobeSimpleFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
  return (
    <header className="bg-emerald-700 p-6 md:p-10 rounded-xl flex flex-col md:flex-row   justify-between items-start md:items-center gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold text-white">Gabriel Andrade</h2>
        <h1 className="text-xl text-gray-100 font-normal">Design Engineer</h1>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <PiGlobeSimpleFill size={18} className="text-white" />
          <a
            href="https://www.gabrielandrade.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            gabrielandrade.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <PiEnvelopeSimpleFill size={18} className="text-white" />
          <a
            href="mailto:gabrielandrade.tech@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            gabrielandrade.tech@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <PiLinkedinLogoFill size={18} className="text-white" />
          <a
            href="https://www.linkedin.com/in/gabrieltech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            linkedin.com/in/gabrieltech/
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="px-6 md:px-10 py-10 md:py-14 flex">
        <div className="relative border-s border-gray-100 ">
          <div className="flex-1 ms-4">
            <div className="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -start-1.5 border-4 border-gray-500/40 " />
            <span>March 28, 2024</span>
            <br />
            <br />

            <span>+55 11 96580-0803</span>
            <br />
            <span>São Paulo - Brazil</span>
          </div>
          <div className="py-8 max-w-5xl ms-4">
            <div className="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -start-1.5 border-4 border-gray-500/40 mt-2" />
            <h3 className="font-bold md:text-lg text-gray-700 pb-3">
              Dear, Adam Wathan and Tailwind Labs crew
            </h3>
            <p>
              I am excited to apply for the announced Design Engineer position.
              My name is Gabriel, a technology professional from São Paulo with
              5 years of experience in the technology field. My passion for
              design and technical coding skills align perfectly with Tailwind
              Labs’ mission to help people build interfaces that inspire them.
            </p>
            <br />
            <p>
              I have experience with all the technologies mentioned in the job
              posting, including React, TypeScript, Tailwind CSS, animations,
              and accessibility. I also hold UX certifications and prioritize
              user research to ensure functional and enjoyable projects. For
              instance, during my tenure at Acesso Energia, I spearheaded the
              migration from Vanilla CSS to Tailwind CSS, resulting in a notable
              improvement in flexibility and speed in screen development.
            </p>
            <br />
            <p>
              In my portfolio, I showcase checkmidia.com, a website I designed
              and developed to support small entrepreneurs digitally, all
              crafted with Tailwind CSS. Additionally, I`m initiating Elemento
              UI, an open-source design system offering components in Figma and
              Tailwind CSS, inspired by shadcn.ui.
            </p>
            <br />
            <p>
              I am very excited about the opportunity to contribute to Tailwind
              Labs. I`m eager to expand its potential, create outstanding
              components, and collaborate with the team at Tailwind UI. This
              opportunity perfectly combines my passion for design and technical
              expertise, and I`m prepared to tackle these challenges head-on.
            </p>
            <br />
            <p>
              Thank you for considering my application. I look forward to
              discussing my qualifications and potential contributions further.
            </p>
          </div>
          <div className="flex-1 ms-4 mt-4">
            <div className="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -start-1.5 border-4 border-gray-500/40 " />
            <span className="font-bold">Sincerely,</span>
            <br />
            <span className="mt-4">Gabriel Andrade</span>
          </div>
        </div>
      </main>
    </div>
  );
}

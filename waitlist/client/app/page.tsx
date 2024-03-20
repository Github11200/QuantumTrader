import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InfoCard } from "./card";
import ContactBox from "./contact";

export default function Home() {
  return (
    <>
        <div className="min-h-screen flex items-center overflow-x-hidden">
            <div className="flex flex-col px-6 gap-6 mx-auto">
                <div className="bg-gradient-to-b from-[#40C9FF] to-[#E81CFF] blur-[10rem] size-[50%] rounded-full absolute bottom-[60vh] left-[-30vw]"></div>
                <div className="bg-gradient-to-b from-[#0061FF] to-[#60EFFF] blur-[10rem] size-[50%] rounded-full absolute bottom-[0vh] left-[85vw]"></div>
                <h1 className="text-7xl md:text-8xl lg:text-9xl text-center bg-red text-wrap">Quantum Trader</h1>
                <h3 className="text-center mb-8 z-10">Revolutionizing the way people trade stocks with AIML powered prediction Software.</h3>
                <div className="flex flex-col gap-3 sm:flex-row lg:w-3/5 lg:mx-auto xl:w-2/3 xl:mx-auto z-10">
                    <Input type="email" placeholder="Email" className="" />
                    <Button className="">Join the waitlist</Button>
                </div>
            </div>
        </div>
<<<<<<< HEAD
        <div className="grid grid-cols-[auto] w-[60%] mx-auto min-w-[60%] px-6 justify-items-center gap-y-14 lg:grid-cols-[auto_auto] lg:w-[100%] lg:gap-x-5 lg:px-20 lg:gap-y-20 xl:gap-x-10 xl:gap-y-40 xl:px-40">
                <InfoCard cardTitle="HELP" cardContent="Our prediction model utilizes years of data while accounting other factors to provide high accuracy trading." cardImage="/placeholder.jpeg" />
                <InfoCard cardTitle="HELP" cardContent="Our prediction model supports a wide range of stocks including cryptocurrencies like bitcoin  and ethreum" cardImage="/placeholder.jpeg" />
                <InfoCard cardTitle="HELP" cardContent=" " cardImage="/placeholder.jpeg" />
                <InfoCard cardTitle="HELP" cardContent="Alr look. I'ma make this real simple. We offer the best AI stock prediction you'll ever find, and guess what, you just found it! With over 110% accuracy (we aren't gonna get sued) we offer the best service ever (placeholder text :))" cardImage="/placeholder.jpeg" />
            </div>
            <div>
                <h2 className="text-[5vw] text-center mt-[15vh]">Got Questions?</h2>
                <ContactBox link="https://discord.gg/z6aXsrqYP9" text="Discord" icon="/EllipseBlue.svg" />
            </div>
=======
        <div className="grid grid-cols-[auto_auto] w-[80%] mx-auto justify-items-center gap-y-[15vh]">
            <InfoCard cardTitle="High Accuracy" cardContent="Our prediction model utilizes years of data while accounting other factors to provide high accuracy trading." cardImage="/placeholder.jpeg" />
            <InfoCard cardTitle="Crypto Supported" cardContent="Our software offers a wide range trading options to choose from including bitcoin and ethreum" cardImage="/placeholder.jpeg" />
            <InfoCard cardTitle="Low Risk" cardContent="Our prediction model has built in safety measures to prevent any type of financial loss." cardImage="/placeholder.jpeg" />
            <InfoCard cardTitle="Easy to use" cardContent="Our Software is precisely designed to provide a easy environment for anyone with no experience needed in stock/crypto trading." cardImage="/placeholder.jpeg" />
        </div>
        <div>
            <h2 className="text-[5vw] text-center mt-[15vh]">Contact Us</h2>
        </div>
>>>>>>> d5915e65825d54171fc63dd5e75f99f398780329
        <div className="bg-gradient-to-r from-[#FF1B6B] to-[#45CAFF] blur-[10rem] size-[50%] rounded-full relative"></div>
    </>
  );
}

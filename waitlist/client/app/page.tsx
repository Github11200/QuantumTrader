import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InfoCard } from "./card";

export default function Home() {
  return (
    <div className="grid">
        <div className="flex justify-center min-w-max">
            <div className="bg-gradient-to-b from-[#40C9FF] to-[#E81CFF] blur-[10rem] size-[50%] rounded-full absolute bottom-[60vh] left-[-30vw]"></div>
            <div className="bg-gradient-to-b from-[#0061FF] to-[#60EFFF] blur-[10rem] size-[50%] rounded-full absolute bottom-[0vh] left-[85vw]"></div>
            <div className="flex flex-col justify-center text-center gap-12 align-middle min-h-[100vh] lexend">
                <h1 className="lexend text-[8vw] bg-gradient-to-r from-[#ff1b6b] to-[#45caff] text-transparent bg-clip-text [text-shadow: 20px 20px 80px #45caff] title">Quantum Trader</h1>
                <h3 className="text-[1.6vw] w-[60%] mx-auto">Revolutionizing the way people trade stocks with AI powered prediction algorithms.</h3>
                <div className="grid grid-cols-[72%_28%] grid-rows-1 w-[60%] mx-auto h-[6vh]">
                    <Input type="email" placeholder="Email" className="grow h-[100%]" />
                    <Button className="text-[100%] px-7 ml-6 h-[100%]">Join the waitlist</Button>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-[auto_auto] w-[80%] mx-auto justify-items-center gap-y-[15vh]">
            <InfoCard cardTitle="High Accuracy" cardContent="Our prediction model utilizes years of data while accounting other factors to provide high accuracy trading." cardImage="/placeholder.jpeg" />
            <InfoCard cardTitle="Crypto Supported" cardContent="Our software offers a wide range trading options to choose from including bitcoin and ethreum" cardImage="/placeholder.jpeg" />
            <InfoCard cardTitle="Low Risk" cardContent="Our prediction model has built in safety measures to prevent any type of financial loss." cardImage="/placeholder.jpeg" />
            <InfoCard cardTitle="Easy to use" cardContent="Our Software is precisely designed to provide a easy environment for anyone with no experience needed in stock/crypto trading." cardImage="/placeholder.jpeg" />
        </div>
        <div>
            <h2 className="text-[5vw] text-center mt-[15vh]">Contact Us</h2>
        </div>
        <div className="bg-gradient-to-r from-[#FF1B6B] to-[#45CAFF] blur-[10rem] size-[50%] rounded-full relative"></div>
    </div>
  );
}

import React from "react";
import dynamic from 'next/dynamic';
import ClientOnly from "./ClientOnly"; 

// This replaces the static import and disables Server-Side Rendering for Lottie
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

type Props = {
  animationPath: string;
  animationData?: any; // Made optional to fix your TS error
};

const GreetingLottie = ({ animationPath, animationData }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
    animationData: animationData,
  };

  return (
    <div onClick={() => null}>
      <ClientOnly>
        {/* @ts-ignore - The dynamic import can sometimes confuse the Lottie props types */}
        <Lottie options={defaultOptions} height={400} width={400} />
      </ClientOnly>
    </div>
  );
};

export default GreetingLottie;
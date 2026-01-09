import React from 'react';
import { PatientConfig, Gender } from '../types';
import smylumLogo from '@/smylum.png';

interface WelcomeScreenProps {
  config: PatientConfig;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ config }) => {
  const greeting = config.gender === Gender.FEMALE ? 'Bienvenida' : 'Bienvenido';

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 w-full h-full">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[1px] h-[30%] bg-gradient-to-b from-transparent via-yellow-600/40 to-transparent"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[1px] h-[30%] bg-gradient-to-b from-transparent via-yellow-600/40 to-transparent"></div>
        <div className="absolute top-[5%] right-[10%] w-[30%] h-[1px] bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent"></div>
      </div>

      {/* Logo Container */}
      <div className="mb-10 relative group">
        {/* Glow effect behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-yellow-500/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse"></div>
        
        {/* Logo Image - Natural shape, no circle crop */}
        <div className="relative z-10">
            <img 
                src={smylumLogo} 
                alt="Smylum Logo" 
                className="w-auto h-40 md:h-56 lg:h-64 object-contain drop-shadow-[0_0_25px_rgba(234,179,8,0.2)]"
            />
        </div>
      </div>

      {/* Text Container */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Welcome Text - Using Montserrat */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-yellow-100/90 font-light tracking-[0.2em] uppercase font-montserrat drop-shadow-md">
          {greeting}
        </h2>
        
        {/* Divider */}
        <div className="flex items-center justify-center gap-4 opacity-80">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-yellow-500"></div>
            <div className="w-2 h-2 rotate-45 border border-yellow-500 bg-yellow-900/50"></div>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-yellow-500"></div>
        </div>

        {/* Patient Name - Using Custom Font */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 font-patient drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] pb-4 px-4 leading-tight">
          {config.name}
        </h1>
      </div>
    </div>
  );
};

export default WelcomeScreen;
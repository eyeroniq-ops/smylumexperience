import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import WelcomeScreen from './components/WelcomeScreen';
import SettingsModal from './components/SettingsModal';
import { Gender, PatientConfig } from './types';

const App: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [config, setConfig] = useState<PatientConfig>({
    name: 'Nombre del Paciente',
    gender: Gender.MALE,
  });

  // Load from local storage on mount
  useEffect(() => {
    const savedConfig = localStorage.getItem('goldenPlayerConfig');
    if (savedConfig) {
      try {
        setConfig(JSON.parse(savedConfig));
      } catch (e) {
        console.error("Failed to parse config", e);
      }
    }
  }, []);

  // Save to local storage on change
  const handleSaveConfig = (newConfig: PatientConfig) => {
    setConfig(newConfig);
    localStorage.setItem('goldenPlayerConfig', JSON.stringify(newConfig));
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white selection:bg-yellow-500/50 selection:text-white">
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0 animate-gradient-gold opacity-90"></div>
      
      {/* Radial Gradient Overlay for vignette effect and depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>

      {/* Grain/Noise texture for premium feel (optional, using CSS pattern) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Settings Trigger Button */}
      <button 
        onClick={() => setIsSettingsOpen(true)}
        className="absolute top-6 right-6 z-40 p-3 rounded-full text-yellow-600/50 hover:text-yellow-400 hover:bg-yellow-900/20 transition-all duration-300 group"
        aria-label="Abrir configuración"
      >
        <Settings 
          size={32} 
          className="group-hover:rotate-90 transition-transform duration-700" 
        />
      </button>

      {/* Main Content */}
      <WelcomeScreen config={config} />

      {/* Settings Modal Overlay */}
      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentConfig={config}
        onSave={handleSaveConfig}
      />
    </div>
  );
};

export default App;
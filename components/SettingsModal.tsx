import React, { useState, useEffect } from 'react';
import { X, Save, User } from 'lucide-react';
import { Gender, PatientConfig } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentConfig: PatientConfig;
  onSave: (config: PatientConfig) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, currentConfig, onSave }) => {
  const [name, setName] = useState(currentConfig.name);
  const [gender, setGender] = useState<Gender>(currentConfig.gender);

  // Reset local state when modal opens with new config
  useEffect(() => {
    if (isOpen) {
      setName(currentConfig.name);
      setGender(currentConfig.gender);
    }
  }, [isOpen, currentConfig]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ name, gender });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300">
      <div className="glass-panel w-full max-w-md rounded-xl p-8 transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex justify-between items-center mb-6 border-b border-yellow-600/30 pb-4">
          <h2 className="text-2xl text-yellow-500 font-serif-display font-bold">Configuración</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-yellow-100/80 mb-2">
              Nombre del Paciente
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-yellow-600" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Juan Pérez"
                className="w-full pl-10 pr-4 py-3 bg-black/40 border border-yellow-700/50 rounded-lg text-yellow-100 placeholder-yellow-800/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all"
              />
            </div>
          </div>

          {/* Gender Selection */}
          <div>
            <label className="block text-sm font-medium text-yellow-100/80 mb-3">
              Género
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setGender(Gender.MALE)}
                className={`py-3 px-4 rounded-lg border flex items-center justify-center gap-2 transition-all duration-200 ${
                  gender === Gender.MALE
                    ? 'bg-yellow-600/20 border-yellow-500 text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)]'
                    : 'bg-black/20 border-white/10 text-gray-500 hover:border-yellow-700/50 hover:text-yellow-600'
                }`}
              >
                <span className="text-lg">Masculino</span>
              </button>
              <button
                type="button"
                onClick={() => setGender(Gender.FEMALE)}
                className={`py-3 px-4 rounded-lg border flex items-center justify-center gap-2 transition-all duration-200 ${
                  gender === Gender.FEMALE
                    ? 'bg-yellow-600/20 border-yellow-500 text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)]'
                    : 'bg-black/20 border-white/10 text-gray-500 hover:border-yellow-700/50 hover:text-yellow-600'
                }`}
              >
                <span className="text-lg">Femenino</span>
              </button>
            </div>
          </div>

          {/* Helper Text */}
          <div className="text-xs text-center text-gray-500 italic mt-2">
            Esto cambiará el saludo a "Bienvenido" o "Bienvenida".
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full mt-6 bg-gradient-to-r from-yellow-700 to-yellow-500 hover:from-yellow-600 hover:to-yellow-400 text-black font-bold py-3 rounded-lg shadow-lg transform active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
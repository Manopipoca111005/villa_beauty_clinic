'use client'

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappNumber = "351912345678"; // Substitua pelo seu número do WhatsApp
  const message = "Olá! Gostaria de saber mais sobre os vossos serviços."; // Mensagem pré-definida

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-50"
      aria-label="Contact via WhatsApp"
    >
      <FaWhatsapp size={30} />
    </button>
  );
};

export default WhatsAppButton;
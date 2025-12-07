import React from 'react'
import { useNavigate } from "react-router-dom";
import { TextHoverEffect } from "../components/hero-first/TextHoverEffectDemo";

const First = () => {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/Home");  
  };

  return (
    <section className="w-full h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <TextHoverEffect 
          className="flex items-center justify-center"
          onFinish={handleFinish}  
        />
      </div>
    </section>
  );
};

export default First;

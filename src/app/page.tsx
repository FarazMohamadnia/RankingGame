'use client'
import Body from "@/components/layout/body/Body";
import Header from "@/components/layout/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
// @ts-expect-error This type is incompatible due to library limitations.
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
export default function Home() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="home-layout">
      <div className="home-response">
        <Body />
      </div>
    </div>
    

  );
}

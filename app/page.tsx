"use client";

import Image from "next/image";
import { useEffect } from "react";
import { redirect } from 'next/navigation'

export default function Home() {
  useEffect(() => {
    redirect('/projects')
  }, []);
  return null;
}

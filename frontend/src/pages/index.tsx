/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useHappenContext } from "@/context/HappenContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { LoginButton } from "@/components/AuthButton";
import HeroSection from "@/components/Home/Hero";
import StatusSection from "../components/Home/StatusSection";

const Home: NextPage = () => {
  const router = useRouter();
  const { restoreSession, ctxAccount, isAuthenticated } = useHappenContext();

  useEffect(() => {
    if (!ctxAccount) {
      restoreSession();
    } else {
      router.push("/home");
    }
  }, [ctxAccount]);

  return (
    <div className="min-h-screen bg-primary-bg">
      <Header />
      <Navbar />
      <HeroSection />
      <StatusSection />
    </div>
  );
};

export default Home;

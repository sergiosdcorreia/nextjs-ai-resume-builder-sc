import React from "react";
import Navbar from "./Navbar";
import PremiumModal from "@/components/Premium/PremiumModal";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {children}
      <PremiumModal />
    </div>
  );
}

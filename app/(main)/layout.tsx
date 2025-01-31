import React from "react";
import Navbar from "./resumes/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

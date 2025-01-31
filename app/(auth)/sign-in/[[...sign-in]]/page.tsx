import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <main className="flex h-dvh items-center justify-center p-3">
      <SignIn />
    </main>
  );
}

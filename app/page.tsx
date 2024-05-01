// @ts-nocheck
"use client";

import Stage_ from "./components/Stage_";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center">
      <title>UREMO - RE-L8</title>
      <div
        className={`h-screen w-full flex flex-col justify-start items-center`}
      >
        <div
          className={`w-full relative overflow-hidden flex flex-row justify-center items-center`}
        >
        </div>
        <Stage_ style_="mt-[150px]"/>
      </div>
    </main>
  );
}

// @ts-nocheck
"use client";

import { useEffect } from "react";
import Stage_ from "./components/Stage_";
import { getCollection_ } from "./components/utils/utils";
import { useRecoilState } from "recoil";
import { ProductState, UserState } from "./components/atoms/atoms";

export default function Home() {
  const [user_, setUser_] = useRecoilState(UserState);
  const [product_, setProduct_] = useRecoilState(ProductState);

  const getProducts_ = async () => {
    const data = await getCollection_({email: user_.email, store: 'rel8'});
    setProduct_(data);
  };

  useEffect(() => {
    if(user_){
      getProducts_();
    }
  }, [user_]);
  return (
    <main className="flex min-h-screen flex-row items-center justify-center">
      <title>UREMO - RE-L8</title>
      <div
        className={`h-screen w-full flex flex-col justify-start items-center`}
      >
        <div
          className={`w-full relative overflow-hidden flex flex-row justify-center items-center`}
        ></div>
        <Stage_ style_="mt-[150px]" />
      </div>
    </main>
  );
}

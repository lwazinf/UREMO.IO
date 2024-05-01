// @ts-nocheck
"use client";
import {
  faBell,
  faCheckCircle,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faArrowRotateLeft,
  faBars,
  faChartArea,
  faCircleArrowRight,
  faCog,
  faHamburger,
  faHouse,
  faLeftLong,
  faSearch,
  faShoppingCart,
  faSignOut,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Stage_ from "./components/Stage_";
import { faCloudversify } from "@fortawesome/free-brands-svg-icons";
import { useRecoilState } from "recoil";
import {
  DataState,
  OpenState,
  ProductState,
  SearchState,
} from "./components/atoms/atoms";
import Nav_, { Search_ } from "./components/Nav_";

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

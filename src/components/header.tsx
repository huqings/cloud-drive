import React, { useState } from "react";
import { motion } from "motion/react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbarMenu";

function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={"fixed inset-x-0 max-w-2xl mx-auto z-50"}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="订单系统">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="云端网盘">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const [active, setActive] = useState<boolean>(false);

  return (
    <header className={"fixed inset-x-0 mx-auto h-[60px] bg-[#1F5081] z-50 text-white"}>
      <div className="flex items-center justify-center gap-4 h-full mx-auto border-b border-[#1a334b] overflow-hidden">
        {/* <svg onClick={() => setActive(!active)} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                    <text style={{ fill: "#3b7fc4", fontFamily: "\"BM Hanna 11yrs Old\"", fontSize: "131.3px", whiteSpace: "pre" }} x="205.685" y="292.526">Y</text>
                    <ellipse style={{ fill: "#3b7fc4", paintOrder: "fill", fillRule: "nonzero" }} cx="250" cy="250" rx="43.316" ry="43.316"></ellipse>
                    <text style={{ fill: "rgb(255, 255, 255)", fontFamily: "\"BM Hanna 11yrs Old\"", fontSize: "19px", whiteSpace: "pre" }} transform="matrix(3.945466, 0, 0, 3.764707, 226.53418, 206.130463)" x="0" y="17.34">S</text>
                </svg> */}
        {/* <div className="flex flex-row">
                    <NavbarMenu isOpen={active} toggleMenu={() => setActive(!active)} />
                </div> */}
        <Navbar />
      </div>
    </header>
  );
}
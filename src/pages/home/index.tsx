import React, { useEffect, useRef, lazy, Suspense } from "react";
// import { dataApi } from "../../services/api";
import { motion } from "motion/react";
import { WorldMap } from "@/components/worldMap";

const _dots = [
    {
        start: { lat: 74.2008, lng: -170.4937 },
        end: { lat: 34.0522, lng: -118.2437 },
    },
    {
        start: { lat: 64.2008, lng: -149.4937 },
        end: { lat: -30.7975, lng: -47.8919 },
    },
    {
        start: { lat: -30.7975, lng: -47.8919 },
        end: { lat: 38.7223, lng: -9.1393 },
    },
    {
        start: { lat: 51.5074, lng: -0.1278 },
        end: { lat: 28.6139, lng: 77.209 },
    },
    {
        start: { lat: 28.6139, lng: 77.209 },
        end: { lat: 43.1332, lng: 131.9113 },
    },
    {
        start: { lat: 28.6139, lng: 77.209 }, 
        end: { lat: -10.2921, lng: 36.8219 },
    },
];

export default function Home() {

    const splineContainerRef = useRef<HTMLDivElement>(null);
    const [systemArticlePage, setSystemArticlePage] = React.useState<any>([]);
    const [storageNodes, setStorageNodes] = React.useState<any>(0);
    const [addresses, setAddresses] = React.useState<any>(0);
    const [milestonesAndRoadmapIndex, setMilestonesAndRoadmap] = React.useState<number>(6);

    useEffect(() => {
        // init()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="pt-30 w-[1000px] flex flex-col items-center">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="font-bold text-xl md:text-4xl text-white text-shadow-[0_2px_2px_rgba(51,51,51,1)]">
                        <span className="text-white">
                            {"服务管理平台".split("").map((word, idx) => (
                                <motion.span
                                    key={idx}
                                    className="inline-block"
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </span>
                    </p>
                    <p className="text-sm md:text-lg text-white max-w-2xl mx-auto py-4">
                        Break free from traditional boundaries. Work from anywhere, at the
                        comfort of your own studio apartment. Perfect for Nomads and
                        Travellers.
                    </p>
                </div>
                <WorldMap dots={_dots} />
                <div className="flex flex-col items-center">
                    <button className="cursor-pointer border border-[#82a3c7] text-white px-20 py-2 text-[16px] rounded-[3px] hover:bg-[#3e70a5] hover:border-transparent">立即使用</button>
                </div>
            </div>
        </div>
    );
}
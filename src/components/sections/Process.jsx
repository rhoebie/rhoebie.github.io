import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import Card from "../Card";
import { queueStack } from "../../constants";
import Logo from "../Logo";

const Process = () => {
    const logoRefs = useRef([]);
    const cardRef = useRef(null);
    const [paths, setPaths] = useState([]);
    const pathRefs = useRef([]);
    const [lengths, setLengths] = useState([]);

    useEffect(() => {
        const newPaths = queueStack
            .map((item, index) => {
                const logoEl = logoRefs.current[index];
                const cardEl = cardRef.current;

                if (!logoEl || !cardEl) return null;

                const logoRect = logoEl.getBoundingClientRect();
                const cardRect = cardEl.getBoundingClientRect();

                return {
                    startX: logoRect.right,
                    startY: logoRect.top + logoRect.height / 2,
                    endX: cardRect.left,
                    endY: cardRect.top + cardRect.height / 2,
                    shade: item.shade,
                };
            })
            .filter(Boolean);

        setPaths(newPaths);
    }, []);

    useEffect(() => {
        const newLengths = pathRefs.current.map((el) =>
            el ? el.getTotalLength() : 600
        );
        setLengths(newLengths);
    }, [paths]);

    return (
        <section id="process">
            <div className="h-[900px]">
                <Header
                    heading="Mastering a New Tech Stack"
                    subheading="How I Go from Zero to Confident with Any Tech Stack"
                />

                <div className="w-full relative mt-[80px]">
                    <svg
                        className="absolute w-full h-1"
                        preserveAspectRatio="none"
                        viewBox="0 0 100 1"
                    >
                        <defs>
                            <linearGradient
                                id="lineGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="1%"
                            >
                                <stop offset="0%" stopColor="black" />
                                <stop offset="50%" stopColor="#4F46E5" />
                                <stop offset="100%" stopColor="black" />
                            </linearGradient>
                        </defs>
                        <line
                            x1="0"
                            y1="0"
                            x2="100"
                            y2="1"
                            stroke="url(#lineGradient)"
                            strokeWidth="1"
                            strokeLinecap="round"
                        />
                    </svg>

                    <div className="absolute top-[-5px] w-full max-w-[1300px] mx-auto left-0 right-0 grid grid-cols-3 gap-x-8 justify-items-center">
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-[#4F46E5] shadow-[0_0_50px_25px_rgba(79,70,229,0.6)] mb-4" />
                            <div className="w-[300px]">
                                <div className="font-bold text-white text-[16px] mb-1 mt-10">
                                    Research
                                </div>
                                <div className="text-[14px] text-white font-normal">
                                    I start by understanding the purpose of the stack — what
                                    problems it solves, where it's commonly used, and how it fits
                                    into modern development workflows.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-[#4F46E5] shadow-[0_0_50px_25px_rgba(79,70,229,0.6)] mb-4" />
                            <div className="w-[300px]">
                                <div className="font-bold text-white text-[16px] mb-1 mt-10">
                                    Hands-On Tutorials
                                </div>
                                <div className="text-[14px] text-white font-normal">
                                    I follow practical tutorials to get a feel for the stack. This
                                    stage helps me get comfortable with the syntax, tools, and
                                    basic patterns.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-[#4F46E5] shadow-[0_0_50px_25px_rgba(79,70,229,0.6)] mb-4" />
                            <div className="w-[300px]">
                                <div className="font-bold text-white text-[16px] mb-1 mt-10">
                                    Small Project
                                </div>
                                <div className="text-[14px] text-white font-normal">
                                    I build a mini project using the stack. This helps solidify my
                                    understanding and explore real-world use cases.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-[33.5%] top-[2px] -translate-y-1/2 flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                            <svg
                                key={i}
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                className=""
                                style={{ display: "block" }}
                            >
                                <polygon points="0,0 20,10 0,20" fill="#4F46E5" />
                            </svg>
                        ))}
                    </div>

                    <div className="absolute right-[33.5%] top-[2px] -translate-y-1/2 flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                            <svg
                                key={i}
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                className=""
                                style={{ display: "block" }}
                            >
                                <polygon points="0,0 20,10 0,20" fill="#4F46E5" />
                            </svg>
                        ))}
                    </div>
                </div>
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        {paths.map((path, i) => (
                            <linearGradient
                                id={`snake-gradient-${i}`}
                                key={`snake-gradient-${i}`}
                                x1="0%" y1="0%" x2="100%" y2="0%"
                            >
                                <stop offset="0%" stopColor={path.shade || "#4F46E5"} />
                                <stop offset="50%" stopColor={path.shade || "#4F46E5"} />
                                <stop offset="100%" stopColor="#161616" stopOpacity="100%" />
                            </linearGradient>
                        ))}
                        <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {paths.map((path, i) => {
                        const curveOffset = 110;
                        const d = `
                            M ${path.startX},${path.startY}
                            C ${path.startX + curveOffset},${path.startY}
                              ${path.endX - curveOffset},${path.endY}
                              ${path.endX},${path.endY}
                        `;
                        const pathLength = lengths[i] || 600;
                        const dashLength = 60;

                        return (
                            <g key={i}>
                                <path
                                    ref={(el) => (pathRefs.current[i] = el)}
                                    d={d}
                                    style={{ visibility: "hidden", position: "absolute" }}
                                />
                                <path d={d} fill="none" stroke="#161616" strokeWidth="1" />
                                <path
                                    d={d}
                                    fill="none"
                                    stroke={`url(#snake-gradient-${i})`}
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                    strokeDasharray={`${dashLength},${pathLength - dashLength}, ${dashLength},${pathLength - dashLength}`}
                                    strokeDashoffset="0"
                                    filter="url(#glow)"
                                >
                                    <animate
                                        attributeName="stroke-dashoffset"
                                        from="0"
                                        to={`-${pathLength}`}
                                        dur={`${(2 + Math.random()).toFixed(2)}s`}
                                        repeatCount="indefinite"
                                        begin={`${(Math.random() * 2).toFixed(2)}s`}
                                        calcMode="spline"
                                        keySplines={
                                            [
                                                "0.25 0.1 0.25 1",
                                                "0.42 0 0.58 1",
                                                "0.4 0 0.2 1",
                                                "0.15 0.85 0.25 1",
                                                "0.45 0 0.55 1",
                                            ][Math.floor(Math.random() * 5)]
                                        }
                                        keyTimes="0;1"
                                    />
                                </path>
                            </g>
                        );
                    })}
                </svg>
                <div className="relative">
                    <div className="absolute left-0 right-0 top-[300px] flex items-center justify-center z-10 gap-[150px]">
                        <div className="flex flex-col gap-[50px] justify-center items-end">
                            {queueStack.map((item, index) => (
                                <div
                                    key={item.name}
                                    ref={(el) => (logoRefs.current[index] = el)}
                                >
                                    <Logo
                                        name={item.name}
                                        image={item.icon}
                                        glow={true}
                                        glowColor={item.shade}
                                    />
                                </div>
                            ))}
                        </div>
                        <Card
                            variant="one"
                            width="w-[550px]"
                            height="h-[70px]"
                            className="relative overflow-hidden"
                            ref={cardRef}
                        >
                            <div className="w-full h-full flex items-center justify-around">
                                <p className="text-white font-bold text-[16px]">Research</p>
                                <p className="text-white font-bold text-[16px]">
                                    Hands-On Tutorials
                                </p>
                                <p className="text-white font-bold text-[16px]">
                                    Small Project
                                </p>
                            </div>
                        </Card>
                        <Card
                            variant="one"
                            width="w-auto"
                            height="h-auto"
                            className="relative overflow-hidden"
                        >
                            <div className="flex items-center justify-around px-8 py-4">
                                <p className="text-white font-bold text-[16px]">Research</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;

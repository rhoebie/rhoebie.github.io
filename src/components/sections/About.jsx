import React from 'react'
import Card from '../Card'
import Logo from '../Logo';
import { techStack } from '../../constants';
import Marquee from 'react-fast-marquee';
import { overlayColor } from '../../assets';

const circleColors = [
    'fill-[#1D1A51]',
    'fill-[#312C8D]',
    'fill-[#3F39B8]',
    'fill-[#4F46E5]',
]

const lines = [
    {
        label: 'Enterprise Business Rules',
        top: '36px',
        width: '330px',
        dot: false,
    },
    {
        label: 'Application Business Rules',
        top: '72px',
        width: '300px',
        dot: false,
    },
    {
        label: 'Interface Adapters',
        top: '108px',
        width: '330px',
        dot: false,
    },
    {
        label: 'Framework & Drivers',
        top: '144px',
        width: '300px',
        dot: false,
    },
];

const row1 = techStack.slice(0, 5)
const row2 = techStack.slice(5, 10)
const row3 = techStack.slice(10, 15)

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 mt-20">
            <div className='flex flex-row gap-10'>
                <Card variant="one" width="w-[643px]" height="h-[465px]" className="relative overflow-hidden">
                    <div className="absolute left-[30px] top-[30px] text-white text-[12px] font-normal">
                        Clean Architecture By Uncle Bob
                    </div>
                    <div className="absolute left-[80px] top-20 w-[350px] z-10">
                        {lines.map((line, i) => (
                            <div key={i} className="relative flex items-center mb-2" style={{ height: '36px' }}>
                                <span className="text-white text-[12px] mr-3 whitespace-nowrap w-auto">
                                    {line.label}
                                </span>
                                <div className="flex-1 relative">
                                    <div
                                        className="h-[2px] bg-white"
                                        style={{ width: line.width, display: 'inline-block', verticalAlign: 'middle' }}
                                    />
                                    {line.dot && (
                                        <span
                                            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 right-0 translate-x-[350px] -translate-y-[350px] w-[700px] h-[700px] z-0">
                        <svg
                            viewBox="0 0 640 640"
                            width="100%"
                            height="100%"
                            className="pointer-events-none select-none"
                        >
                            <circle cx="340" cy="340" r="260" className={circleColors[0]} />
                            <circle cx="340" cy="340" r="220" className={circleColors[1]} />
                            <circle cx="340" cy="340" r="180" className={circleColors[2]} />
                            <circle cx="340" cy="340" r="140" className={circleColors[3]} />
                        </svg>
                    </div>
                    <div className="absolute right-0 top-37 flex flex-col space-y-2">
                        {[0, 1, 2].map(i => (
                            <svg key={i} width="24" height="40" viewBox="0 0 24 40" fill="none">
                                <path d="M12 32V8M12 8L6 14M12 8l6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        ))}
                    </div>
                    <div className="absolute left-[30px] bottom-[30px] right-8">
                        <div className="text-[#E1E1E1] text-sm mb-2.5">Software Architecture</div>
                        <div className="text-white font-bold text-2xl leading-tight">
                            My preferred architecture is Clean Architecture by Robert C. Martin, valued for its clarity and long-term maintainability.
                        </div>
                    </div>
                </Card>
                <Card variant="two" width="w-[456px]" height="h-[465px]" className="overflow-hidden relative">
                    <img
                        src={overlayColor}
                        alt="Overlay"
                        className="absolute top-[-150px] right-[-150px] z-20 pointer-events-none"
                        style={{ width: 'auto', height: 'auto', transform: 'rotate(50deg)' }} 
                    />

                    <div className='px-[30px] pt-[30px]'>
                        <div className="text-[#E1E1E1] text-[14px] font-normal mb-4">
                            Tech Stack
                        </div>
                        <div className="text-white text-[24px] font-bold">
                            I’m continually refining my skills to stay current with the latest technologies and best practices in the industry.
                        </div>
                    </div>

                    <div className="relative w-full overflow-hidden mt-8">
                        <Marquee
                            speed={30}
                            gradient={false}
                            pauseOnHover={true}
                        >
                            {row1.map((tech, idx) => (
                                <Logo
                                    key={`${tech.name}-row1-${idx}`}
                                    name={tech.name}
                                    image={tech.icon}
                                    glow={false}
                                    glowColor={tech.shade}
                                />
                            ))}
                        </Marquee>
                    </div>
                    <div className="relative w-full overflow-hidden mt-8">
                        <Marquee
                            speed={20}
                            gradient={false}
                            pauseOnHover={true}
                            direction="right"
                        >
                            {row2.map((tech, idx) => (
                                <Logo
                                    key={`${tech.name}-row2-${idx}`}
                                    name={tech.name}
                                    image={tech.icon}
                                    glow={false}
                                    glowColor={tech.shade}
                                />
                            ))}
                        </Marquee>
                    </div>
                    <div className="relative w-full overflow-hidden mt-8">
                        <Marquee
                            speed={40}
                            gradient={false}
                            pauseOnHover={true}
                        >
                            {row3.map((tech, idx) => (
                                <Logo
                                    key={`${tech.name}-row3-${idx}`}
                                    name={tech.name}
                                    image={tech.icon}
                                    glow={false}
                                    glowColor={tech.shade}
                                />
                            ))}
                        </Marquee>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default About
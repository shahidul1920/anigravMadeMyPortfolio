import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        role: "Graphics and Web",
        company: "Fiverr and Upwork",
        period: "2019 - 2024",
        desc: "Seasoned Freelancer with 5-star reviews. Expertise in Web & Graphics design.",
        cols: 2,
        bg: "#f8f9fa"
    },
    {
        role: "Graphics Designer",
        company: "Ararijn.nl",
        period: "2022 Contract",
        desc: "Created visually captivating designs for social media & marketing.",
        cols: 1,
        bg: "#e9ecef"
    },
    {
        role: "Web Developer",
        company: "IPS-Australia",
        period: "2022 - 2023",
        desc: "Enhancing web and graphics section with expertise in design and optimization.",
        cols: 1,
        bg: "#dee2e6"
    },
    {
        role: "Front-End Dev",
        company: "Barge Desk",
        period: "2024 Contract",
        desc: "Developed and launched a dynamic website using custom code and WordPress.",
        cols: 2,
        bg: "#ced4da"
    },
    {
        role: "Web and Graphics",
        company: "Trust Holidays",
        period: "2024 - 2024",
        desc: "Partnered to enhance web presence and graphic design.",
        cols: 1,
        bg: "#adb5bd"
    },
    {
        role: "Graphics Designer",
        company: "OMC HealthCare",
        period: "2025 - ...",
        desc: "Designed high-quality packaging inserts, posters, and printed materials.",
        cols: 1,
        bg: "#6c757d",
        dark: true
    }
];

const Experience = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from('.bento-item', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="section" style={{ background: '#fff' }}>
            <div className="container">
                <h2 style={{ marginBottom: '60px', textAlign: 'center' }}>Experience</h2>
                <div className="experience-grid">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`bento-item experience-item ${exp.cols === 2 ? 'span-2' : ''}`}
                            style={{
                                background: exp.bg,
                                padding: '40px',
                                borderRadius: '24px',
                                color: exp.dark ? '#fff' : '#1a1a1a',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minHeight: '250px',
                                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
                                    <h3 style={{ fontSize: '1.8rem', lineHeight: 1.1 }}>{exp.role}</h3>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        padding: '6px 12px',
                                        borderRadius: '20px',
                                        border: `1px solid ${exp.dark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.1)'}`,
                                        whiteSpace: 'nowrap'
                                    }}>{exp.period}</span>
                                </div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: '500', opacity: 0.7, marginBottom: '20px' }}>{exp.company}</h4>
                            </div>
                            <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.5 }}>{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

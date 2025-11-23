import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.from(textRef.current.children, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="section" style={{ background: '#fff' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        {/* Placeholder for a creative visual or image */}
                        <div style={{ width: '100%', height: '400px', background: '#f0f0f0', borderRadius: '20px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '5rem', fontWeight: 'bold', color: '#e0e0e0' }}>ME</span>
                        </div>
                    </div>
                    <div ref={textRef}>
                        <h2 style={{ marginBottom: '30px', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>About Me</h2>
                        <p style={{ marginBottom: '20px', fontSize: '1.25rem', color: '#333' }}>
                            Front-end Developer and Graphic Designer with a strong track record of delivering visually stunning and user-friendly websites and graphics.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#666' }}>
                            With over 3 years of experience in web design and 2 years in graphic design, I've honed my skills in UI/UX, front-end development, and digital media. I bridge the gap between design and engineering.
                        </p>

                        <div style={{ marginTop: '40px', display: 'flex', gap: '40px' }}>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '5px' }}>3+</h3>
                                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: '#888' }}>Years Exp.</span>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '5px' }}>50+</h3>
                                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: '#888' }}>Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

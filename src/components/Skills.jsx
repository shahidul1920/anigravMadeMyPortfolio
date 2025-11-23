import React, { useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Draggable);

const skills = [
    "UI UX (Figma)", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign",
    "HTML & CSS", "JavaScript", "React & Node JS", "WordPress",
    "Video Games", "Movies & Podcast", "Traveling", "Drawing and Art"
];

const Skills = () => {
    const containerRef = useRef(null);
    const sliderRef = useRef(null);

    useGSAP(() => {
        Draggable.create(sliderRef.current, {
            type: "x",
            bounds: containerRef.current,
            inertia: true,
            edgeResistance: 0.65,
            dragClickables: true
        });
    }, { scope: containerRef });

    return (
        <section className="section" style={{ overflow: 'hidden', background: '#111', color: '#fff' }}>
            <div className="container" ref={containerRef} style={{ overflow: 'hidden' }}>
                <h2 style={{ marginBottom: '60px', textAlign: 'center' }}>Skills & Interests</h2>
                <div
                    ref={sliderRef}
                    style={{
                        display: 'flex',
                        gap: '20px',
                        cursor: 'grab',
                        width: 'max-content',
                        padding: '20px 40px', /* Add horizontal padding to avoid cutting off edges */
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '15px 30px', /* Slightly smaller padding for better mobile fit */
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#fff',
                                borderRadius: '100px',
                                fontSize: 'clamp(1rem, 2vw, 1.5rem)', /* Responsive font size */
                                whiteSpace: 'nowrap',
                                userSelect: 'none',
                                backdropFilter: 'blur(10px)',
                                transition: 'background 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
                <p style={{ marginTop: '40px', color: '#666', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>Drag to explore</p>
            </div>
        </section>
    );
};

export default Skills;

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const nameRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let dots = [];
        const spacing = 40;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initDots();
        };

        const initDots = () => {
            dots = [];
            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    dots.push({
                        x,
                        y,
                        baseX: x,
                        baseY: y,
                        size: 1.5,
                        opacity: 0.2
                    });
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            dots.forEach(dot => {
                ctx.fillStyle = `rgba(0, 0, 0, ${dot.opacity})`;
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(animate);
        };

        resize();
        animate();
        window.addEventListener('resize', resize);

        // Mouse interaction
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            dots.forEach(dot => {
                const dx = mouseX - dot.x;
                const dy = mouseY - dot.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 200;

                if (dist < maxDist) {
                    const force = (maxDist - dist) / maxDist;
                    const angle = Math.atan2(dy, dx);
                    const moveX = Math.cos(angle) * force * 30;
                    const moveY = Math.sin(angle) * force * 30;

                    gsap.to(dot, {
                        x: dot.baseX - moveX,
                        y: dot.baseY - moveY,
                        opacity: 0.6,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to(dot, {
                        x: dot.baseX,
                        y: dot.baseY,
                        opacity: 0.2,
                        duration: 0.5
                    });
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(nameRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: 'power4.out',
            delay: 0.2
        })
            .from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, '-=1');

    }, { scope: containerRef });

    return (
        <section ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <canvas
                ref={canvasRef}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
            />
            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <h1 ref={nameRef} style={{ marginBottom: '20px' }}>
                    Shahidul Islam
                </h1>
                <p ref={titleRef} style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Designer &bull; UI/UX &bull; Front-end Dev
                </p>
            </div>

            <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}>
                <span style={{ display: 'block', width: '1px', height: '60px', background: '#000', margin: '0 auto' }}></span>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '10px', display: 'block' }}>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;

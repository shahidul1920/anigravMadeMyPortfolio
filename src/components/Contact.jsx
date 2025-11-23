import React from 'react';

const Contact = () => {
    return (
        <section className="section" style={{ background: '#fff', paddingBottom: '100px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ marginBottom: '60px', textAlign: 'center' }}>Let's Work Together</h2>
                <div style={{ display: 'grid', gap: '40px' }}>
                    <div style={{ display: 'grid', gap: '10px' }}>
                        <label style={{ fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{
                                padding: '20px 0',
                                borderRadius: '0',
                                border: 'none',
                                borderBottom: '2px solid #eee',
                                fontSize: '1.5rem',
                                fontFamily: 'inherit',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#000'}
                            onBlur={(e) => e.target.style.borderColor = '#eee'}
                        />
                    </div>
                    <div style={{ display: 'grid', gap: '10px' }}>
                        <label style={{ fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            style={{
                                padding: '20px 0',
                                borderRadius: '0',
                                border: 'none',
                                borderBottom: '2px solid #eee',
                                fontSize: '1.5rem',
                                fontFamily: 'inherit',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#000'}
                            onBlur={(e) => e.target.style.borderColor = '#eee'}
                        />
                    </div>
                    <div style={{ display: 'grid', gap: '10px' }}>
                        <label style={{ fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Message</label>
                        <textarea
                            rows="3"
                            placeholder="Tell me about your project..."
                            style={{
                                padding: '20px 0',
                                borderRadius: '0',
                                border: 'none',
                                borderBottom: '2px solid #eee',
                                fontSize: '1.5rem',
                                fontFamily: 'inherit',
                                resize: 'vertical',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#000'}
                            onBlur={(e) => e.target.style.borderColor = '#eee'}
                        ></textarea>
                    </div>
                    <button
                        className="btn"
                        style={{
                            marginTop: '40px',
                            width: 'max-content',
                            cursor: 'pointer',
                            border: 'none',
                            fontSize: '1.2rem',
                            padding: '20px 60px'
                        }}
                    >
                        Send Message
                    </button>
                </div>

                <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', borderTop: '1px solid #eee', paddingTop: '60px' }}>
                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Contact</h4>
                        <p style={{ marginBottom: '10px' }}>+880 1879 539832</p>
                        <p>shahidulshakil@proton.me</p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Socials</h4>
                        <p style={{ marginBottom: '10px' }}>shahidulshakil@proton.me</p>
                        <p>Sector 15, Uttara, Dhaka</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

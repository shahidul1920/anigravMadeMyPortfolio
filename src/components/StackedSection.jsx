import React from 'react';

const clients = [
    "IPS Australia", "Twoinsoft", "CreativeIT",
    "Trust Holidays", "Barge Desk",
    "Jannat Associate", "Central Barge",
    "Future Chef", "Bet (Her) An", "Inland Barqe",
    "Formot Craft", "Share Bulletin"
];

const StackedSection = () => {
    return (
        <div style={{ padding: '150px 0', background: '#000', color: '#fff' }}>
            <div className="container">
                <h2 style={{ marginBottom: '100px', textAlign: 'center' }}>Worked With</h2>
                <div style={{ position: 'relative' }}>
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="sticky-card"
                            style={{
                                position: 'sticky',
                                top: `${120 + index * 15}px`,
                                background: `hsl(${220 + index * 5}, 20%, ${10 + index * 3}%)`, // Darker, more sophisticated gradient
                                padding: '60px',
                                marginBottom: '100px',
                                borderRadius: '30px',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                boxShadow: '0 -20px 60px rgba(0,0,0,0.5)',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', margin: 0, fontWeight: '300' }}>{client}</h3>
                            <span style={{ fontSize: '1.5rem', opacity: 0.3, fontFamily: 'monospace' }}>{String(index + 1).padStart(2, '0')}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StackedSection;

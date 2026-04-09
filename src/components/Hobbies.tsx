import React from 'react';

const hobbies = [
    {
        title: "Culinary Arts",
        description: "Experimenting with South Indian spices and classic French dishes. I love blending flavors from home with local French ingredients.",
        icon: "🍳"
    },
    {
        title: "Plant Biotechnology",
        description: "Beyond my studies, I enjoy staying updated on the latest Agri News  and sustainable precision agriculture.",
        icon: "🌱"
    },
    {
        title: "Exploring France",
        description: "Currently discovering the landscapes of Rouen and Beauvais while documenting my journey as an international student.",
        icon: "🗼"
    }];

const Hobbies = () => {
    return (
        <section className="hobbies-section" id="hobbies" style={{ padding: '80px 20px', background: '#050505', color: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Beyond the Data</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="hobby-card" style={{
                            padding: '30px',
                            background: '#111',
                            borderRadius: '15px',
                            border: '1px solid #333',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{hobby.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '15px' }}>{hobby.title}</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>{hobby.description}</p>
                        </div>))}
                </div>
            </div>
        </section>);
};

export default Hobbies;
const hobbies = [
    {
        title: "The Spice Diplomat",
        description: "I grew up on South Indian food, so my taste buds were in shock when I moved to France. Now, I’m on a mission to see if I can put Sambar powder in a Béchamel sauce without causing a national emergency. It’s 50% culinary fusion, 50% survival.",
        icon: "🌶️"
    },
    {
        title: "Farmer’s Best Friend",
        description: "I study Plant Biotech not just for the 'science,' but because I want farmers to actually make money. My goal is to use data to ensure the people who feed us aren't the ones struggling to pay the bills. Plus, I look great in muddy boots.",
        icon: "🚜"
    },
    {
        title: "Baguette-Based Finance",
        description: "I’m a keen observer of the stock market. Currently, my investment strategy involves watching micro/macro-economic trends and calculating exactly how many shares of a company I could buy for the price of one pain au chocolat. It’s a high-stakes game.",
        icon: "📈"
    },
    {
        title: "The 'Intellectual' Look",
        description: "I love reading books to broaden my perspective. In reality, it’s mostly me sitting in a French café with a thick book, trying to look like a sophisticated philosopher while I'm actually just wondering where the nearest Biryani place is.",
        icon: "📚"
    },
    {
        title: "The Gravity Fighter",
        description: "I enjoy cycling through the French countryside. I've learned two things: 1. France is beautiful. 2. Normandy and Picardy are 90% uphill. It’s less of a 'sport' and more of a personal argument between me and gravity.",
        icon: "🚲"
    }
];

const Hobbies = () => {
    return (
        <section className="hobbies-section" id="hobbies" style={{ padding: '100px 20px', background: '#050505', color: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.8rem', marginBottom: '10px', textAlign: 'center', fontWeight: '800' }}>
                    The 'Non-Data' Side of Me
                </h2>
                <p style={{ textAlign: 'center', color: '#666', marginBottom: '60px', fontSize: '1.1rem' }}>
                    (Because my life isn't just SQL queries and CSV files)
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px'
                }}>
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="hobby-card" style={{
                            padding: '40px 30px',
                            background: 'linear-gradient(145deg, #111, #0a0a0a)',
                            borderRadius: '28px',
                            border: '1px solid #222',
                            transition: 'all 0.4s ease-in-out',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ fontSize: '3.2rem', marginBottom: '25px' }}>{hobby.icon}</div>
                            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '15px', fontWeight: '700' }}>
                                {hobby.title}
                            </h3>
                            <p style={{ color: '#888', lineHeight: '1.8', fontSize: '1rem' }}>
                                {hobby.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
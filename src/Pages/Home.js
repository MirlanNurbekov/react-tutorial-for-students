// Home.js
import React from 'react';

const Home = () => {
    return (
        <div className="container home-page">
            <section className="hero">
                <h1>Mirlan is the best</h1>
                <p>You all study in SU</p>
            </section>

            <section className="features">
                <div className="feature-card">
                    <h3>Interactive Learning</h3>
                    <p>Engage in hands-on exercises to build real-world skills.</p>
                </div>
                <div className="feature-card">
                    <h3>Expert Instructors</h3>
                    <p>Learn from the best in the industry, with experience and passion.</p>
                </div>
                <div className="feature-card">
                    <h3>Community Support</h3>
                    <p>Join a community of learners and professionals for support.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;

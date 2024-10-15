// Test.js
import React from 'react';


const Test = () => {
    return (
        <div className="container test-page">
            <h1>Course Test</h1>
            <p>Check your knowledge with our course test. You’ll receive instant feedback on each question!</p>

            <section className="test-instructions">
                <h2>Instructions:</h2>
                <ul>
                    <li>There are 20 questions, covering various topics from the course.</li>
                    <li>Each question is multiple-choice.</li>
                    <li>Click on the correct answer to receive instant feedback.</li>
                </ul>
            </section>
        </div>
    );
};

export default Test;

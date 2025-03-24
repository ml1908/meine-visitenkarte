import React from 'react';
import './App.css';

function App() {
    return (
        <div className="visitenkarte">
            <header>
                <h1>Michael Lambauer</h1>
                <p className="titel">Junior Developer</p>
            </header>

            <section className="kontakt">
                <div className="kontakt-item">
                    <i className="icon email"></i>
                    <p>MICHAELLAMBAUER@geilerHund.at</p>
                </div>
                <div className="kontakt-item">
                    <i className="icon telefon"></i>
                    <p>+43 680 1548446</p>
                </div>
                <div className="kontakt-item">
                    <i className="icon ort"></i>
                    <p>Linz, Österreich</p>
                </div>
            </section>

            <section className="ueber-mich">
                <h2>Über mich</h2>
                <p>
                 Ich bin ein 33-jähriger Junior Developer mit Leidenschaft 
                für die Webentwicklung. Mein Fokus liegt auf HTML, CSS und JavaScript, 
                und ich arbeite an eigenen Projekten, um meine Fähigkeiten stetig zu 
                erweitern. 
                Aktuell sammle ich meine erste Erfahrung mit der Bibliothek React 
                durch die Entwicklung meiner(dieser) Online-Visitenkarte.
                </p>
            </section>

            <section className="skills">
                <h2>Fähigkeiten</h2>
                <div className="skills-container">
                <div className="skill">HTML/CSS</div>
                    <div className="skill">JavaScript</div>
                    <div className="skill">React</div>
 <div className="skill">GitHub</div>
                    <div className="skill">VSCode</div>
                    

                </div>
            </section>

            <section className="portfolio-section">
                <h2>Meine Arbeit</h2>
                <p>Entdecke meine Projekte und Arbeiten im Detail.</p>
                <p>(Im moment noch nichts vorhanden)</p>
                <a href="https://dein-portfolio-link.de" target="_blank" rel="noopener noreferrer" className="portfolio-button">
                    Portfolio ansehen <span className="arrow">→</span>
                </a>
            </section>

            <footer>
                <div className="social-links">
                    <a href="https://github.com/deinname" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/deinname" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/deinname" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </footer>
        </div>
    );
}

export default App; 
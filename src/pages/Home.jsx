import { useState } from "react";
import Greetings from "../components/Greetings";

function Home() {
    const [visitorName, setVisitorName] = useState('');

    return (
        <>
        <div className="visitor-form">
            <label htmlFor="visitor-name">Como podemos Chamar Voce?</label>
            
            <input type= "text" 
            id= "visitor-name" 
            placeholder= "Digite seu Nome"
            onChange={(evento) => setVisitorName(evento.target.value)}
            />
        </div>

        <Greetings nome= {visitorName || "Visitante"}/>

        <section className="team-section" id="equipe">
            <div className="section-heading">
                <div>
                    <span className="section-label">Capital Humano</span>
                    <h2>Conheça nossa Equipe:</h2>
                </div>
            </div>
            <div className="team-grid"></div>
        </section>
        </>
    );
}
export default Home;

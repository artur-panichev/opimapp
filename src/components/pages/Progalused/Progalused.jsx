import '../Pages.css'
import teachersEmails from './img/teachersEmails.jpg';
import wordsGame from './img/wordsGame.jpg';
import olympicAtleths from './img/olympicAtleths.jpg';

function Progalused(){
    return(
        <div className="page">
            <h1>Progremmeerimise alused</h1>

            <div className="box">
                <div>
                    <h1>Teachers emails parser</h1>
                    <p>Parsib ivkhk veebisaiti ja kuvab õpetajad ja nende e-postid terminalisse.</p>
                    <p>Allikas kood: </p>
                    <a href="https://github.com/ArturPanitsev/teachersEmails" target="_blank">https://github.com/ArturPanitsev/teachersEmails</a>
                </div>
                <div>
                    <p className='textCenter'>Tulemus:</p>
                    <img src={teachersEmails}/> 
                </div>
            </div>

            <div className="box">
                <div>
                    <h1>Words Game</h1>
                    <p>Programm küsib tähte ja kui sisestad vale, siis 1 katse vähem, kui sõna ära arvad, siis võidad</p>
                    <p>Allikas kood: </p>
                    <a href="https://github.com/ArturPanitsev/wordsGame" target="_blank">https://github.com/ArturPanitsev/wordsGame</a>
                </div>
                <div>
                    <p className='textCenter'>Tulemus:</p>
                    <img src={wordsGame}/> 
                </div>
            </div>

            <div className="box">
                <div>
                    <h1>Olympic athletes table</h1>
                    <p>Veebileht olümpiasportlaste tabeliga. Otsitav ja sorteeritav</p>
                    <p>Allikas kood: </p>
                    <a href="https://github.com/ArturPanitsev/olympicAthletes" target="_blank">https://github.com/ArturPanitsev/olympicAthletes</a>
                </div>
                <div>
                    <p className='textCenter'>Tulemus:</p>
                    <img src={olympicAtleths}/> 
                </div>
            </div>
        </div>
    );
}

export default Progalused;
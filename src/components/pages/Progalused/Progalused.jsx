import '../Pages.css'
import teachersEmails from './img/teachersEmails.jpg';
import wordsGame from './img/wordsGame.jpg';
import olympicAtleths from './img/olympicAtleths.jpg';

function Progalused(){
    return(
        <div className="page">
            <h1>Progremmeerimise alused</h1>

            <div className="textBox">
                <h2>Mooduli kirjeldus</h2>
                <p><strong>Mooduli maht</strong> - 10 EKAP</p>
                <p><strong>Mooduli eesmärk</strong> - õpetusega taotletakse, et õppija mõistab programmeerimise põhiolemust, tunneb üldist programmeerimisterminoloogiat ning oskab kasutada peamisi tarkvaraarenduse vahendeid ja luua lihtsamaid rakendusi.</p>
                <h3>Õpiväljundid</h3>
                <p>
                    <strong>ÕV1</strong> - kasutab matemaatika ja loogika põhiseoseid programmeerimise ülesannete lahendamisel; <br />
                    - selgitab positsiooniliste arvusüsteemide olemust ja konverteerib arve ühest positsioonilisest arvusüsteemist teise; <br />
                    - kasutab lause- ja predikaatarvutust korduste, jagunemiste ja iteratsioonide realiseerimisel; <br />
                    - selgitab funktsioonide kasutamise põhimõtteid programmeerimisel, kasutades plokkskeeme;
                </p>
                <p>
                    <strong>ÕV2</strong> - koostab ja realiseerib olulisemaid algoritme vähemalt ühes peavoolu programmeerimiskeeles; <br />
                    -  kirjeldab andmetüüpide ja andmestruktuuride kasutusjuhte; <br />
                    - valib muutuja kirjeldamiseks sobivaima andmetüübi; <br />
                    - koostab ja realiseerib olulisemaid algoritme vähemalt ühes peavoolu programmeerimiskeeles.
                </p>
                <p>
                    <strong>ÕV3</strong> - kasutab objektorienteeritud programmeerimise põhimõtteid ja -mõisteid, tagamaks loodud koodi parimate praktikate kohase jaotuse ja hallatavuse; <br />
                    - kasutab efektiivselt programmeerimiskeelele ja -platvormile vastavat integreeritud arenduskeskkonda ja silurit tarkvara loomisel; <br />
                    - loob lihtsamaid rakendusi mõnes enamlevinud peavoolu programmeerimiskeeles, kasutades abimaterjale või olemasolevaid rakendusi; <br />
                    - selgitab OOP põhimõtteid ja põhimõisteid kasutades näidislahendust;  <br />
                    - loob lihtsamaid rakendusi mõnes enamlevinud peavoolu programmeerimiskeeles kasutades objektorienteeritud lähenemis;
                </p>
                <p>
                    <strong>ÕV4</strong> - realiseerib tarkvaraarenduse projekti või selle osa, järgides programmeerimisel vastava programmeerimiskeele parimaid praktikaid, kokkulepitud nimereegleid ja standardeid ning versioonihaldusvahendeid;
                    - järgib meeskonnas kokkulepitud koodistandardeid ja keeleomaseid parimaid praktikaid; <br />
                    - kasutab tulemuslikult hajusat versioonihaldussüsteemi tarkvaraarenduse projektis; <br />
                    - dokumenteerib loodavaid rakendusi või nende osi teisele arendajatele nende mõistetavuse parandamiseks;
                </p>
                <p>
                    <strong>ÕV5</strong> - kasutab õppe- ja ingliskeelset programmeerimise terminoloogiat;
                    - dokumenteerib loodavaid rakendusi keeleliselt ja terminoloogiliselt korrektselt; <br />
                    - selgitab dokumentatsiooni põhjal tarkvara ülesehitust ja tööpõhimõtet, kasutades vajalikul määral korrektset õppe- ja ingliskeelset terminoloogiat;
                </p>
            </div>

            <div className="box">
                <div>
                    <h1>Teachers emails parser</h1>
                    <p>Parsib ivkhk veebisaiti ja kuvab õpetajad ja nende e-postid terminalisse.</p>
                    <p>Lähtekood: </p>
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
                    <p>Lähtekood: </p>
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
                    <p>Lähtekood: </p>
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
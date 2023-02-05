import '../Pages.css'
import ivkhk from './img/ivkhk.jpg'

function Home(){
    return(
        <div className='page'>
            <h1>Koduleht</h1>
            <hr />
            <h3>
                Õpimapp | Artur Panitšev
            </h3>

            <div className='box'>
                <div>
                    <h1>Oleme tutvunud!</h1>
                    <p>Minu nimi on Artur.</p>
                    <p>Minu hobid on programmerimine, arvutimänge mängimine, anime vaatamine, mänguserveri arendamine.</p>
                    <p>Õpin Ida-Virumaa Kutsehariduskeskuses tarkvaraarendaja erialal.</p>
                </div>
                <img src={ivkhk} />
            </div>

        </div>
    );
}

export default Home;
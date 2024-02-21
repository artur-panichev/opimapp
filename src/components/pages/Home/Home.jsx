import '../Pages.css'
import ivkhk from '/img/ivkhk-logo.png'

function Home(){
    return(
        <div className='page'>
            <h1>Koduleht</h1>
            <hr />
            <h3>
                Õpimapp | Artur Panitšev
            </h3>

            <div className='box nowrap'>
                <div>
                    <h1>Oleme tutvunud!</h1>
                    <p>Minu nimi on Artur.</p>
                    <p>Minu hobid on programmerimine, arvutimänge mängimine, anime vaatamine, mänguserveri arendamine.</p>
                    <p>Õpin Ida-Virumaa Kutsehariduskeskuses tarkvaraarendaja erialal.</p>
                </div>
                <img className='i1' src={ivkhk} />
            </div>

        </div>
    );
}

export default Home;
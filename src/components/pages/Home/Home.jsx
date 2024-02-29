import '../Pages.css'
import ivkhk from '/img/ivkhk-logo.png'

function Home(){
    return(
        <div className='page'>
            <h1>Koduleht</h1>
            <hr />
            <div className='textCenter'>
                <strong>Õpimapp | Artur Panitšev</strong>
            </div>

            <div className='box nowrap'>
                <div>
                    <p>Mina olen Artur Panitšev. Ma õpin Ida-Virumaa Kutsehariduskeskuses Tarkvaraarendaja erialal.</p>
                    <h1>Õpimapp</h1>
                    <p>Õpimapp on õpilase iseseisev töö, mis täieneb pidevalt õpingute käigus. Õpimapi vorm võib olla erinev. E-õpimapp on õppimise ük hindamise meetoditest. Õpimapi kasutamise eesmärk on toetada õppija õpi- ja töökogemuste ja –tulemuste reflektsiooni ja seeläbi tuua välja tema tugevad küljed, unikaalsus, õpingute jooksul omandatud teadmised ja oskused.</p>
                </div>
                <img className='i1' src={ivkhk} />
            </div>

        </div>
    );
}

export default Home;
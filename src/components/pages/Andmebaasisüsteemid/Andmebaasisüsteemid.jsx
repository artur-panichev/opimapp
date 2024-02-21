import '../Pages.css'

function Andmebaasisüsteemid(){
    return(
        <div className="page">
            <h1>Andmebaasisüsteemid</h1>

            <div className="textBox">
                <h2>Mooduli kirjeldus</h2>
                <p><strong>Mooduli maht</strong> - 12 EKAP</p>
                <p><strong>Mooduli eesmärk</strong> - õpetusega taotletakse, et õpilane loob lihtsa relatsioonilise andmebaasi lähtuvalt ülesande püstitusest ning oskab kasutada vastavaid päringukeeli andmete lisamiseks, muutmiseks ja leidmiseks.</p>
                <h3>Õpiväljundid</h3>
                <p><strong>ÕV1</strong> - mõistab andmebaaside mõistet ja kohta erineva struktuuriga infosüsteemides ja tunneb erinevate andmebaasimootorite ja –tehnoloogiate erinevusi;</p>
                <p><strong>ÕV2</strong> - valib sobiva andmetüübi, loob andmebaasi andmetabeleid ja teeb nendes vajadusel muudatusi lähtuvalt parimatest praktikatest (sh normaliseerimine, indekseerimine) ;</p>
                <p><strong>ÕV3</strong> - kasutab päringukeelt (sh matemaatika- ja loogika tehteid ning funktsioone) andmete sisestamiseks, muutmiseks, väljastamiseks ja andmebaasi struktuuri muutmiseks ning kasutajate halduseks;</p>
                <p><strong>ÕV4</strong> - järgib andmebaasi turvalisuse (sh terviklikkus ja ligipääsuõigused) tagamise põhimõtteid ja parimaid praktikaid;</p>
                <p><strong>ÕV5</strong> - rakendab andmebaase statistiliste ja reaalseid protsesse iseloomustavate andmete kogumiseks, talletamiseks ja töötlemiseks;</p>
                <p><strong>ÕV6</strong> - teostab andmebaasiserveri haldustegevusi, kasutades nii käsurida kui graafilist kasutajaliidest;</p>
                <p><strong>ÕV7</strong> - kasutab õppe- ja ingliskeelset andmebaaside terminoloogiat.</p>
            </div>

            <div className="box">
                <div className="textCenter">
                    <h2>Esitlus "Microsoft Access" (HÜ 1.2)</h2>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQu0sojBq2y3xQH9Aw2p6r5zXabSqjIAaEJPrDVrJMji4XvFbYruM4phyWAy4CJBw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="500" height="300" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </div>
            <div className="box">
                <div className="textCenter">
                    <h2>Esitlus "Firebase" (HÜ 1.3)</h2>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSRhxlv7EdcI6WZsTNv0hy0ImBfzV1CWU6UqrOUPoP4sjW6HaWJh27XhHPoTkamDA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="500" height="300" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </div>
            <div className="box">
                <div className="textCenter">
                    <h2>Andmebaasi päringud (HÜ 2.5)</h2>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vQhrQ9p1ekvU039InNskJTwXQnDwpsH0ynBSeoiqdjlwh8hBzHjAIA5MnK01yGgcg/pub?embedded=true" width="500px" height="300px"></iframe>
                </div>
            </div>

        </div>
    );
}

export default Andmebaasisüsteemid;
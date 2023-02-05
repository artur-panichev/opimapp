import '../Pages.css'

function Digioskused(){
    return(
        <div className="page">
            <h1>Digioskuste kujundamine</h1>
            <hr />
            <h3>
                Õpimapp | Artur Panitšev
            </h3>

            <div className="box">
                <div>
                    <h1 className='textCenter'>Sõnastik</h1>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vQxyaf5uVfjY7PZeFZ8-pSIItReiEjxwbLMhdUJdOurkN-uMvSnp9HHzre3PNwdLQ/pub?embedded=true" width="500px" height="300px"></iframe>
                </div>
            </div>

            <div className="box">
                <div>
                    <h1 className='textCenter'>Esitlus "Minu lemmik arvuti mäng"</h1>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQwzPuUL_0lmcrrOe6Ct01bTWLuCVu1-yNSVuFY2K12OPqETDVhLoVOodl95pTIIA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="500" height="300" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </div>

            <div className="box">
                <div>
                    <h1 className='textCenter'>Referaat "Tervislik eluviis"</h1>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vSZthyu7Dbi5cjg5QyXIeN84EgehETG0CkkqJHsOl-p2msH2qI9xhGT7Hwnku-8_w/pub?embedded=true" width="500px" height="300px"></iframe>
                </div>
            </div>
            <div className="box">
                <div className='textCenter'>
                    <h1 className='textCenter'>Reisibüroo veebisait</h1>
                    <a href="https://sites.google.com/view/bignametourism/" target="_blank">https://sites.google.com/view/bignametourism/</a>
                </div>
            </div>
        </div>
    );
}

export default Digioskused;
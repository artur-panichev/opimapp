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
                    <iframe src="https://ivkhk-my.sharepoint.com/personal/artur_panitsev_ivkhk_ee/_layouts/15/Doc.aspx?sourcedoc={a8ddbafe-0372-47b9-96b9-c589a9e868da}&amp;action=embedview&amp;wdPrint=0&amp;wdEmbedCode=0" width="476px" height="288px"></iframe>
                </div>
            </div>

            <div className="box">
                <div>
                    <h1 className='textCenter'>Esitlus "Minu lemmik arvuti mäng"</h1>
                    <iframe src="https://ivkhk-my.sharepoint.com/personal/artur_panitsev_ivkhk_ee/_layouts/15/Doc.aspx?sourcedoc={842b4fa1-b1bc-42a6-955a-71b932bda823}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="476px" height="288px"></iframe>
                </div>
            </div>

            <div className="box">
                <div>
                    <h1 className='textCenter'>Referaat "Tervislik eluviis"</h1>
                    <iframe src="https://ivkhk-my.sharepoint.com/personal/artur_panitsev_ivkhk_ee/_layouts/15/Doc.aspx?sourcedoc={ebad36d9-e85b-435a-9776-d5af869081b1}&amp;action=embedview&amp;wdPrint=0" width="476px" height="288px"></iframe>
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
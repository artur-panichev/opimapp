import { Link } from 'react-router-dom';

import './Notfound.css'

function Notfound(){
    return(
        <div id="Notfound">
            <h1>404</h1>
            <p>Lehte ei leitud!</p>
            <Link to="/">Mine kodulehele</Link>
        </div>
    );
}

export default Notfound;
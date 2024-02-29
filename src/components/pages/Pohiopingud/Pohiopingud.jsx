import { Link } from 'react-router-dom';
import '../Pages.css';
import './Pohiopingud.css';

export default function Pohiopingud() {
  return (
	<div className='page pohiopingud'>
		<h1>Õppeained</h1>
		<div className="textCenter">
			<Link to="/progalused">Progremmeerimise alused</Link>
			<Link to="/it1">IT valdkonna alusteadmised 1</Link>
			<Link to="/it2">IT valdkonna alusteadmised 2</Link>
			{/* <Link to="/digioskused">Digioskuste kujundamine</Link> */}
			<Link to="/andmebaasid">Andmebaasisüsteemid</Link>
			<Link to="/prog2">Programmeerimine II</Link>
		</div>
	</div>
  )
}

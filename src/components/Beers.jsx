import Beer from './Beer.jsx';

function Beers(props) { //props, properties, mert ez nem parameter --> a beersList amit beküldtünk ide
    console.log(props.beersList);
    return (
        <div className="beers">
            {props.beersList.map(beer => <Beer beerInfo={beer} />)}
            {/* randomNumber={10} */}
            {/* {title, sub, text, img} */}
        </div>
    );
}

export default Beers;
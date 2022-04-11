import Beer from './Beer.jsx';

function Beers({list}) { //props, properties, mert ez nem parameter --> a beersList amit beküldtünk ide
    const a = 10;
    console.log(<Beer info={list[0]} key={100} />);
    return (
        <div className="beers">
            {list.map((beer, index) => <Beer info={beer} rndNbr={a} key={index} />)}
        </div>
    );
}

export default Beers;
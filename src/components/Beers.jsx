import Beer from './Beer.jsx';

function Beers({list}) { //props, properties, mert ez nem parameter --> a beersList amit beküldtünk ide
    // console.log(list);
    return (
        <div className="beers">
            {list.map((beer, index) => <Beer info={beer} key={index} />)}
        </div>
    );
}

export default Beers;
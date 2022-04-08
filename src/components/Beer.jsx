// import dear from '../image/ozike.jpg';

// function importAll(requiredContext) {
//     let images = {};
//     requiredContext.keys().map((item) => { images[item.replace('./', '')] = requiredContext(item); });
//     return images;
// }
// const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));



function Beer ( {info} ) {
    const {title, sub, text, img } = info;
     return (
        <div className="beer">
              {/* <img src={images['doggy.png']} /> */}
              <img src={require('../image/ozike.jpg')} />
            <h2>{title}</h2>
            <p className="sub">{sub}</p>
            <p className="text">{text}</p>
        </div>
     );
}

export default Beer;
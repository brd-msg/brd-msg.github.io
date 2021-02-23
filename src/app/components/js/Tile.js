import '../css/Tile.css'


const Tile = (props) => {
    
    return (
        // <div className="wrap">
            <div className={`tile ${props.className}`} onClick={props.onClick}>
                <img src={`${props.imgSrc}`} alt='company img'/>
                <div className="text">
                    <h1>{props.title}</h1>
                    <h2 className="animate-text">{props.header}</h2>
                    <p className="animate-text">{props.mainText}</p>
                </div>
            </div>
        // </div>
    );
};

export default Tile;
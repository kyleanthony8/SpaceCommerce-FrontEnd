import "./styles.css"

const Item = (props) => (
  <div className="item-container">
    <div className="item-image">
      <img className="item-image-src" src={props.img}/>
      <div className="item-details">
        <h3 className="item-name"> {props.name} </h3>
        <h2 className="item-price"> {props.price} BTC</h2>
      </div>
    </div>
  </div>
);

export default Item;
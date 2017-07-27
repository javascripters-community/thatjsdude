import React, {Component} from 'react';
import './ShopItem.css';
import Rating from 'react-rating';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class ShopItem extends Component {
  addToCartHandler() {
    this.props.updateOrderSummary(this.props.item);
  }
  render () {
    const item = this.props.item;
    return (
      <li className="item">
        <div className="image-container">
          <img src={item.img} alt={item.name}/>
        </div>
        <div className="item-details">
          <h1>{item.name}</h1>
          <Rating
            className="ratings"    
            empty="fa fa-star-o"
            full="fa fa-star"
            placeholder="fa fa-star"
            placeholderRate={item.star}
            readonly
          ></Rating>
          <p>by: {item.seller}</p>
          <div className="l-display-flex">
            <div className="half-width">
              <p className="l-margin-top">${item.price}</p>
              <p>only {item.stock} left in stock - order soon</p>
            </div>
            { item.features.length > 0 &&
              <div className="half-width">
                <h2>Features</h2>
                <ul>
                  {
                    item.features.map(feature => <li key={feature.description}>{feature.description}:{feature.value}</li>)
                  }
                </ul>
              </div>
            }
          </div>
          <button onClick={this.addToCartHandler.bind(this)}>Add to cart</button>
        </div>
      </li>
    );
  }
}

export default ShopItem;
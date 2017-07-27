import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Mocks from './mocks';
import ShopItem from './components/ShopItem/ShopItem';
import OrderSummary from './components/OrderSummary/OrderSummary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items:[],
      orderSummaryDetails: {
        noOfItems: 0,
        itemsValue: 0,
        shipping: 0,
        totalBeforeTax: 0,
        tax: 0,
        orderTotal: 0
      }
    }
    this.updateOrderSummary.bind(this);
  }
  componentDidMount() {
    var firstTenItems = Mocks.slice(0,10);
    this.setState({
      items: firstTenItems
    });
  }
  updateOrderSummary(item) {
    var orderSummaryDetails = this.state.orderSummaryDetails;
    var newNoOfItems = orderSummaryDetails.noOfItems + 1;
    var newItemsValue = orderSummaryDetails.itemsValue + item.price;
    var newShipping = orderSummaryDetails.shipping + item.shipping;
    var newTotalBeforeTax = newItemsValue + newShipping;
    var newTax = .10 * newTotalBeforeTax;
    var newOrderTotal = newTotalBeforeTax + newTax;
    this.setState({
      orderSummaryDetails: {
        noOfItems: newNoOfItems,
        itemsValue: +newItemsValue.toFixed(2),
        shipping: +newShipping.toFixed(2),
        totalBeforeTax: +newTotalBeforeTax.toFixed(2),
        tax: +newTax.toFixed(2),
        orderTotal: +newOrderTotal.toFixed(2)
      }
    });
  }
  render() {
    const items = this.state.items;
    return (
      <div className="ema-john-app">
        <Header></Header>
        <div className="container shopping-page-section">
          <section className="shop-items">
            <ul className="list-remove-defaults">
              {
                items.map(item => <ShopItem key={item.key} item={item} updateOrderSummary={this.updateOrderSummary.bind(this)}></ShopItem>)
              }
            </ul>
          </section>
          <OrderSummary orderSummaryDetails={this.state.orderSummaryDetails}></OrderSummary>
        </div>
      </div>
    );
  }
}

export default App;

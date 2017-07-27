import React, {Component} from 'react';
import './OrderSummary.css';

class OrderSummary extends Component {
    render() {
        const orderSummaryDetails = this.props.orderSummaryDetails;
        return (
            <section className="order-summary">
                <h3>Order Summary</h3>
                <p>Items ordered: {orderSummaryDetails.noOfItems}</p>
                <dl>
                    <dt>Items:</dt>    
                    <dd>${orderSummaryDetails.itemsValue}</dd>
                    <dt>Shipping & handling:</dt>
                    <dd>${orderSummaryDetails.shipping}</dd>
                    <dt>Total before tax:</dt>
                    <dd>${orderSummaryDetails.totalBeforeTax}</dd>
                    <dt>Estimated tax:</dt>
                    <dd>${orderSummaryDetails.tax}</dd>
                    <dt>Order total:</dt>
                    <dd>${orderSummaryDetails.orderTotal}</dd>
                </dl>
            </section>
        );
    }
}

export default OrderSummary;
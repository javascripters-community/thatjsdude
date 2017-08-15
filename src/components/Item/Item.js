import React, { Component } from 'react';

//import item css
import './Item.css';

class Item extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="Item">
                <img src={`${this.props.imageBaseUrl}${this.props.hotellist.cldImage.url}`} alt={`${this.props.hotellist.cldImage.caption}`} />
                <div className="Item-Details">
                    <h3 className="Item-Titel">{this.props.hotellist.n}</h3>
                    <div className="Item-Location">
                        <small>
                            <span>{this.props.hotellist.loc.a}</span>,
                            <span> {this.props.hotellist.loc.c}</span>
                        </small>
                    </div>
                    <div className="Item-Price">                        
                        <button>Select Room</button>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Item;
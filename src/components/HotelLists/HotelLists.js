import React, { Component } from 'react';

import './HotelLists.css';
import Item from '../Item/Item';
import hotelList from '../../fakeData/hotels';

class HotelLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels:[],
            baseUrl:''
        };
    }
    componentDidMount(){
        var firstPageData =  hotelList.content.hotels.slice(0,10);
        var imageBaseUrl = hotelList.content.cldImageHost;
        console.log(firstPageData);
        this.setState({
            hotels:firstPageData,
            baseUrl:imageBaseUrl
        })
    }
    render() {
        return (
            <div className="Hotel-Lists">
                {
                    this.state.hotels.map(hotel =><Item key={hotel.id} hotellist={hotel} imageBaseUrl={this.state.baseUrl}></Item>)
                }
            </div>
        );
    }
}

export default HotelLists;
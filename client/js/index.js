/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../components/Container.jsx';
import {data} from '../fake-data/data.js';

ReactDOM.render(
	<Container data={data}/>, 
	document.getElementById('root')
);

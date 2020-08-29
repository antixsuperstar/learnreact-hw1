import React from 'react';
import './UserOutput.css';

const UserOutput = props => (
	<div className="output">
		<p>Input: {props.username}</p>
		<p style={{color: 'blue'}}>{ props.p1 }</p>
		<p>{ props.p2 }</p>
	</div>
);

export default UserOutput;
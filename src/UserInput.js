import React from 'react';

const UserInput = props => (
	<input type="text"
	       autoFocus
	       placeholder="username"
	       onChange={props.changed}
	       value={props.default}
	/>
);

export default UserInput;
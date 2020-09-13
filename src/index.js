import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import Demo from './Demo'
//import Avatarlist from './Avatarlist'
import Button from './Button'
import Avatar from './Avatar'
import * as serviceWorker from './serviceWorker';
import Avatarlist from './Avatarlist';

//props are somewhat like properties
// render means show
ReactDOM.render(<div>
                    <Avatar/>
                    <Button/>
                    </div>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

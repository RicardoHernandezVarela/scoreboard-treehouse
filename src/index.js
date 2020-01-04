import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/* Import context */
import { Provider } from './context/context';

/* Import css */
import './index.css';

/* Import components */
import App from './components/App';



ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
import { HelloWorld, OtroComponente } from './HelloWorld';



ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <HelloWorld />
            <OtroComponente />
            <FirstApp/>
        </React.StrictMode>

    );
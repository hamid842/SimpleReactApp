// React => is a javascript library for building user interfaces
// Component => is a peice of the UI
// React application is a tree of components


import React from 'react';           // import a couple of Objects from some modules
import ReactDOM from 'react-dom';

const element = <h1>Hello there</h1>;  // JSX expression
ReactDOM.render(element , document.getElementById('root'));

// when don't need to run npm on every change of code . 
// when save the code and refresh the browser can see the changes .
// It's called "Hot-Module-Reloading"





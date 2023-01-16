import React from "react";
const HelloJSX =() => {
    return React.createElement('div', {id: 'Hello', className: 'JSX', placeholder: 'hello'}, React.createElement('h1', null, 'Hello JSX'))

}

export default HelloJSX
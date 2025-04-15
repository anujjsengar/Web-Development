import React from 'react';

function Person(){
    return (
        <div>
            <h1>Hello World! Person</h1>
        </div>
    )
}

function Papa(){
    return(
        <div>
            Love you PAPA
        </div>
    )
}

// export default Person; //Default export should always be one and can be call by anyname in app.jsx

export {Person,Papa}; 
import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='wrapper'>
           <div class="lds-grid "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loading;

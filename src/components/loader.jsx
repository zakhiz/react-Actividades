import React from 'react';
import { Pulsar } from '@uiball/loaders'



const Loader = () => {
    return (
      <div className='load'>
    <Pulsar 
        size={100}
        speed={1.90} 
        color="black"  
        className="loadImage"/>
     </div>
    );
};

export default Loader;


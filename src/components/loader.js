import React from 'react';
import { MrMiyagi } from '@uiball/loaders'


const Loader = () => {
    return (
      <div className='load'>
    <MrMiyagi 
      size={100}
      speed={1.4} 
      color="black" 
     />
     </div>
    );
};

export default Loader;

import React, { useEffect, useState } from 'react';
import ImmobileContext from './ImmobileContext';
import PropTypes from 'prop-types';
import { imoveis } from '../data/data'
export default function Provider ({children}) {   
  const [filterImmobiles, setFilterImmobiles] = useState(imoveis)

  function filterValueByType({ target }) {
    const value = target.value; 
    const filterImmobile = imoveis.filter((item) => item.category === value);

    if(!target.checked) {
      return setFilterImmobiles(imoveis)
    }
    if(target.value) {
      return setFilterImmobiles(filterImmobile)
    }       
  }    

  useEffect(() => {  
  },[filterImmobiles])
    
  const state = {
    filterImmobiles,
    setFilterImmobiles,
    filterValueByType
  }

  return <ImmobileContext.Provider value={state}>{ children }</ImmobileContext.Provider>
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
};
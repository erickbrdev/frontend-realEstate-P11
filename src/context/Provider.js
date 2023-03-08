import React, { useEffect, useState } from 'react';
import ImmobileContext from './ImmobileContext';
import PropTypes from 'prop-types';
import { imoveis } from '../data/data'
export default function Provider ({children}) {   
  const [filterImmobiles, setFilterImmobiles] = useState(imoveis);
  const [detailsPropety, setDetailsProperty] = useState({}); 

  function renderDetailsProperty(id) {
    setDetailsProperty(imoveis.find(property => property.id === id))    
  }  
  console.log(detailsPropety)

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
    detailsPropety,
    renderDetailsProperty,
    filterImmobiles,
    setFilterImmobiles,
    filterValueByType
  }

  return <ImmobileContext.Provider value={ state }>{ children }</ImmobileContext.Provider>
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
};
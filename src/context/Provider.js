import React, { useEffect, useState } from 'react';
import ImmobileContext from './ImmobileContext';
import PropTypes from 'prop-types';
import imoveis from '../data/dataList';

function codeByImmobile(code) {
  if(!code) {
    window.alert('Insira um código válido')
    return null
  }
  if(code.length < 5 || code.length > 6) {
    window.alert('Código do imóvel é formado por 5 números')
    return null
  }
}
export default function Provider (children) { 
  const [filterImmobiles, setFilterImmobiles] = useState(imoveis)
  const [codeImmobile, setCodeImmobile] = useState('');

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

  function filterImmobileByCode(code) {
    return filterImmobiles.map((immobile) => {
      return immobile.code === code
    })    
  }

  useEffect(() => {
    
  },[])
    
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
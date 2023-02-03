import React, { useEffect, useStatus } from 'react'
import ImmobileContext from './ImmobileContext'
import PropTypes from 'prop-types'

// export function filterImmobile();

export default function Provider (children) {
  const [immobile, setImmobile] = useStatus([]);

  const state = {
    immobile,
    setImmobile
  }

  return <ImmobileContext.Provider value={state}>{ children }</ImmobileContext.Provider>
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
};
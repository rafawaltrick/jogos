import { useContext } from 'react';
import { Contexto } from '../contexts';
import React from 'react';

function useContexto() {
  const context = useContext(Contexto);
  return context;
}

export default useContexto;

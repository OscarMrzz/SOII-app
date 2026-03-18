import React from 'react'
import BotonFavorito from './UI/Botones/BotonFavorito'
import BotonHome from './UI/Botones/BotonHome'
import BotonBuscar from './UI/Botones/BotonBuscar'

export default function FooterComponet() {
  return (
    <div className='bg-slate-300 h-32 shadow border-2 border-slate-100 flex justify-between items-center px-4'>
      <BotonFavorito />
      <BotonHome />
      <BotonBuscar />
    
      
      
    </div>
  )
}

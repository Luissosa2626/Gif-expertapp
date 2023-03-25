import React, { useEffect, useState } from 'react'
import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    // CUSTOM HOOK
    const { images, isLoading} = useFetchGifs(category)
    
  return (
    <>
        <h3>{category}</h3>
        {
            isLoading ? (<h2>Cargando...</h2>): null
        }
        <div>
            {
                images.map(img => (
                    <GifItem 
                        key={img.id}
                        // Esparcir todas las propiedades que tiene la clase con el spread operator
                        // Y las tomo en GifItem con argumentos desestructurados ({url, id, title})
                        {...img}    
                    />
                 ))
            }
        </div>
    </>
  )
}

export default GifGrid

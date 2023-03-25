// Escribi rafc para crear este componente

import React, { useState } from 'react'
import AddCategory from './component/AddCategory'
import GifGrid from './component/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']) //Inicializar el hook como un arreglo
    
    const onAddCategory = (newCategory) => {

        // console.log(newCategory);

        //Si la categoria existe no has nada. Es decir, si incluye un valor que ya esta en el arreglo
        if( categories.includes(newCategory) ) return; 

        // Formas de Agregar nuevo elemento a un arreglo en react
        setCategories([newCategory, ...categories])
        // setCategories(cat => [...cat, 'Valorant'])
    }

  return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory
            onNewCategory={ e => onAddCategory(e) }
        />

        {/* Listado de Gifs */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
            {categories.map( category => {
                return (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                )
            })}
            {/* Gif Items */}
    </>
  )
}

export default GifExpertApp

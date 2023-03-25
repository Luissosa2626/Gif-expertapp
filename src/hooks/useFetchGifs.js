import React, { useEffect } from 'react'
import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([true])

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect( ()=> {   //Se usa para evitar que se llamen mas de una de manera innecesaria una peticion
       getImages()
    }, []) //Si esta vacio el arreglo significa que solo se dispara una vez este Hook


    return {
        images, //es lo mismo que images:images
        isLoading
    }
}

export default useFetchGifs

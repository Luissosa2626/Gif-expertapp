import React, { useState } from 'react'

const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = e => {
        console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length <= 1) return;
        
        // setCategories(categories => [...categories, inputValue])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={e => onSubmit(e)}>
    <input
        type="text"
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={onInputChange}
    />
    </form>
  )
}

export default AddCategory

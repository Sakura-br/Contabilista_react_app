import React, {useState} from 'react'
import InputForm from './InputForm'
import Lists from './Lists'
import Title from './Title'

const Create = () => {
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <div className='inputForm'>
      <Title />
      <InputForm shoppingList={shoppingList} setShoppingList={setShoppingList} />
      <Lists shoppingList={shoppingList} setShoppingList={setShoppingList} />
    </div>
  )
}

export default Create
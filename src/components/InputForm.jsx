import React, {useState} from 'react'

const InputForm = ({shoppingList, setShoppingList}) => {

  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
        e.preventDefault();
  }

  const handleChange = (e) => {
        setInputText(e.target.value);
        console.log(inputText);
  }
 
  return (
    <div className='inputForm'>
        <form onSubmit={handleSubmit}>
        {/* <form action='/action_page.php'> */}
            <div className='form-group'>
                <label for='text'>Item</label>
                <input type='text' onChange={handleChange} className='ItemForm' id='' />
            </div>
                <div className='form-group'>
                <label for='text'>Grupo</label>
                <input type='text' className='GroupForm' id='' />
            </div>
                <button type='submit' className='btn btn-default'>Adicionar</button>
        </form>
    </div>
  )
}

export default InputForm
import React from 'react'

const Lists = ({shoppingList, setShoppingList}) => {
    return (
      <div className='shoppingList'>
          {shoppingList.map((shopping, index) => (
              <div className='Lists'>
              <div className='List' key={index}>
                  <div className='listItem'>
                      <span>{shopping.text}</span>
                  </div>
                  <div className='icons'>
                  <button>
                      <i className="fa-solid fa-trash-can"></i>
                  </button>
                  </div>
              </div>
          </div>
          ))}
      </div>
    )
  }

export default Lists
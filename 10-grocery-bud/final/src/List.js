import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({list}) => {
  return (
    <div className='grocery-list'>
    {list.map(item =>{
      const {id, title} = item;
      return (
        <div className='grocery-item' key={id}>
          <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <i className="fas fa-edit"><FaEdit/></i>
              </button>
              <button type="button" className="delete-btn">
                <i className="fas fa-trash"><FaTrash/></i>
              </button>
            </div>
        </div>
      )
    })}
        </div>
  )
}

export default List

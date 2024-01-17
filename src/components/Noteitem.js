import React from 'react'

function Noteitem(props) {
    const {note} = props
  return (
    <div className='col-md-3'>
    <div class="card my-3">
  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, fugiat. Eum recusandae veniam magnam dicta earum ratione doloribus officia magni.</p>
    <i class="fa-regular fa-trash-can mx-2"></i>
    <i class="fa-regular fa-pen-to-square mx-2"></i>
 
  </div>
</div>
</div>
  )
}

export default Noteitem

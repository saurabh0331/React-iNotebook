
import React , {useContext} from 'react'
import noteContext from '../context/notes/notecontext'
import Noteitem from './Noteitem';
function Notes() {
    const Context = useContext(noteContext);
    const {notes} = Context
  return (
    <div className='row my-3'>
        <h1>Your Notes</h1>
     {notes.map((note)=>{
      return <Noteitem note={note}/>
     })}
    </div>
   
  )
 
}

export default Notes

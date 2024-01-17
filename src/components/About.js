import {  React , useContext, useEffect } from 'react'
import NoteContext from '../context/notes/notecontext'
export default function About() {
  const a = useContext(NoteContext);
 
  useEffect(()=>{
    a.Update();
    // eslint-disable-next-line
  } , [])
 
  return (
    <div>
      The name of the person is {a.state.name} and his age is {a.state.age}
    </div>
  )
}

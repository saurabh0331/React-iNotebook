import { useState } from "react";
import NoteContext from "./notecontext";

const Notestate = (props) =>{
   const initialnotes = [{
    "title" : "This is the new Era",
    "email" : "Rupali8799@gmail.com",
    "password" : "Rupali8799"
  },
  {
    "title" : "saurabh sidram patil",
    "email" : "saurabh8799@gmail.com",
    "password" : "saurabhdada8799"
  },

  {
    "title" : "saurabh sidram patil",
    "email" : "saurabh8799@gmail.com",
    "password" : "saurabhdada8799"
  },

  {
    "title" : "saurabh sidram patil",
    "email" : "saurabh8799@gmail.com",
    "password" : "saurabhdada8799"
  },

  {
    "title" : "saurabh sidram patil",
    "email" : "saurabh8799@gmail.com",
    "password" : "saurabhdada8799"
  },

  {
    "title" : "saurabh sidram patil",
    "email" : "saurabh8799@gmail.com",
    "password" : "saurabhdada8799"
  },

  {
    "title" : "saurabh sidram patil",
    "email" : "saurabh8799@gmail.com",
    "password" : "saurabhdada8799"
  },
  {
    "title" : "saurabh sidram patil",
    "email" : "saurabh8799@gmail.com",
    "password" : "saurabhdada8799"
  }

  
  
  
]
   const [notes, setnotes] = useState(initialnotes)

   return(
     <NoteContext.Provider value={{notes , setnotes}}>
         {props.children}
    </NoteContext.Provider>
   )
    
}


export default Notestate
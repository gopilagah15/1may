import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
  const {showAlert} = props
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const {note,updateNote} = props
  return (
   <>
    <div className="col-md-3 card1" > 
         <div className="card-body ">
          <div className="d-flex align-items-center" >
        <h2 className="card-title hfive" style={{'font-weight':'bold','font-weight':'1000'}}>{note.title}</h2>
        
        </div>
        <p className="card-text hfive">{note.description}</p> 

        <div className="d-flex align-items-center justify-content-center" >
        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id);
        showAlert('Note deleted successfullt', 'success')}}></i>
        <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
        </div>
  </div>
</div>
   </>
  )
}

export default Noteitem

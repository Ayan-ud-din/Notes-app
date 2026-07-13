import { Bookmark, Delete } from 'lucide-react';
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState("")

  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])


  const submitHandler = (e) => {

    e.preventDefault()

    const newTask = [...task]
    newTask.push({title, details})
    setTask(newTask)

   
   

    setTitle("")
    setDetails("")

  }

  const deleteNote = (idx)=>{

let copyTask=[...task]
copyTask.splice(idx,1)
setTask(copyTask)


  }


  return (



    <div className="container ">
      <div className=' row'><div className="first-sec col-sm-6 col-md-6 col-lg-6 col-12">
        <div className="heading"><h1>NOTES APP </h1>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/023/492/712/small/3d-notes-icon-png.png" height={"80px"} alt="" /></div>

        <form onSubmit={
          (e) => { submitHandler(e) }
        }>

          <input type="text" placeholder='Enter Notes Heading' value={
            title} onChange={(e) => {
              setTitle(e.target.value)
            }} />

          <textarea type="text" placeholder='    Enter Notes Description' value={details}
            onChange={(e) => { setDetails(e.target.value) }} />

          <button className='btn-1'>Save Note    <Bookmark className='bk' /></button>


        </form>
      </div>
        <div className="side-section  col-sm-6 col-md-6 col-lg-6 col-12 ">

          <div className="heading-2"><h1>Preview your notes</h1></div>



      

 <div className="note-parent">

  {task.map(function (elem,idx)  {
     return   (
    <div className="notes" key={idx}>
            
             
 
             
                <div className="delete"><button id='delete-btn'onClick={()=>{
                  deleteNote(idx)
                }} >X</button></div>
                <div className="note-head">{elem.title}</div>
                <div className="note-para">{elem.details}</div>
             

              
           
 </div>)
  })}


         </div>


  

        </div>
      </div></div>
  )
}

export default App

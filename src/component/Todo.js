import React,{useState} from 'react';
// import './App.css';

function Todo() {
  const [item,setItem] = useState('');
  const [itema,setItema] = useState([]);
  const onch =(e)=>{
    setItem(e.target.value);
 
  };
  const additem =()=>{
    setItema([...itema,item])
  }
const delal=()=>{
    setItema([]);
}
  const delit = (id) =>{
 const updtd = itema.filter((elem,ind)=> {
return (ind !== id)})
setItema(updtd)
 }

  return (
    <>
     <div className ="main">
       <div className = "center">
         <br/>
         <h2>TO-DO LIST 📑</h2>
         <hr/>

         <div className ="additem">
         <input type="text" placeholder= "✍️ Add items" value={item} onChange={onch}/>
         <button onClick={additem}><i className ="fas fa-plus add-btn"></i></button>
         </div>

         <div className= "showitem">
             {
                 itema.map((elem,ind)=>{
                     return(
                    <div className ='eachitem'>
                    <h3>
                        {elem}
                    </h3>
                   <button> <i className="fas fa-trash add-btn" title="delete" onClick ={ ()=>delit(ind)}></i></button>
                </div>
                 )})
             }
            
         </div>
         <div class='showitems'>
             <button className="checkbtn" data-sm-link-test="remove" onClick={delal}>List</button>
         </div>

             {/* <ol>
               <li>{item}</li>
             </ol> */}

       </div>
     </div>
    </>
  );
}

export default Todo;

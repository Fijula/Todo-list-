import React ,{useState} from "react";

import './App.css';
import Axios from "axios";


function App() {
  const [query,setquery] = useState("");
 const [recipes, setrecipe] = useState([]);
 const [healthy, sethealthy] = useState("vegan")
  var url =  `https://api.edamam.com/search?q=${query}&app_id=dd4ecc8b&app_key=
    a894cb15cbddefc274480843df5bbf69&health=${healthy}`;
    async function getRecipes(){
      var result = await Axios.get(url);
      setrecipe(result.data.hits)
      console.log(result.data);

    }
    const onchange = (e) =>
    {
      setquery(e.target.value)
}
    const onSubmit= (e)=>{
   
      e.preventDefault();
      getRecipes();
      // setquery("");
    }



  return (
    <>
        <div className ="main">
     <h1 >Food Recipes 🍛</h1>
     <form className="formy" onSubmit={ onSubmit } >
       <input className="inputy" type= "text" placeholder="Enter Ingredients" value ={query} 
       onChange={onchange}/>
       <input className="submitf" type="submit" value="search"/>
       <select className='selecty' >
         <option onClick={()=>sethealthy("vegan")}>vegan</option>
         <option onClick={()=>sethealthy("vegtarian")}>vegeterian</option>
         <option onClick={()=>sethealthy("diary-free")}>diary-free</option>
         <option onClick={()=>sethealthy("gluten-free")}>gluten-free</option>
         <option onClick={()=>sethealthy("wheat-free")}>wheat-free</option>
         <option onClick={()=>sethealthy("low-sugar")}>low=sugar</option>

       </select>
                   </form>
 
{/* use the following if needed to check if images are mathcing the following: .match(/\.(jpeg|jpg|gif|png)$/)!=null */}
    <div className="recipes_main" >
      {
        recipes.map(recipe =>
          <div>
          <img className ="images" src={recipe["recipe"]["image"]}/>
          <h5 className="title">{recipe["recipe"]["label"]}</h5>
          </div>
      )       
      }
    </div>
    </div>
  </>
  )
}

export default App


import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetcActivityes, HandleClick,showClick } from "./features/fetchSlice"
import './App.css';


function App() {
const{activeAr,loading,error,click,details,buttonDetails}=useSelector((state)=>state.activity)

const dispatch=useDispatch()
useEffect(()=>{
  if(click>0){

    dispatch(fetcActivityes())
  }
  
  
  
},[click,dispatch])



console.log(activeAr)
  return (
    <>
     <h1 className="title">Activity Generator</h1>
     <button   className="generate-button"  onClick={()=>dispatch(HandleClick())}>Generate</button>

     {loading? <p className="loading" > Yükleniyor...</p>:null}
     {error?<p className="error">Bir Hata Oluştu</p>:null}
     {activeAr.map((actives)=>{
      const {accessibility,activity,key,link,participants,price,type}=actives
      
      const isDetailVisible = buttonDetails[key];
      return (
        <div  className="activity-card"  key={key}>
            <h3 className="activity-title" >{actives.activity}</h3>
            <button className="details-button" onClick={() => dispatch(showClick(key))}>Details</button>
            

              {isDetailVisible && (
                <ul className="details-list" >
                <li>{accessibility}</li>
                <li>{activity}</li>
                <li><a href={link}>Link</a></li>
                <li>{participants}</li>
                <li>{price}</li>
                <li>{type}</li>
                </ul>
              )}
          
        </div>
    );


     })}
    </>
  )
}

export default App

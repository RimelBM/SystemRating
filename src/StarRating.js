import React , {useState}from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating = () =>

{  const[rating,setRating] = useState(null);
    const [hove,setHover] = useState(null)
    return (
        <div><div >
            { [...Array(5)].map((star , i) => 
    
    {  const ratingValue = i+1 ;
      
      return(
      <label>
        
        <input 
            type='radio' 
            name='rating' 
            style={{display:'none'}} 
            value={ratingValue}
            onClick={()=>setRating(ratingValue)}
            
             />

        <FaStar 
             color={ratingValue <= (hove || rating)  ? 'red':'grey' }
             onMouseOver={()=>setHover(ratingValue)}
             onMouseOut={()=>setHover(null)}/>
        
      </label>
      
      
      ); }) }
        </div>
        <div style={{fontSize:'22px' ,fontFamily:'arial' , textAlign:'center'}}>
            
             your Rate is : { rating} </div>
            </div>
    );
};

export default StarRating


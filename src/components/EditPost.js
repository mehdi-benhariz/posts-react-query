import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import {useParams,useHistory} from "react-router-dom"
import { getPost } from "../api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const UpdatePost = () => {
 const {id}=useParams
 const history = useHistory
const {data,isError,isLoading,error} = useQuery(['book',{id}],getPost)
const {mutateAsync,isLoading:isMutation}= useMutation(UpdatePost)
  
const handleSub=async(title,body,uId)=>{
    const data ={id,title,body,userId}
    await mutateAsync({...data,id})
    history.push('/')
}

const [title, settitle] = useState("");
const [body, setbody] = useState("");
const [userId, setuserId] = useState(0);

// if(isError)
// return( <div>there's an error <span>{error} </span> </div>)
// else if(isLoading)
//    return (<div id="loader">  <Loader
//     type="Puff"
//     color="#00BFFF"
//     height={100}
//     width={100}
//     timeout={5000} 
//  /></div>)

return (
    <div id="add-post">
      <form>
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="title"
          id="input"
          value={title}
          onChange={(e)=>settitle(e.target.value)}
        />
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="body"
          id="input"
          value={body}
          onChange={(e) =>setbody( e.target.value)}
        />
        <input
          class="form-control form-control-lg"
          type="number"
          placeholder="userId"
          id="input"
          value={userId}
          onChange={(e) => setuserId(e.target.value)}
        />

        <button type="button" id="btn" class="btn btn-success rounded" 
        onClick={()=> handleSub(title,body,userId)}  >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;

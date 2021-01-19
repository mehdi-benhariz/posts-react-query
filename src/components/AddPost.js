import React, { useState } from "react";
import { useMutation } from "react-query";
import {CreatePost} from "../api"
import {useParams,useHistory} from "react-router-dom"


const AddPost = () => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [userId, setuserId] = useState(0);
  const {mutateAsync,isLoading} = useMutation(CreatePost)
  const history=  useHistory()

  const handleSubmit=async()=>{
    await mutateAsync({id:11,title,body,userId})
    console.log('created')
    history.push('/')
  }
  return (
    <div id="add-post">
      <form onSubmit={handleSubmit}   >
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="title"
          id="input"
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="body"
          id="input"
          onChange={(e) => setbody( e.target.value)}
        />
        <input
          class="form-control form-control-lg"
          type="number"
          placeholder="userId"
          id="input"
          onChange={(e) => setuserId(e.target.value)}
        />

        <button type="button" id="btn" class="btn btn-success rounded" onClick={handleSubmit} >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;

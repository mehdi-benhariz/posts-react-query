import React from 'react'
import {useQuery} from "react-query"
import {getAllPosts} from "../api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Post from './Post';


const PostList = () => {
    let {data,isLoading,isError,isFetched,error} =useQuery('posts',getAllPosts)

   if(isError)
    return( <div>there's an error <span>{error} </span> </div>)
    else if(isLoading)
       return (<div id="loader">  <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000} 
     /></div>)
    return (
        <div>
   {
       [...data.slice(1,10)].map((post)=>{
           return(<Post key={post.id} post={post} />)
       })
   }
   <a href="/add" className="float" id="float" >
   <p id="plus">+</p>
</a>
        </div>
      );
}
 
export default PostList;
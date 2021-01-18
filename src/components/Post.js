import { useMutation, useQueryClient } from "react-query";
import { deletePost } from "../api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Post = ({ post: { id, title, body } }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(deletePost);

  const remove = async (id) => {
    await mutateAsync(id);
    queryClient.invalidateQueries("posts");
  };

  return (
    <div class="card">
      <div class="card-header"></div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{body} .</p>
        <button type="button" class="btn btn-danger" onClick={remove}>
          {isLoading
          ?<Loader type="ThreeDots" color="white" height={80} width={80} />  
          :'delete'}
        </button>
        <button type="button" class="btn btn-warning"><a href={`/edit${id}` } >Edit</a></button>
      </div>
    </div>
  );
};

export default Post;

console.log(process.env.REACT_APP_API_SERVER);
//get all
export const getAllPosts = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}posts`);
  if (!response.ok) throw new Error("can't fetch");
  const data = await response.json();
  return data;
};
//delete a post
export const deletePost = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}posts/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) throw new Error("can't fetch");
  console.log("deleted");
  return true;
};

//create a post
export const AddPost = async (newP) => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}posts`, {
    method: "POST",
    body: JSON.stringify(newP),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  if (!response.ok) throw new Error("can't fetch");
};
//update a post
export const UpdatePost = async ({ id, ...newP }) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}posts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(newP),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));

  if (!response.ok) throw new Error("can't fetch");

  return response.json();
};
//get one post
export const getPost = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  console.log(id.id);
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}posts/${id.id}`,
    { method: "GET" }
  );

  if (!response.ok) throw new Error("can't fetch");
  return await response.json();
};

import React, { useState } from "react";

const AddPost = () => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [userId, setuserId] = useState(0);


  return (
    <div id="add-post">
      <form>
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

        <button type="button" id="btn" class="btn btn-success rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;

import React from 'react';

const Posts = (props) => {
  if (props.loading) {
    return <h2>Loading...Spinner....</h2>;
  }

  return (
    <div class="container">
      <div class="row">
        {props.posts.map(post => {
         return <div key={post.id} class="col-sm col-lg-2 btn-light ml-4 p-5 mb-5">
           <h1 className="w-100"> Title</h1>
            {post.title}
          </div>
        })}

      </div>
    </div>

  );
};

export default Posts;

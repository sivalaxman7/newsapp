import react, { useState } from "react";
import Link from "next/link";


const form = () => {

  const [post, setPost] = useState({
    author: "",
    title: "",
    description: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
    content: "",
    user_id:""
  })
  // const [authID, setAuthID] = useState("");
  // const [author, setAuthor] = useState("");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [url, setUrl] = useState("");
  // const [urlToImage, setUrlToImage] = useState("");
  // const [publishedAt, setPublishedAt] = useState("");
  // const [content, setContent] = useState("");
  const [message, setMessage] = useState("");



  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var axios = require('axios');
      // var data = JSON.stringify({
      //   user_id: authID,
      //   author: author,
      //   title: title,
      //   description: description,
      //   url: url,
      //   urlToImage: urlToImage,
      //   publishedAt: publishedAt,
      //   content: content
      // });

      var config = {
        method: 'post',
        url: 'http://localhost:3000/updateArticle/{id}',
        headers: {
          'Content-Type': 'application/json'
        },
        data: post
      };

      axios(config)
        .then(function (response) {
          if (response.status === 200) {
            // setAuthID("");
            // setAuthor("");
            // setTitle("");
            // setDescription("");
            // setUrl("");
            // setUrlToImage("");
            // setPublishedAt("");
            // setContent("");
            setPost({})
            setMessage("Article Added successfully");
          } else {
            setMessage("Some error occured");
          }
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      
    } catch (err) {
      console.log(err);
    }
  };

  return (<>
    <Link href={"../"}><a className="inner-link" style={{ "color": "black", "backgroundColor": "white", "border": "2px solid lightgray", "margin": "5px", "border-radius": "30px" }}>Back</a></Link>

    <div className=".body" suppressHydrationWarning>

      <div className="contact-box" suppressHydrationWarning>

        <h1 className="formh1">Update Article</h1>

        <form onSubmit={handleSubmit}>

          <input type="text" className="input-field" placeholder="Enter title" value={post.title} onChange={(e) => {setPost({
            ...post,
            title:e.target.value
          })}} />

          <input type="text" className="input-field" placeholder="Enter description" value={post.description} onChange={(e) => {setPost({
            ...post,
            description:e.target.value
          })}} />

          <input type="text" className="input-field" placeholder="Published date and time" value={post.publishedAt} onChange={(e) => {setPost({
            ...post,
            publishedAt:e.target.value
          })}} />

          <input type="text" className="input-field" placeholder="Author" value={post.author} onChange={(e) => {setPost({
            ...post,
            author:e.target.value
          })}} />

          <input type="text" className="input-field" placeholder="Author-ID" value={post.user_id} onChange={(e) => {setPost({
            ...post,
            user_id:e.target.value
          })}} />

          <input type="text" className="input-field" placeholder="URL to original source" value={post.url} onChange={(e) => {setPost({
            ...post,
            url:e.target.value
          })}} />

          <input type="text" className="input-field" placeholder="URL to image" value={post.urlToImage} onChange={(e) => {setPost({
            ...post,
            urlToImage:e.target.value
          })}} />

          <textarea type="text" className="input-field textarea" placeholder="content" value={post.content} onChange={(e) => {setPost({
            ...post,
            content:e.target.value
          })}}></textarea>

          <button className="btn" type="submit">Send</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>

        </form>

      </div>

    </div>

  </>)

}

export default form;
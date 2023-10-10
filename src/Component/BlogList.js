import React from 'react';
import axios from 'axios';
import Blog from './Blog';
import { useState, useEffect } from 'react';


function BlogList (){
  
  const [blogs,setBlogs]=useState([]);

  useEffect(()=>{
    axios.get('/blogs')
      .then((fetchedBlog)=>{
        setBlogs(fetchedBlog.data);
      })
  },[])

  let blogList=blogs.map(blog=>{
    return <Blog 
    key={blog._id}
    id={blog._id}
    auther={blog.auther} 
    img={blog.img}
    content={blog.content}
    createAt={blog.createAt}
    />
  })

    return (
      <div>
        {blogList}
      </div>
    )
  }


export default BlogList;
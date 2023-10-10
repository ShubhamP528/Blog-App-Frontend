import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function New() {
    const navigate = useNavigate();
    const [blog, setBlog]=useState({
        auther:'',
        img:'',
        content:''
    });
    
   const submitHandler=(e)=>{
        e.preventDefault();
        axios.post(`/blogs/new`,blog)
            .then(()=>{
                console.log(blog);
            })
      navigate('/blogs')

        
    }

  return (
    <div>
        <Form action='/blogs'  onSubmit={submitHandler} className='mt-5 mx-auto' style={{width:"60vw"}}>
        <h2>New Blog</h2>
            <Form.Group className="mb-3" >
                <Form.Label>Auther</Form.Label>
                <Form.Control type="text" onChange={(e)=>setBlog({...blog, auther:e.target.value})} name='auther' placeholder="Auther Name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" onChange={(e)=>setBlog({...blog, img:e.target.value})} name='img' placeholder="Image" />
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>Content</Form.Label>
                <Form.Control as={'textarea'} rows={'5'} type="text" onChange={(e)=>setBlog({...blog, content:e.target.value})} name='content' value={blog.content} placeholder="Content" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default New
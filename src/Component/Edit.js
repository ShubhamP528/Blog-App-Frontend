import React from 'react';
import { useState,useEffect, } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Edit() {
    const {id}=useParams();
    const navigate = useNavigate();

    const [blog, setBlog]=useState({
        auther:'',
        img:'',
        content:''
    })
    

    // axios.get(`/blog/${id}/edit`)
    //     .then((res)=>
    //     console.log(res));

    useEffect(()=>{
        axios.get(`/blog/${id}/edit`)
            .then((blog)=>{
                blog=blog.data;
                setBlog({
                auther:blog.auther,
                img:blog.img,
                content:blog.content
            })
    })
    },[])


    let submitHandler=(e)=>{
        e.preventDefault();
        axios.patch(`/blog/${id}/edit`,blog)
            .then((res)=>{
                console.log(blog);
            })
        navigate('/blogs')
    }

  return (
    <div>
        <Form action='/blogs'  onSubmit={submitHandler} className='mt-5 mx-auto' style={{width:"60vw"}}>
        <h2>Edit Blog</h2>
            <Form.Group className="mb-3" >
                <Form.Label>Auther</Form.Label>
                <Form.Control type="text" onChange={(e)=>setBlog({...blog, auther:e.target.value})} name='auther' value={blog.auther} placeholder="Auther Name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" onChange={(e)=>setBlog({...blog, img:e.target.value})} name='img' value={blog.img} placeholder="Image" />
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

export default Edit
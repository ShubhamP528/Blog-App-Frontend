import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Show() {
    const id=useParams().id;
    const navigate = useNavigate();

    const [blog, setBlog]=useState({});
    useEffect(()=>{
        axios.get(`/blogs/${id}`)
            .then((res)=>{
                setBlog(res.data);
            })
    },[])

    let deleteHandler=()=>{
        console.log(blog._id);
        axios.delete(`/blog/${blog._id}/delete`)
            .then(()=>{
                console.log('deleted !!!!');
            })
        navigate('/blogs')
    }
    
    return (
    <div>
        <Card className='card my-5 mx-auto' style={{ width: '60vw' }}>
        <Card.Img variant="top" src={blog.img} />
        <Card.Body>
          <Card.Title>{blog.auther}</Card.Title>
          <Card.Text>{blog.content}</Card.Text>
          <Link to={`/blog/${blog._id}/edit`}><Button className='mx-4' variant='secondary'>Edit</Button></Link>
          <Button onClick={deleteHandler} variant='danger'>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Show;
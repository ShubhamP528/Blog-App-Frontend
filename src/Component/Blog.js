import React from 'react';
import './Blog.css';
import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Blog (props){

  return (
      <div>
      <Card className='card my-5 mx-auto' style={{ width: '60vw' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.auther}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <Link to={`/blogs/${props.id}`}><Button>Show</Button></Link>
        </Card.Body>
      </Card>
    </div>

    )
  }


export default Blog;
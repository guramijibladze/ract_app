import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

let comments = [
  {
    id:1,
    content: 'coment 1',
    avatar: 'https://placeimg.com/200/200/any'
  },
  {
    id:2,
    content: 'coment 2',
    avatar: 'https://placeimg.com/300/300/any'
  },
  {
    id:3,
    content: 'coment 3',
    avatar: 'https://placeimg.com/250/250/any'
  }
]

let comments2 = [
  {
    id:1,
    content: 'coment 1',
    avatar: 'https://placeimg.com/200/200/any'
  },
  {
    id:30,
    content: 'new content 1',
    avatar: 'https://placeimg.com/200/300/any'
  },
  {
    id:3,
    content: 'new content 2',
    avatar: 'https://placeimg.com/250/250/any'
  }
]

class App extends Component {
  state={
    comments:[],
    title:'test'
  }

  componentDidMount(){
    this.setState({
      comments:comments
    });
  }

  update =()=>{
    this.setState({
      comments: comments2
    });
  }

  render(){
    return (
      <div className="App">
        <button onClick={()=>{
          this.update()
        }}
        >
          update
        </button>
        {
          this.state.comments.map(item => {
            return (
              <Comment 
                key={item.id}
                content={item.content} 
                avatar={item.avatar} 
              />
            );
          })
        }
      </div>
    );
  }
  
}

export default App;

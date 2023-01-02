import React, { useState, useEffect, ChangeEvent } from 'react'
import './App.css'
import { Post, User } from './Types/';
import Loading from './components/loading';
import { PostForm } from './components/postForm';
import { PostItem } from './components/postItem';
import { Api } from './api';

function App() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [addTitle, setAdtitle] = useState<string>("");
  const [addBody, setAdBody] = useState<string>("");



  const loadPosts = async () => {
    setLoading(true)
    let json = await Api.getPosts()
    
    setPosts(json)
    setLoading(false)
  }

  useEffect(() => {
    loadPosts();

  }, [])

  const handleAddPost = async (title: string, body: string) => {

    let json =  await Api.addNewPost(title, body, 1)
    console.log(json)
    if (json.id) {
      alert("post adicionado com sucesso");

    } else {
      alert("erro");
    }

  }



  return (
    <div className="App">
      <button onClick={() => {
        loadPosts();
      }}>Atualizar</button>
      {loading && <Loading />}

      {<PostForm addBody={addBody} addTitle={addTitle} setAdBody={setAdBody} setAdtitle={setAdtitle} onAdd={handleAddPost} />}

      <p>Total de filmes: {posts.length}</p>
      <div className="films" style={{ maxWidth: "1300px", margin: "auto" }}>
        {posts.map((post, key) => (
          <PostItem data={post} key={key}/>

        ))}
      </div>
    </div>
  )
}

export default App

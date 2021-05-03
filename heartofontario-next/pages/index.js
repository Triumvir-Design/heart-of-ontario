import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Button from 'react-bootstrap/Button'

export default function Home({ posts }) {
  return (
// BEGIN HTML  
<html>

    <div>
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
      </Head>
    </div>


    <div>
      {posts && posts.map((post) => (

        <div key={post.id}>
          <h2>{post.title}</h2> 
          <p>{post.content}</p>
          <button type="button" class="btn btn-dark">Dark</button>

        </div>

      ))}
    </div>


</html>
  )
// END HTML
}


// async conenct to api
export async function getStaticProps() {

  // get posts from api
  const res = await fetch('http://localhost:1337/posts')
  const posts = await res.json();

  return {
    props: { posts },
  }
}
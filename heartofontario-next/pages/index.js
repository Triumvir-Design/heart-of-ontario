import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Button from 'react-bootstrap/Button'

export default function Home({ posts }) {
  return (
// BEGIN HTML  
<html>
  
  {/* HEADER */}
  <div>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
    <link rel="stylesheet" href="../styles/Home.module.css" ></link>
    </Head>
  </div>

  {/* HERO */}
  <div class="jumbotron hero-image">
    <div class="container hero-content">
      <h1 class="display-4"> Welcome to Heart of Ontario Snowmobile Club </h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  </div>

  {/* INFO SECTION */}
  <div class="container-fluid" id="display-case">
    <div class="row">
      <div class="col-sm display-case-item">
        <h2 class="center-text header-white">Permits</h2>
        <p>Purchase your permit online directly from the OFSC!</p>
        <a class="btn btn-primary">Get Permit</a>
      </div>
      <div class="col-sm display-case-item">
        <h2 class="center-text header-white">News</h2>
        <p>Check out the latest updates and view or calendar of events.</p>
        <a class="btn btn-primary">See News</a>
      </div>
      <div class="col-sm display-case-item">
        <h2 class="center-text header-white">Links</h2>
        <p>View our partners and other helpful resources.</p>
        <a class="btn btn-primary">View Links</a>
      </div>
    </div>

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
  
  <footer>
    
    <div class="container">
       
    <div class="row">
        
      <div class="foot-item col-md-6 col-sm-12">
          <a href="https://www.google.com/maps/place/211+Laidlaw+St+S,+Cannington,+ON+L0E+1E0/@44.3434275,-79.0381341,17z/data=!3m1!4b1!4m5!3m4!1s0x89d55d69865af4a9:0x3826695c647920f7!8m2!3d44.3434275!4d-79.0359454">
          <p>211 Laidlaw St S, Cannington, ON, L0E 1E0</p>
          </a>
          <a href="#contact">info@heartofontario.ca</a>
      
      </div>

      <div class="foot-item col-md-6 col-sm-12">
        <p>
          Copyright Heart of Ontario Snowmobile Club 2021 All Rights Reserved
        </p>
      </div>

  </div>


    
</div>

  </footer>


  

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
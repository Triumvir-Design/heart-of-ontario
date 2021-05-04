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

  {/* NAVBAR */}
  <nav class="navbar navbar-expand-md navbar-light fixed-top">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/#">
      <Image id="nav-logo"src="/img/logo.jpg" width={50} height={50} />
    </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nav navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#about">Links</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>

    </div>
  </nav>



  {/* HERO */}
  <div class="jumbotron hero-image">
    <div class="container hero-content">
      <h1 class="display-4"> Welcome to Heart of Ontario Snowmobile Club </h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p class="lead">
      <a class="btn btn-primary btn-lg hero-btn" href="#" role="button">Learn more</a>
      <a class="btn btn-primary btn-lg hero-btn" href="#" role="button">View Schedule</a>
      </p>
    </div>
  </div>

 

  {/* SCHEDULES */}
  <div>
    {posts && posts.map((post) => (

      <div key={post.id}>
        <h2>{post.title}</h2> 
        <p>{post.content}</p>
        <Image src="http://localhost:1337/uploads/large_12month_calendar_aafc74ae61.png" height={700} width={700} />
        <button type="button" class="btn btn-dark">Dark</button>

      </div>

    ))}
  </div>
  
   {/* FOOTER */}
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
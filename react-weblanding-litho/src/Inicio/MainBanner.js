import React from 'react';
import banner1 from '../assets/banner/home-startup-slider-bg-01.jpg';
import banner2 from '../assets/banner/home-startup-slider-bg-02.jpg';
import banner3 from '../assets/banner/home-startup-slider-bg-03.jpg';
import './MainBanner.css';




function MainBanner(props) {
    return (
      <section>
        <div id="carouselExampleCaptions" className="carousel slide banner-index" >
  <div className="carousel-indicators  " >
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <div className="div-top">
        <h1>Start your online <br></br> business today</h1>
        <p>The best way to promote you business</p>
 
        <a href="/">GET STARTED NOW   <span className="ms-3"><i class="fas fa-play-circle fa-1x"></i></span></a> 
        </div>

      </div>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="div-top">
        <h1>Combine thinking<br></br> and thechnical</h1>
        <p>The best way to promote you business</p>
        <a href="/">GET STARTED NOW   <span className="ms-3"><i class="fas fa-play-circle fa-1x"></i></span></a> 
        
        </div>

      </div>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <div className="div-top">
        <h1>Delivering creative <br></br> digital products</h1>
        <p>The best way to promote you business</p>
        <a href="/">GET STARTED NOW   <span className="ms-3"><i class="fas fa-play-circle fa-1x"></i></span></a> 
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="rc" aria-hidden="true"><i class="fas fa-arrow-left"></i></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="  rc" aria-hidden="true"><i class="fas fa-arrow-right"></i></span>
    
    <span className="visually-hidden">Next</span>
  </button>
  
  
</div>
  <div className="container leftc">
    <div className="row">
      <div className="col-4 ">
        <div className="container">
          <div className="row back-col4">
            <div className="col-2"><i class="fas fa-mouse-pointer fa-3x"></i></div>
            <div className="col-10">
              <p>Innovative business</p>
              <span>Easy to customize</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 ">
      <div className="container">
          <div className="row back-col4">
            <div className="col-2"><i class="fas fa-lock fa-3x"></i></div>
            <div className="col-10">
              <p>Expertly marketing</p>
              <span>High quality services</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 ">
      <div className="container">
          <div className="row back-col4">
            <div className="col-2"><i class="fas fa-user-tie  fa-3x"></i></div>
            <div className="col-10">
              <p>Engaging audiences</p>
              <span>Build perfect websites</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}

export default MainBanner;
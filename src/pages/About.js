import React from 'react'
import '../Styles/About.css'
import Banner from "../components/Banner";
import SubBanner from "../components/SubBanner";

function About() {
  return (
    <div>
      {/* Banner Component */}
      <Banner
        title="About Us"
        subtitle="Know more about biznivate solutions and our journey"
      />

       {/* Sub-Banner Component */}
      <SubBanner
        heading="About Biznivate"
        imageUrl="https://media.istockphoto.com/id/1351993340/photo/asian-business-person-responding-at-the-customer-center.jpg?s=612x612&w=0&k=20&c=zrgcIgJo129KqYSZ3IhwGP3ExwGgYHbXu0t1ZID5B_I="
        buttonText="Apply Now"
      />

      <div className='aboutus-grid1'>
        <div className='about-grid-col1'>
          <span>Who we are?</span>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente deleniti consectetur nemo quia dolorum illo. Animi ut delectus reprehenderit deleniti eos ea repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi?</span>
        </div>
        <div className='about-grid-col2'>
          <img src='https://images.inc.com/uploaded_files/image/1920x1080/getty_690855708_362060.jpg' />
        </div>
      </div>

      <div className='aboutus-grid2'>
        <div className='about-grid-col2'>
          <img src='https://www.hubspot.com/hs-fs/hubfs/grow-better.jpg?width=851&height=567&name=grow-better.jpg' />
        </div>
        <div className='about-grid2-col1'>
          <span>Our Mission: Helping Millions of Organizations Grow Better</span>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente deleniti consectetur nemo quia dolorum illo. Animi ut delectus reprehenderit deleniti eos ea repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, debitis possimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem!</span>
        </div>
      </div>

      <div className='aboutus-grid3'>
        <div className='about-grid-col1'>
          <span>Our Story</span>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente deleniti consectetur nemo quia dolorum illo. Animi ut delectus reprehenderit deleniti eos ea repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, necessitatibus sequi! Laborum molestias iste ipsam alias corporis? Iure facilis illum vel laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reiciendis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia!</span>
        </div>
        <div className='about-grid-col2'>
          <img src='https://res.cloudinary.com/dvjfemxbz/image/upload/pexels-george-milton-6954162_g0rmmw.jpg' />
        </div>
      </div>

      <div className='grid4-back'>
        <div className='g4-h'>Heading</div>
        <div className='g4-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur est id impedit excepturi suscipit aliquid ipsam. Libero, delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, libero laboriosam.</div>

        <div className='aboutus-grid4'>

          <div className='grid4-card'>
            <div className='grid4-head'>Heading</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit excepturi iusto sequi, quas quae.</p>
            <a href='#'>Learn More</a>
          </div>

          <div className='grid4-card'>
            <div className='grid4-head'>Heading</div>
            <p>Lorem ipsum dolor sit amet elit. Q Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi! uo  sequi, quas quae.</p>
            <a href='#'>Learn More</a>
          </div>

          <div className='grid4-card'>
            <div className='grid4-head'>Heading</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit excepturi iusto sequi, quas quae.</p>
            <a href='#'>Learn More</a>
          </div>

          <div className='grid4-card'>
            <div className='grid4-head'>Heading</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit excepturi iusto sequi, quas quae.</p>
            <a href='#'>Learn More</a>
          </div>

          <div className='grid4-card'>
            <div className='grid4-head'>Heading</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit excepturi iusto sequi, quas quae.</p>
            <a href='#'>Learn More</a>
          </div>

          <div className='grid4-card'>
            <div className='grid4-head'>Heading</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo Lorem ipsum dolor sit amet. Ipsum voluptate cum perspiciatis fuga.</p>
            <a href='#'>Learn More</a>
          </div>

        </div>

      </div>


    </div>
  )
}

export default About;
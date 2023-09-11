import React from 'react'
import profilepic from '../assets/profilepic.jpg'
import { useMediaQuery } from 'react-responsive';



const About = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div style={{background:'#1e1e1e', color:'white', padding:'2rem', fontFamily:'Consolas'}}>
    <div style={isTabletOrMobile?{display:'flex',flexDirection:'column-reverse'}:{display:'flex', alignItems:'center'}}>
      <div>
        <h1 style={{fontSize:isTabletOrMobile?'13px':'20px', width:'90%'}}>An enthusiastic and data-driven graduate with a strong passion for leveraging analytical and technical skills to tackle complex
challenges, generate valuable insights, and drive business outcomes.</h1>
      </div>

      <div>
      <img fetchpriority='high' style={{width:'200px'}} src={profilepic} alt='sameeksha' />
      </div>
    </div>
        <div>
        <div>
  <h2 style={{ paddingTop: isTabletOrMobile ? '30px' : '10px', color: '#BCA66D' }}>
    &lt;Education&gt;
  </h2>

  <div>
  <p style={{ marginTop: '15px', fontSize: isTabletOrMobile ? '10px' : '15px' }}>
  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
  •  University at Albany, NY
  </span>
  <span style={{ fontSize: isTabletOrMobile ? '10px' : '15px', marginLeft: '10px' }}>
    [ 2022 - 2024 ]<br />
  Master's in Data Science -{'>'} 3.86/4.00
  </span>
</p>

  </div>
  <div>
  <p style={{ marginTop: '15px', fontSize: isTabletOrMobile ? '10px' : '15px' }}>
  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
  • IIIT Bangalore, India 
  </span>
  <span style={{ fontSize: isTabletOrMobile ? '10px' : '15px', marginLeft: '10px' }}>
    [ 2022 - 2024 ]<br />
    Post Graduate in Artificial Intelligence -{'>'} 4.00/4.00
  </span>
</p>

  </div>
  
  <div>
  <p style={{ marginTop: '15px', fontSize: isTabletOrMobile ? '10px' : '15px' }}>
  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
  • Jawaharlal Nehru Technological University, India
  </span>
  <span style={{ fontSize: isTabletOrMobile ? '10px' : '15px', marginLeft: '10px' }}>
    [ 2017 - 2021 ]<br />
    Bachelor's in Computer Science -{'>'} 3.7/4.00
  </span>
</p>

  </div>
  
  

  <h2 style={{ paddingTop: '15px', color: '#BCA66D' }}></h2>
</div>

 

  <h2 style={{ paddingTop: '15px', color: '#BCA66D' }}>&lt;/Education&gt;</h2>
</div>

        <h2 style={{paddingTop:'50px', color:'#2658CA', fontSize:'22px'}}>&lt;Academics&gt;</h2>
          <p style={{marginTop:'15px', fontSize:isTabletOrMobile?'15px':'20px'}}>• Secondary School -{'>'} 91.8% (CBSE)</p>
          <p style={{marginTop:'15px', fontSize:isTabletOrMobile?'15px':'20px'}}>• High School -{'>'} 92% (CBSE)</p>
          <p style={{marginTop:'15px', fontSize:isTabletOrMobile?'15px':'20px'}}>• B.tech Computer Engineering -{'>'} 9.3/10 Average CGPA (Mumbai University)</p>

        <h2 style={{paddingTop:'15px', color:'#2658CA',fontSize:'22px', marginBottom:'100px'}}>&lt;/Academics&gt;</h2>

    </div>
  )
}

export default About
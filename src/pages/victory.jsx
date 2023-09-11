import React from 'react'

const Victory = () => {
  return (
    <div style={{background:'#1E1E1E',height:'150vh',fontFamily:'Consolas',color:'white',padding:'20px'}}>
     <h1 style={{marginBottom:'10px'}}>Responsibilities</h1>
     <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{background:'#333333',padding:'10px',width:'20rem',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:'15px'}}>
          <img src='https://i.imgur.com/XRflgCF.png' alt='CSI Asad' style={{width:'200px'}} />
          <h3 style={{color:'#57C5B6'}}>Techincal Co-Head</h3>
          <p style={{marginTop:'20px'}}>I currenly serve as a Techincal co head at CSI-RAIT. My day to day responsibilites are managing the tech team under me and making sure that all the core technical parts of this comittee function smoothly.</p>
        </div>
     </div>
     <h1 style={{marginBottom:'10px',marginTop:'10px'}}>Work</h1>
     <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
        <div style={{background:'#333333',padding:'10px',width:'20rem',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:'15px'}}>
          <img src='https://st.hzcdn.com/simgs/97b330cb0285df2d_3-1162/_.jpg' alt='CSI Asad' style={{width:'200px'}} />
          <h3 style={{color:'#57C5B6',marginTop:'10px'}}>Web Developer</h3>
          <p style={{marginTop:'20px'}}>I was the web developer for Svaroop Architechts, an architect company based in Mumbai. My Job was to develop and manage their websites using Wix.</p>
        </div>

        <div style={{background:'#333333',padding:'10px',width:'20rem',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:'15px'}}>
          <img src='data:image/png;base64,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' alt='CSI Asad' style={{width:'200px'}} />
          <h3 style={{color:'#57C5B6',marginTop:'10px'}}>Full Stack Web Developer</h3>
          <p style={{marginTop:'20px'}}>I worked on 2 different Projects at immenshphere as a Full Stack Web Developer. I was successfully able to create a front-end website and a working web application during the internship.</p>
        </div>
     </div>
    </div>
  )
}

export default Victory
import '../App.css'

function About() {
  const images = {
    image1: new URL('/src/assets/Profile.jpg', import.meta.url).href
  }
  return (
    <>
      <div className='container'>
          <div className='profile'>
            <img id='profile-image' src={images.image1} alt="Profile Picture"/>
          </div>
          <div id='about-content'>
            <h1>About</h1>
            <p id='about-body'>J Nguyen is a passionate systems engineer and designer based in Minneapolis, MN. 
              They earned a Bachelor of Science in Computer Information Technology with a minor in Business Administration from Minnesota State University, Mankato. 
              Currently, J is advancing their expertise by pursuing a Master of Science in Systems Engineering at the University of Minnesota, Twin Cities, 
              all while contributing their skills as a Systems Engineer at Honeywell.
            </p>
          </div>
      </div>
    </>
  )
}

export default About

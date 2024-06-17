import '../stylesheets/about.css'
import icon from '../assets/images/png/logo-water-R.png';
import pic from '../assets/images/png/profile-pic-droplette.png';

function About() {
 

    return (
      <div className="about content-container">
         
        <div className="about-primary-container">
         
       
        <div className="text-container">
        <h1 className="secondary">Hi, I'm Rachel</h1>
        <h2>Thanks for stopping by!</h2>
        <p>I'm a passionate developer and UX/UI designer with a unique background in fisheries data research. My journey began in the world of scientific analysis, where I honed my skills in data visualization and problem-solving. Today, I blend this analytical mindset with a keen eye for design to create elegant solutions.</p>
        <p>My UX/UI design philosophy revolves around simplicity and clarity, ensuring that every interface I create is both aesthetically pleasing and intuative to use, prioritising user experience at every step. I believe it is important to maintain inclusive designs, accessible to all users.</p>
        <p>As a developer, I focus on clean and readable code with heavy use on components, snippets and re-usable variables wherever possible, allowing for efficiency in developing and running.</p>
        <p>After hours you'll find me walking on the coast, in the garden or knitting.</p>
        </div>
        <div className="image-container">
          <img className="profile-img" src={pic} width="220px" alt="Profile image of Rachel White"/>
        </div>
        </div>
        <div className="logo-container">
          <img className="logo-img" src={icon} width="120px" alt="Rachel White logo"/>
          <div className="text-container">
          <p>What is my logo? My logo is inspired by the letter R and water, as if R was fused into a water droplet. It combines my experience in marine and love of the ocean, with me and my love of fluid design. </p>
          <br></br>
            <a href='https://drive.google.com/file/d/1ieI9WvWsEg8AAwaczXS6GhFTQ_QTEwyv/view?usp=sharing' title="View Rachel White's resume" target="_blank" className="primary-btn" >
            View resume
            </a>
        </div>
        </div>
      </div>

    )
  }
  
  export default About
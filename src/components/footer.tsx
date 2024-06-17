import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../stylesheets/footer.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'


function Footer() {
 

    return (
      <div className="footer">
        <div className="content-container">
        <p>&copy; Designed and created by Rachel White</p>
       <div className="footer-icons">
       <a href="mailto:rachelizawhite@gmail.com" target='_blank' title="Email me">
            <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/rachel-white-5470b4102/" target='_blank' title="Connect on Linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
       </div>
        </div>
      </div>
    )
  }
  
  export default Footer
import '../stylesheets/work.css'
import WorkItem from './WorkItem'

function Work() {
 

    return (
      <div className="work content-container">
       <h1 className="secondary">Work</h1>
       <a href='https://drive.google.com/file/d/1ieI9WvWsEg8AAwaczXS6GhFTQ_QTEwyv/view?usp=sharing' title="View Rachel White's resume" target="_blank" className="primary-btn" >
            View resume
            </a>
        <div className="work-container">
          <WorkItem title={'Web Uplift Project'} description={'Dynamic project consultant where I built components based on designs, designed pages with exsiting components for stakeholders, designed new components, and improved processes.'} tags={['HTML+CSS','Jquery','Javascript','Squiz','Figma']}/>
          <WorkItem title={'Integration Web App'} description={'I worked with a talented developer team on the front-end of a new project. Styled and built responsive components to work with exisiting and future integrations.'} tags={['HTML+CSS','Svelte','Typescript','BeerCSS']}/>
          <WorkItem title={'Realestate Website'} description={'Custom Wordpress website to display realestate listings, connected to an external API through Jquery and PHP, included realestate filtering and pagination.'} tags={['HTML+CSS','PHP','Jquery','Javascript', 'Wordpress']}/>
        </div>
      </div>

    )
  }
  
  export default Work
import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/lostThigApp.PNG"
import IMG2 from "../../assets/weatherApp.PNG"
import IMG3 from "../../assets/To-Do-App.PNG"


const Portfolio = () => {

  const data=[{
    id:1,
    image: IMG1,
    title: "MovieCard", 
    github: "http://https://github.com/fatenhoualdia/Router",

  },

  {
    id:2,
    image: IMG2,
    title: "Weather Api",
    github: "https://https://github.com/fatenhoualdia/weather-API",
    demo:"https://632335fcc8938e5323ea5f93--weather-react-api-client.netlify.app/",
  },

  {
    id:3,
    image: IMG3,
    title: "To-Do_List",
    github: "https://github.com/fatenhoualdia/check-point-Api/tree/main/src/components",
   
  },

 

  

]
  return (
    <section id="portfolio">
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        {
      data.map(({id, image, title, github, })=>{
        return(
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' rel="noreferrer" target="_blank">Github</a>
     
            </div>
</article>
        )
        })
        
      }


      </div>
    </section>
  )
}

export default Portfolio
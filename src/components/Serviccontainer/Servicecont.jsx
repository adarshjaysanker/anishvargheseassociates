import React from 'react'
import Servicecard from '../Servicecard/Servicecard';
import './servicecont.css'

function Servicecont() {


    const services = [
        {
          title: 'Advisory Services',
          description: 'Providing expert legal advice on constitutional law matters to individuals and organizations.',
        },
        {
          title: 'Public Interest Litigation (PIL)',
          description: 'Filing and managing PIL cases to uphold public interest and enforce fundamental rights.',
        },
        {
          title: 'Legal Research and Analysis',
          description: 'Conducting in-depth research and analysis on constitutional issues and legal precedents.',
        },
        {
            title: 'Legal Research and Analysis',
            description: 'Conducting in-depth research and analysis on constitutional issues and legal precedents.',
          },
          {
            title: 'Legal Research and Analysis',
            description: 'Conducting in-depth research and analysis on constitutional issues and legal precedents.',
          },
          {
            title: 'Legal Research and Analysis',
            description: 'Conducting in-depth research and analysis on constitutional issues and legal precedents.',
          },
          {
            title: 'Legal Research and Analysis',
            description: 'Conducting in-depth research and analysis on constitutional issues and legal precedents.',
          },
          {
            title: 'Legal Research and Analysis',
            description: 'Conducting in-depth research and analysis on constitutional issues and legal precedents.',
          },
          {
            title: 'Legal Research and Analysis',
            description: 'Conducting in-depth research and analysis on constitutional issues and legal precedents.',
          },
      ];
    

  return (
    <section className='services'>
      <div className="services-container">
        <h2 className="services-title">Our Practise Areas</h2>
        <div className="services-grid-container">
            <div className="services-grid">
                {services.map((service,  index) => (
                    <Servicecard key={index} title={service.title} description={service.description}/>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Servicecont

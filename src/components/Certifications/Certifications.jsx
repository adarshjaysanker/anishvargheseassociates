import React from 'react';
import './certifications.css'

function Certifications() {

    const certifications = [
        { title: 'Certified Constitutional Law Expert', institution: 'Indian Law Institute', year: 2021, image: 'http://certificatesinn.com/wp-content/uploads/2022/06/Experience-certificate-for-lawyer-5CRC.png' },
        { title: 'Top Constitutional Lawyer', institution: 'Bar Council of India', year: 2020 , image: 'http://certificatesinn.com/wp-content/uploads/2022/06/Experience-certificate-for-lawyer-1CRC.png'},
        { title: 'Excellence in Legal Services', institution: 'National Legal Services Authority', year: 2019 , image: 'https://certificatesinn.com/wp-content/uploads/2022/06/Experience-certificate-for-lawyer-3CRC.png'},
        { title: 'Certified Constitutional Law Expert', institution: 'Indian Law Institute', year: 2021 , image: 'http://certificatesinn.com/wp-content/uploads/2022/06/Experience-certificate-for-lawyer-2CRC.png'},
        { title: 'Top Constitutional Lawyer', institution: 'Bar Council of India', year: 2020 , image: 'http://www.sanscourt.com/wp-content/uploads/2012/12/Hastings-Trial-Advocacy-Certificate.jpg'},
        { title: 'Excellence in Legal Services', institution: 'National Legal Services Authority', year: 2019 , image: 'https://azlogistics.com/wp-content/uploads/2014/08/Sindh-Bar-Council-Certificate-for-Permission.jpg'},
      ];
    

  return (
    <section className='certifications'>
      <div className="certifications-container">
        <h2 className="certifications-title">Our Certifications</h2>
        <div className="certifications-row">
          {certifications.map((certification, index) => (
            <div key={index} className="certification-card">
              <img src={certification.image} alt={certification.title} className='certification-image'/>
              <div className="certification-info">
                <h3 className="certification-title">{certification.title}</h3>
                <p className="certification-institution">{certification.institution}</p>
                <p className="certification-year">{certification.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

import React from 'react';
import './latestnews.css'

function Latestnews() {

    const newsItems = [
        {
          id: 1,
          title: 'Supreme Court Ruling on Right to Privacy',
          date: 'June 15, 2024',
          description:
            'The Supreme Court delivers a landmark judgment affirming the right to privacy as a fundamental right under the Indian Constitution.',
          image: 'https://tse4.mm.bing.net/th?id=OIP.6M1USHDNEn3MdgV_VNuglwHaEK&pid=Api&P=0&h=180',  
        },
        {
          id: 2,
          title: 'New Amendments to Consumer Protection Act',
          date: 'June 10, 2024',
          description:
            'Government introduces amendments to the Consumer Protection Act to strengthen consumer rights and protections.',
          image: 'https://tse4.mm.bing.net/th?id=OIP.6M1USHDNEn3MdgV_VNuglwHaEK&pid=Api&P=0&h=180',  
        },
        {
          id: 3,
          title: 'Legal Insights: Environmental Law Updates',
          date: 'June 5, 2024',
          description:
            'Our legal experts provide insights into recent developments in environmental law impacting industries and individuals.',
          image: 'https://tse4.mm.bing.net/th?id=OIP.6M1USHDNEn3MdgV_VNuglwHaEK&pid=Api&P=0&h=180',  
        },
      ];
    

  return (
  <div className='latest-news'>
    <div className="latest-news-container">
      <h2 className="latest-news-title">Latest News and Updates</h2>
      <div className="news-grid">
        {newsItems.map((item) => (
          <div className="news-card" key={item.id}>
            <img src={item.image} alt={item.title} className="news-image" />
            <h3 className="news-title">{item.title}</h3>
            <p className="news-date">{item.date}</p>
            <p className="news-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Latestnews

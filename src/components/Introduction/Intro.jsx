import React, { useEffect, useRef } from 'react'
import './intro.css'

function Intro() {

    const introRef = useRef(null);

    useEffect(() => {
        const introElement = introRef.current;
        let observer;

        const handleScroll = (entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    introElement.classList.add('animate-intro');
                }else{
                    introElement.classList.remove('animate-intro');
                }
            });
        }
        observer = new IntersectionObserver(handleScroll, {threshold:0.5});
        observer.observe(introElement);

        return () => {
            if(observer) observer.disconnect();
        }
    }, []);

  return (
    <div className='introduction' ref={introRef}>
      <div className="introduction-container">
        <h2 className="introduction-title">Welcome to Anish Varghese Associates</h2>
        <p className="introduction-text">
            Anish Varghese Associates is a renowned law firm specializing
            in Indian Constitutional Law. 
            We provide expert legal services to ensure the protection of fundamental
            rights, uphold public interest through litigation, and offer comprehensive
            advisory services.
            With a team of dedicated advocates, we are committed to delivering exceptional legal
            solutions tailored to meet the diverse needs of our clients.
        </p>
      </div>
    </div>
  )
}

export default Intro

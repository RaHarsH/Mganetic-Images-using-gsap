import { useEffect, useRef } from 'react';
import './App.css';
import Magnetic from './components/Magnetic';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const images = [img1, img2, img3, img4];

function App() {
  gsap.registerPlugin(ScrollTrigger)
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((imageRef) => {
      gsap.fromTo(
        imageRef,
        {
          opacity: 0,
          y: '100%',
        },
        {
          y: '0%',
          opacity: 1,
          ease: 'power2.out',
          duration: 1,
          stagger: 1,
          // scrollTrigger: {
          //   trigger: imageRef,
          //   start: 'top 40%',
          //   end: 'top 30%',
          //   scrub: 1,
          //   toggleActions: 'play none none repeat'
          // }
        }
      );
    });
  }, []);

  return (
    <>
      <h1>Interact with images.</h1>
      <div className="App">
        <div className="grid-container">
          {images.map((image, index) => (
            <Magnetic key={index}>
              <div className="img-container">
                <img
                  src={image}
                  alt="img"
                  ref={(el) => (imageRefs.current[index] = el)} 
                />
              </div>
            </Magnetic>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

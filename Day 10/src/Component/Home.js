import React, { useState, useEffect } from 'react';
import '../Component/Footer.css'
import './Home.css';
import Footer  from './Footer'
import Navbar from './Navbar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
function Home() {
  const [backgroundImage, setBackgroundImage] = useState('initial-image.jpg');
  const nav=useNavigate();
  const [Subsc,setSubsc]=useState('')

  const validate=(e)=>{
    e.preventDefault();
    if(Subsc.length!==0)
    {
      alert("Subscribed! Welcome to EduTech!!")
    }
  }
  const navProfile=()=>{
    nav("/")
  }
  const navHome=()=>
  {
    nav("/")
  }
  const navfaq=()=>
  {
    nav("/faq")
  }
  useEffect(() => {
    // An array of background image URLs to cycle through
    const imageUrls = ['https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25saW5lJTIwZWR1Y2F0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'];
    
    // Function to change the background image at regular intervals
    const changeBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      const newImage = imageUrls[randomIndex];
      setBackgroundImage(newImage);
    };

    // Change the background image every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(changeBackgroundImage,1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
  <div class="home1">  
 
 <div className="home-page" ></div>
 
   <div>
    <h1 className='staffheading'> AppArtistry Studio</h1>
   </div>
  <div class="txt">
  "AppArtistry Studio is where the boundless imagination of artists meets the precision of technology, giving birth to apps that are not just functional, but breathtaking digital experiences, intricately woven with the threads of innovation and design excellence."
    </div>
    <div class="buttons">
   
   <Link to="/"> <button class="register-btn">LOGIN    &nbsp;&nbsp; <ExitToAppIcon id="btn-icon"/></button></Link>
    </div>
    <div>
    <Footer/>
</div>
    </div>
    


  );
}

export default Home;

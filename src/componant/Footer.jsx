import React from 'react'
import "../style/Footer.css"

const Footer = () => {
  return (
<>
<div className="footer">
    <div className="f-head">
        <div className="logo">
            <h1>AESTHETIC</h1>
        </div>
        <div className="f-email">
            <form >
                <label>
                    <input type="email" placeholder='Email'  /><span>subcribe</span>
                </label>
            </form>
        </div>
        <div className="f-icon">
            
        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
        </div>
    </div>
    <div className="f-list">
        <div className="list-1">
            <h4>company</h4>
            <ul>
                <li>About Us</li>
                <li>Departments</li>
                <li>Find a Doctor</li>
                <li>FAQ</li>
                <li>News</li>
            </ul>
        </div>
        <div className="list-1">
            <h4>Quick links</h4>
            <ul>
                <li>Facial Fillers</li>
                <li>Breast Surgery</li>
                <li>Body Lifts</li>
                <li>Face & Neck</li>
                <li>Fat Reduction</li>
            </ul>
        </div>
        <div className="list-1">
            <h4>Contact Us</h4>
            <ul className='list-3'>
                <li><i class="fa-solid fa-location-dot"></i> Los Angeles Gournadi, 1230 Bariasl</li>
                <li><i class="fa-solid fa-phone"></i>1-677-124-44227</li>
                <li><i class="fa-solid fa-envelope"></i> Support@gmail.com</li>
               
            </ul>
        </div>
        <div className="list-1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14665.244248857305!2d87.8551932529507!3d23.231765064439987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f849ce169df2cb%3A0xb8cbf6e0ce85fcd8!2sPerbirhata%2C%20Bardhaman%2C%20West%20Bengal%20713101!5e0!3m2!1sen!2sin!4v1702102720701!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} lowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    </div>
</div>


</>


    )
}

export default Footer
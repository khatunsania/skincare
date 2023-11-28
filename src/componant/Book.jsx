import React from 'react'
import "../style/Book.css"
const Book = () => {
    return (
        <>
            <div className="book">
                <div className="book-cont">


                <div className="f-text">

                    <form>
                        <div className="b-text">
                            <p>REQUEST FOR YOUR <span><h2>Consultation</h2></span></p>
                        </div>
                        <label>
                            <input type="text" placeholder='Name' />
                        </label>
                        <label >
                            <input type="email" placeholder='Email' />
                        </label>
                        <label>
                            <input type="text" placeholder='Date' />
                        </label>
                        <label>
                            <input type="text" placeholder='Type your services' />
                        </label>
                <button>BOOK APPOINTMENT</button>
                    </form>
                </div>
                <div className="f-dc">
                    <div className="dc-text">

                 <p className='head'>WELCON TO AESTHETIC</p>
                 <h1>Find Best Doctors With <span> AESTHETIC</span></h1>
                 <p>30 Years of experience in Cosmetic Surgery.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 </div>
                 <div className="dc-img">
                    <img src="/img/dc.webp" alt="" />
                 </div>

                </div>
                </div>

            </div>

        </>
    )
}

export default Book
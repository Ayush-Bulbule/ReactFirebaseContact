import React, { useState } from 'react'

function ContactForm() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: ""
    })

    const getUserData = (event) => {
        let name = event.target.name
        let value = event.target.value

        setUser({
            ...user,
            [name]: value
        })

    }

    const postData = async (e) => {
        e.preventDefault();
        alert("Hello")


        if (user.name === "" || user.email === "" || user.message === "" || user.phone === "" || user.address === "") {
            alert("Data cannot be null!")
        } else {
            const response = await fetch("https://react-form-b072a-default-rtdb.firebaseio.com/youtubereactform.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        address: user.address,
                        message: user.message
                    })
                })

            if (response) {
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    message: ""
                })
                alert("Data Summited successfully!")
            } else {
                alert("Something went wrong!!!")
            }
        }

    }
    return (
        <div className="container-fluid dark-bg d-flex align-items-center justify-content-center">
            <div className="box  px-4 py-4">
                <h3 className="text-center">Contact Us</h3>
                <form method="post">
                    <div className="row py-3 px-5">
                        <div className="input-style col-lg-6  col-sm-12">
                            <label htmlFor="name">Name</label>
                            <input value={user.name} onChange={getUserData} type="text" name="name" id="inpName" placeholder="John Doe" />
                        </div>
                        <div className="input-style col-lg-6 col-sm-12">
                            <label htmlFor="email">Email</label>
                            <input value={user.email} onChange={getUserData} type="text" name="email" id="inpEmail" placeholder="john@gmail.com" />
                        </div>
                        <div className="input-style  mt-4 col-lg-6 col-sm-12">
                            <label htmlFor="phone">Phone</label>
                            <input value={user.phone} onChange={getUserData} type="text" name="phone" id="inpPhone" placeholder="+91 084588656" />
                        </div>
                        <div className="input-style mt-4 col-lg-6 col-sm-12">
                            <label htmlFor="address">Address</label>
                            <input value={user.address} onChange={getUserData} type="text" name="address" id="inpAddress" placeholder="Main Street, Cydeny" />
                        </div>
                        <div className="col-lg-12 col-12 input-style mt-4 ">
                            <label htmlFor="messege">Message</label>
                            <textarea value={user.message} onChange={getUserData} name="message" id="inpMessage" rows="5" placeholder="My concrn was.." />
                        </div>
                    </div>
                    <button type="submit" onClick={(e) => postData(e)} className="btn-submit ms-5 mt-3">Submit</button>
                </form>
            </div>
        </div >
    )
}

export default ContactForm

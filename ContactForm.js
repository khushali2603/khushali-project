import React from 'react'
import { useForm } from 'react-hook-form'

function ContactForm() {
    const { register,
        formState: { errors },
        handleSubmit
    } = useForm()
    
    const onSubmit = (data) => console.log(data);

    return (
        <div className='py-5'>
            <div className="container my-5">
                <div className="border p-5 shadow">
                    <h4 className="mb-3 fs-1">Send Message</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <input type="text" className="form-control p-3 m-1 rounded-0 " id="firstName" placeholder="Enter your name" {...register("name", { required: true })} />
                                <p className="text-danger">
                                    {errors.name?.type === "required" && "Name is required"}
                                </p>
                            </div>

                            <div className="col-sm-6 ">
                                <input type="email" className="form-control p-3 m-1 rounded-0" placeholder="Enter email address" {...register("email", { required:true , pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i  })} />
                                <p className="text-danger">
                                    {errors.email?.type === "required" && "Email is required"}
                                    {errors.email?.type === "pattern" && "@gmail.com is required"}
                                </p>
                            </div>

                            <div className="col-sm-6 ">
                                <input type="number" className="form-control p-3 m-1 rounded-0" placeholder="Enter phone number" {...register("number",{required:true,pattern:/^\d{10}$/})}/>
                                <p className="text-danger">
                                    {errors.number?.type === "pattern" && "Phone number is required"}
                                    {errors.number?.type === "required" && "Phone number is required"}
                                </p>
                            </div>

                            <div className="col-sm-6 ">
                                <input type="text" className="form-control p-3 m-1 rounded-0" id="subject" placeholder="Enter subject" />
                            </div>

                            <div className="col-12 ">

                                <textarea className="form-control p-3 m-1 rounded-0" id="exampleFormControlTextarea1" rows="6">Enter Message</textarea>
                            </div>
                            <div className="text-strat">
                                <button className="btn d-inline text-light py-3 px-4 text-capitalize rounded-0 mt-3" type='submit'
                                    style={{ backgroundColor: "#f8796c" }}>submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
//import React from 'react'
import downarrow from '../../assets/downarrow.png'

const ChooseService = () => {
    return (
        <>
            <section className='lg:px-20 lg:py-10'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1"></div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <div className="lg:mb-5 mb-2">
                                    <label htmlFor="name" className="block font-[700] text-[18px] mb-1">
                                        Choose Service Type
                                    </label>
                                    <div className="input-group flex items-center w-full border border-[#ABA9A9] rounded-lg justify-between px-5 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                                        <div className="field w-full">
                                            <select
                                                id="name"
                                                name="name"
                                                className="mt-1 block w-full text-[15px] text-[#ABA9A9] font-[400] rounded-md bg-transparent focus:outline-none appearance-none"
                                            >
                                                <option value="" disabled selected>
                                                    Service Type
                                                </option>
                                                <option value="">select service type</option>

                                            </select>
                                        </div>
                                        <div className="icon">
                                            <img src={downarrow} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                    <div className="grid grid-cols-1 pt-5">
                        <div className="col-span-1">
                            <div className="w-full h-[500px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019273146357!2d-122.41941568468118!3d37.774929279759134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c0c2121f7%3A0xf1d2d37adad1b8e1!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1694255294386!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChooseService
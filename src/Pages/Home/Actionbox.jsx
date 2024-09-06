//import React from 'react'

const Actionbox = () => {
    return (
        <>
            <section className="actionbox h-[350px] relative lg:px-20">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="container relative h-full">
                    <div className="grid grid-cols-2  h-full relative z-10 items-center">
                        <div className="col-span-1 flex items-center">
                            <h1 className="text-white text-[60px] playfair leading-[70px]">
                                Join now with car wash <span className="text-primary">Discount</span> Program!
                            </h1>
                        </div>
                        <div className="col-span-1 flex justify-center items-center">

                            <button className="px-20 py-3 bg-primary text-white rounded-lg text-lg font-bold">
                                JOIN NOW
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Actionbox

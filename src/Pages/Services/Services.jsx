import React from 'react'
import Banner from '../Home/Banner'
import Heading from '../../Component/Heading'


function Services() {
    return (
        <>
            <Banner title="Clean Cars,Happy Drivers Only at" subtitle="Risne-It!" search={false} para={false} button="START BOOKING" />
            <section>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <Heading title="Our Services" subtitle="Quality Washing Services" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
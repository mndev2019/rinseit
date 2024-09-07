//import React from 'react'

import Banner from "../Home/Banner"
import ChoosePlan from "./ChoosePlan"
import ChooseService from "./ChooseService"

const Booking = () => {
    return (
        <>
            <Banner title="Car Washing
Online Booking" subtitle="service." search={false} para={false} button="START BOOKING" />
            <ChooseService />
            <ChoosePlan/>
        </>
    )
}

export default Booking
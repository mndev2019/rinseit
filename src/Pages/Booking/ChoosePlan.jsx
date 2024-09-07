//import React from 'react'

import { useState } from "react"
import ExteriorServiceplan from "./ExteriorServiceplan"
import Subscription from "../Home/Subscription"

const ChoosePlan = () => {
    const [aboutdata, SetAboutdata] = useState()
    const handleAbout = (itm) => {
        SetAboutdata(itm)
    }
    return (
        <>
            <section className='lg:px-20 lg:pb-10 '>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full flex gap-10 pb-10">
                                {
                                    ["EXTERIOR SERVICE", "WASHING PLAN"].map((itm) => (
                                        <>
                                            <button onClick={() => (handleAbout(itm))} className={`rounded-[8px]  text-[12px] font-[700] px-8 py-3 ${aboutdata == itm ? "bg-primary text-[#FCFCFC]" : "text-black"}`}>{itm}</button>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {
                        aboutdata == "EXTERIOR SERVICE" && (
                            <ExteriorServiceplan />
                        )
                    }

                </div>
            </section>
            <div className="pb-10">
                {
                    aboutdata == "WASHING PLAN" && (
                        <Subscription title={false} subtitle={false} />
                    )
                }
            </div>
        </>
    )
}

export default ChoosePlan
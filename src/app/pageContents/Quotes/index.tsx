"use client";

import React from 'react'
import GlassLayout from "@/components/GlassLayout"
import UseViewModel from './UseViewModel'
import Spinner from "@/components/Spinner"

const Quotes = () => {
    const model = UseViewModel();

    return (
        <GlassLayout className="mt-[3rem] py-5 mx-5">
            <section className='w-[90%] h-auto flex justify-start flex-col items-center py-5 px-20 lg:w-[50vw] xl:w-[60vw]'>
                <h1 className='text-xl'>Motivational Quotes</h1>
                {model.loading ? <Spinner /> :
                    <React.Fragment>
                        <div className='mt-5 text-justify'>
                            {model.quotes['content'] && <q className='text-2xl font-semibold'>{model.quotes['content']}</q>}
                        </div>
                        <div className='w-full text-right px-20 font-normal text-xl mt-[2rem]'>
                            {model.quotes['author'] && <h1 >- {model.quotes['author']}</h1>}
                        </div>
                    </React.Fragment>
                }
            </section>
        </GlassLayout>

    )
}

export default Quotes
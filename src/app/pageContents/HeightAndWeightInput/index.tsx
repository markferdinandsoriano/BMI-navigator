"use client"

import React from 'react'
import UseViewModel from "./useViewModel";
import GlassLayout from "@/components/GlassLayout";
import InputFields from "@/components/InputFields";

const HeightAndWeight = ({ setFieldValue }: { setFieldValue: (data: { [key: string]: string }) => void }) => {
    const model = UseViewModel(setFieldValue)


    return (
        <GlassLayout className='px-20 !h-fit !w-fit !items-start !mt-0'>
            <div className='w-full h-auto flex flex-col justify-start py-5'>
                {model.inputFields.map((item, index) => {
                    return <InputFields
                        key={index} type={item.type}
                        name={item.name}
                        title={item.title}
                        options={item.options}
                        genderValue={model.genderValue}
                        values={model.inputFieldsValue}
                        handleOnchange={model?.handleOnchange}
                    />
                })}
                <button className='bg-green-500 w-auto h-auto mt-4 rounded-md text-gray-100 py-1' onClick={model.handleSubmit}>Calculate</button>
                {!model.isEmpty && <h1 className='text-red-500 text-base text-center my-2'>Please fill up all details...</h1>}
            </div>
        </GlassLayout>
    )
}

export default HeightAndWeight
'use client';
import React from 'react'
import UseViewModel from "./useViewModel";
import GlassLayout from "@/components/GlassLayout";
import MeterGuage from "@/components/MeterGauge"
import Spinner from "@/components/Spinner"


const BmiResult = ({ fieldsValue }: { fieldsValue: { [key: string]: string } }) => {
    const model = UseViewModel(fieldsValue)

    const healtipsData = model.healthTips
    return (
        <React.Fragment>

            {!model.loading ?
                <GlassLayout className='!w-[70%] !h-fit !mt-0 py-5 px-5'>
                    <div className='w-full h-full flex flex-col items-center py-10 px-5 gap-12'>
                        <div className='w-full px-5 flex flex-row gap-6 justify-center items-center'>
                            <div className='w-full flex flex-row gap-6'>
                                <h1 className='font-semibold'>Age:</h1>
                                {model?.fieldsValue?.age && <p className='uppercase'>{model?.fieldsValue?.age} y/o</p>}
                            </div>
                            <div className='w-full flex flex-row gap-6'>
                                <h1 className='font-semibold'>Gender:</h1>
                                {model?.fieldsValue?.gender && <p className='uppercase'>{model?.fieldsValue?.gender}</p>}
                            </div>
                            <div className='w-full flex flex-row gap-6'>
                                <h1 className='font-semibold'>Height:</h1>
                                {model?.fieldsValue?.height && <p className='uppercase'>{model?.fieldsValue?.height} meters</p>}
                            </div>
                            <div className='w-full flex flex-row gap-6'>
                                <h1 className='font-semibold'>Weight:</h1>
                                {model?.fieldsValue?.weight && <p className='uppercase'>{model?.fieldsValue?.weight} kg</p>}
                            </div>
                            <div className='w-full flex flex-row gap-6'>
                                <h1 className='font-semibold'>BMI:</h1>
                                {model?.data?.bmi && <p className='uppercase'>{model?.data?.bmi}</p>}
                            </div>
                        </div>
                        <div className='w-full h-full flex flex-col justify-center items-center pt-10'>
                            <MeterGuage value={model.bmiValue} />
                            <div className='w-full h-auto text-center'>
                                <h1 className='text-xl font-bold mb-2'>IDEAL WEIGHT</h1>
                                {model.idealWeight && <h6 className='text-lg'>{model.idealWeight} kg</h6>}
                            </div>
                        </div>

                        <div className='w-full py-5 px-5 h-auto flex flex-col justify-center items-center'>
                            <h1 className='font-bold text-3xl mb-4'>Health Tips</h1>
                            {healtipsData &&
                                <ul className='list-disc'>
                                    {healtipsData.map((item: string, index: number) => {
                                        return <li key={index} className='mt-3'>{item}</li>
                                    })}

                                </ul>
                            }
                        </div>

                    </div>
                </GlassLayout>
                : <Spinner />
            }

        </React.Fragment>
    )
}

export default BmiResult
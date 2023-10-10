'use client'

import Image from 'next/image'
import React from 'react'
import Quotes from '@/app/pageContents/Quotes'
import HeightAndWeightInput from "@/app/pageContents/HeightAndWeightInput"
import BmiResult from '@/app/pageContents/BmiResult'


export default function Home() {
  const [fieldsValue, setFieldValue] = React.useState<{ [key: string]: string }>({})

  return (
    <main className="bg-white w-full h-full flex justify-center gap-[2rem]">
      <section className='bg-white w-full h-full flex flex-col items-center'>
        <h1 className="mt-6 text-3xl font-bold">HEIGHT AND WEIGHT (BMI)</h1>
        <Quotes />
        <div className="w-full h-full flex flex-col items-center py-10 gap-8">
          <HeightAndWeightInput setFieldValue={setFieldValue} />
          {JSON.stringify(fieldsValue) !== "{}" && <BmiResult fieldsValue={fieldsValue} />}
        </div>
      </section>
    </main>
  )
}

"use client"
import React from 'react'
const inputFields = [
    { name: 'age', title: 'Age', type: 'number' },
    {
        name: 'gender', title: 'Gender', type: 'radio', options: [{
            name: 'male', title: 'Male'
        }, { name: 'female', title: 'Female' }]
    },
    { name: 'height', title: 'Height', type: 'number' },
    { name: 'weight', title: 'Weight', type: 'number' },
]

type fieldValue = (data: { [key: string]: string }) => void


const UseViewModel = (setFieldValue: fieldValue) => {
    const [genderValue, setGenderValue] = React.useState<string>('')
    const [inputFieldsValue, setInputFieldsvalue] = React.useState<{ [key: string]: string }>({
        age: '',
        height: '',
        weight: '',
        gender: ''
    })
    const [isEmpty, setIsEmpty] = React.useState<boolean>(true)

    const handleOnchange = (e: any) => {
        const cloneInputFields = { ...inputFieldsValue }
        if (e.target.type === 'radio') {
            cloneInputFields['gender'] = e.target.name
            setGenderValue(e.target.name)
            setInputFieldsvalue(cloneInputFields)
        } else {
            cloneInputFields[e.target.name] = e.target.value
            setInputFieldsvalue(cloneInputFields)
        }


    }

    const handleSubmit = () => {
        const hasEmptyValue = Object.values(inputFieldsValue).some(x => x === null || x === '');
        setIsEmpty(!hasEmptyValue)
        if (hasEmptyValue) return;
        setFieldValue(inputFieldsValue)
    }



    return {
        inputFields,
        inputFieldsValue,
        genderValue,
        isEmpty,
        handleOnchange,
        handleSubmit
    }
}

export default UseViewModel
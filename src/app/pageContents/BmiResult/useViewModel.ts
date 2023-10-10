import React from 'react'
import axios from 'axios';
import HealthTips from '@/components/RecommendedTips'

type fieldValue = { [key: string]: string }

const useViewModel = (fieldsValue: fieldValue) => {
    const [data, setData] = React.useState<{ [key: string]: string }>({})
    const [bmiValue, setBmiValue] = React.useState<number>(0)
    const [healthTips, setHealthTips] = React.useState<string[]>([])
    const [idealWeight, setIdealWeight] = React.useState<string | number>('')
    const [loading, setLoading] = React.useState<boolean>(false)


    const calculateBmi = (weightKg: string, heightM: string) => {
        const convertWeight = Number(weightKg);
        const convertHeight = Number(heightM)

        const calculatedValue = convertWeight / (convertHeight * convertHeight)
        return calculatedValue.toFixed(2);
    }

    const getIdealWeight = async (fieldsValue: { [key: string]: string }) => {
        const gender = fieldsValue?.['gender']
        const heightInCm = typeof fieldsValue?.['height'] === 'string' ? Number(fieldsValue?.['height']) * 100 : fieldsValue?.['height'] * 100

        const options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
            params: {
                gender: gender,
                height: heightInCm
            },
            headers: {
                'X-RapidAPI-Key': '1457b1764emsh0d85f4f261d7c09p186040jsnb8952598f453',
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
        };

        try {
            const { data } = await axios.request(options);
            setIdealWeight(data?.data?.Hamwi)
        } catch (error) {
            console.error(error);
        }
    }


    const restructureValue = (bmi: string | number) => {
        const convertNumber = typeof bmi === 'number' ? bmi : Number(bmi)
        if (convertNumber < 18.5) {
            return 50;
        } else if (convertNumber >= 18.5 && convertNumber < 24.9) {
            return 160
        } else if (convertNumber >= 25 && convertNumber < 29.9) {
            return 260
        } else if (convertNumber > 30) {
            return 360
        } else {
            return 0
        }
    }

    const handleBmiResult = React.useCallback(async () => {
        const weight = fieldsValue['weight']
        const height = fieldsValue['height']
        const BMIResult = calculateBmi(weight, height)
        setLoading(true)
        if (!BMIResult) return;

        try {
            setData({
                bmi: BMIResult
            })
            const newValue = restructureValue(BMIResult)
            setBmiValue(newValue)
            const newTips = HealthTips(newValue);
            setHealthTips(newTips)
            getIdealWeight(fieldsValue)
        } catch (error) {
            console.error('error', error);
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 1500)
        }
    }, [fieldsValue])


    React.useEffect(() => {
        if (JSON.stringify(fieldsValue) === '{}') return;
        const hasEmptyValue = Object.values(fieldsValue).some(x => x === null || x === '');

        if (!hasEmptyValue) {
            handleBmiResult()
        }
    }, [handleBmiResult, fieldsValue])

    return {
        data,
        fieldsValue,
        loading,
        bmiValue,
        healthTips,
        idealWeight
    }
}

export default useViewModel
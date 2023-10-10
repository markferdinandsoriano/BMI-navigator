import React from 'react'
import './index.css'

type Props = {
    type: string,
    name: string,
    values?: { [key: string]: string } | undefined,
    title: string,
    options?: { [key: string]: string }[] | undefined
    handleOnchange: React.ChangeEventHandler<any>
    genderValue?: string | undefined
}

const InputFields = ({ type, name, values, title, options, handleOnchange, genderValue }: Props) => {

    const meter = <span>m&sup2;</span>

    const preventOtherCharacters = (evt: { [key: string]: any }, limit: number) => {
        const inputValue = evt.target.value;
        if (["e", "E", "+", "-"].includes(evt.key) || inputValue.length >= limit && evt.key !== 'Backspace') {
            return evt.preventDefault()
        }

    }

    const RenderedInput = () => {
        switch (type) {
            case 'radio':
                return <div className='flex flex-row justify-between mt-5'>
                    <label htmlFor={title}>{title}</label>
                    {options?.map((item, index) => {
                        const isCheckedRadio = item.name === genderValue;
                        return <div key={index} className='flex flex-row gap-x-4'>
                            <label htmlFor={item.title}>{item.title}</label>
                            <input type="radio" name={item.name} value={item.name} onChange={handleOnchange} checked={isCheckedRadio} />
                        </div>

                    })}
                </div>

            default:
                return <div className='flex flex-row justify-between mt-5'>
                    <label htmlFor={title} className='mr-5'>{title}</label>
                    {
                        name === 'height' || name === 'weight' ?
                            <div className="input-container">
                                <input className="css-input" onChange={handleOnchange} type={type} name={name} value={values?.[name] || ""} autoComplete='off' onKeyDown={
                                    (evt) => {
                                        const limit = name === 'height' ? 5 : 3
                                        return preventOtherCharacters(evt, limit)
                                    }
                                } />
                                <span className="icon">{name === 'weight' ? 'kg' : meter} </span>
                            </div>
                            :
                            <input className="css-input" onChange={handleOnchange} type={type} name={name} value={values?.[name] || ""} autoComplete='off' onKeyDown={(evt) => {
                                return preventOtherCharacters(evt, 3)
                            }} />
                    }
                </div>
        }
    }

    return (
        <div>{RenderedInput()}</div>
    )
}

export default InputFields
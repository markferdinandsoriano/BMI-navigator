"use client";

import React, { useEffect } from 'react'
import axios from 'axios';

const UseViewModel = () => {
    const [quotes, setQuotes] = React.useState<{ [key: string]: string }>({})
    const [loading, setLoading] = React.useState<boolean>(false)

    let getOnlyOneResult = React.useRef<Boolean>(true);

    const getQuotes = React.useCallback(async () => {
        setLoading(true)
        const options = {
            method: 'GET',
            url: 'https://api.quotable.io/random',
        };

        try {
            const response = await axios.request(options);
            const newQuotes = { ...quotes };
            newQuotes['author'] = response.data.author || 'Unknown';
            newQuotes['content'] = response.data.content || 'No Quotes For Today';
            setQuotes(newQuotes)
        } catch (error) {
            console.error('error', error);
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        if (getOnlyOneResult.current) {
            getQuotes()
            getOnlyOneResult.current = false
        }
    }, [getQuotes])


    return {
        getQuotes,
        quotes,
        loading
    }
}

export default UseViewModel
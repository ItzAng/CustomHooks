import { useState, useEffect, useRef } from "react"



export const useFetch = (url) => {

    const ref = useRef(true);
    const [state, setstate] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        return () => {
            ref.current = false;
        }
    }, []);



    useEffect(() => {
        setstate({ data: null, loading: true, error: null });
        // const resp = await fetch(url);
        // const json = await resp.json();
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (ref.current) {
                    setstate({
                        data,
                        loading: false,
                        error: null
                    })
                } else {
                    console.log("no se ejecuto el setState")
                }
            }).catch((error) => {
                setstate({
                    data: null,
                    loading: false,
                    error: "No se cargo info"
                })
            })
    }, [url]);


    return state;
}
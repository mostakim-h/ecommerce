import { useEffect, useState } from "react";

const useFetch = (link) => {

    const [data, setData] = useState(null)

    useEffect(()=>{
        fetch(link)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setData(data)
        })
    }, [link])

    return {data}
}

export default useFetch;
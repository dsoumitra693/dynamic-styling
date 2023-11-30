import axios from 'axios'
import { useEffect, useState } from 'react'

function useUpdate() {
    const [update, setUpdate] = useState([])

    useEffect(() => {
        let timer = setInterval(async function () {
            let res = await axios.get("http://localhost:3000/update/check")
            setUpdate(res.data)
        }, 800)
        return () => clearInterval(timer)

    }, [])
    return update
}

export default useUpdate
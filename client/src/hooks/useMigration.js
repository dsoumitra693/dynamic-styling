import axios from 'axios'
import { useEffect, useState } from 'react'

function useMigration() {
    const [update, setUpdate] = useState("")

    useEffect(() => {
        (async function () {
            await axios.post(
                `http://localhost:3000/update/make?data=${update}`)
        })()
    }, [update])

    return setUpdate
}

export default useMigration
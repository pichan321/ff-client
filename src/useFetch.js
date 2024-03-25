import axios from "axios"
import { useState } from "react"

export default function useFetch() {
    const [loading, setLoading] = useState(false)

    const GET = async (url) => {

        try {
            setLoading(true)
            var response = await axios.get(url)
            setLoading(false)

            if (response.status !== 200) {return null}

            return response.data
        } catch {
            setLoading(false)
            return null
        }
    }

    return {GET, loading}
}

import { useState, useEffect } from 'react'

export function useFetch(urls) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!urls) return
    setLoading(true)
    async function fetchData() {
      try {
        if (typeof urls === 'string') {
          const response = await fetch(urls)
          const data = await response.json()
          setData(data)
          console.log(data)
        } else {
          const arrayOfResponses = await Promise.all(
            urls.map((url) => fetch(url).then((res) => res.json()))
          )
          setData(arrayOfResponses)
        }
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return { isLoading, data, error }
}

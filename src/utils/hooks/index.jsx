import { useState, useEffect } from 'react'
import { User_MOCKED } from '../../utils/service/models/User_MOCKED'
import { User } from '../../utils/service/models/User'

export function useFetchUserData(idFromURL, urls) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const dataMode = process.env.REACT_APP_DATA_MODE

  useEffect(() => {
    if (!urls) return
    async function fetchData() {
      try {
        const arrayOfResponses = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        )
        setData(new User(arrayOfResponses))
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    function fetchMockedData() {
      setData(new User_MOCKED(Number(idFromURL)))
      setLoading(false)
    }
    dataMode === 'MOCK' ? fetchMockedData() : fetchData()
  }, [idFromURL])

  return { isLoading, data, error }
}

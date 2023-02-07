import { useState, useEffect } from 'react'
import { User } from '../../utils/service/models/User'
import { UserAPI } from '../../utils/service/models/UserAPI'

export function useFetch(idFromURL) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const urls = [
    `http://localhost:3000/user/${idFromURL}`,
    `http://localhost:3000/user/${idFromURL}/activity`,
    `http://localhost:3000/user/${idFromURL}/average-sessions`,
    `http://localhost:3000/user/${idFromURL}/performance`,
  ]
  const dataMode = process.env.REACT_APP_DATA_MODE
  console.log(dataMode)

  useEffect(() => {
    if (!idFromURL) return
    setLoading(true)
    async function fetchData() {
      try {
        const arrayOfResponses = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        )
        setData(new UserAPI(arrayOfResponses))
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    function fetchMockedData() {
      setLoading(true)
      setData(new User(Number(idFromURL)))
      setLoading(false)
    }
    dataMode === 'MOCK' ? fetchMockedData() : fetchData()
  }, [])
  return { isLoading, data, error }
}

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { User_MOCKED } from '../../utils/service/models/User_MOCKED'
import { User } from '../../utils/service/models/User'

/**
 * Custom hook to fetch and manage user data, either from an API or mocked data based on the environment configuration.
 * It handles data fetching, loading states, and error management. If an error occurs, it redirects to an error page.
 *
 * @function useFetchUserData
 * @param {string} idFromURL - The user ID extracted from the URL.
 * @returns {Object} An object containing the following properties:
 *  - `data`: The fetched user data (from API or mocked data).
 *  - `isLoading`: A boolean indicating whether the data is currently being loaded.
 *
 * @example
 * const { data, isLoading } = useFetchUserData(userId);
 */
export function useFetchUserData(idFromURL) {
  // API routes for fetching user data
  const urls = [
    `http://localhost:3000/user/${idFromURL}`,
    `http://localhost:3000/user/${idFromURL}/activity`,
    `http://localhost:3000/user/${idFromURL}/average-sessions`,
    `http://localhost:3000/user/${idFromURL}/performance`,
  ]

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // Determine if we are using mocked data or live API data
  const dataMode = process.env.REACT_APP_DATA_MODE
  const navigate = useNavigate()

  useEffect(() => {
    /**
     * Fetch user data from the API using the provided URLs.
     *
     * @async
     * @function fetchData
     * @returns {Promise<void>} Updates the `data` state with the user's data from API responses.
     */
    async function fetchData() {
      try {
        const arrayOfResponses = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        )
        setData(new User(arrayOfResponses))
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    /**
     * Fetch mocked user data instead of using the API.
     *
     * @function fetchMockedData
     * @returns {void} Updates the `data` state with mocked user data.
     */
    function fetchMockedData() {
      try {
        setData(new User_MOCKED(Number(idFromURL)))
      } catch (err) {
        navigate('/error', {
          state: { message: err.message },
        })
      } finally {
        setLoading(false)
      }
    }

    // Determine whether to fetch live API data or mocked data based on the environment setting
    dataMode === 'MOCK' ? fetchMockedData() : fetchData()
  }, [idFromURL])

  /**
   * Cleanup effect to reset the error state when the component using this hook is unmounted.
   *
   * @function cleanupError
   * @returns {void}
   */
  useEffect(() => {
    return () => {
      setError(null) // Reset the error state when component unmounts
    }
  }, [])

  /**
   * Effect that triggers a redirection to the error page when an error occurs.
   *
   * @function handleErrorRedirection
   * @returns {void}
   */
  useEffect(() => {
    if (error) {
      navigate('/error', {
        state: { message: error.message },
      })
    }
  }, [error, navigate])

  // Return the loading status and fetched data
  return { isLoading, data }
}

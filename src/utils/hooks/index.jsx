import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { User_MOCKED } from '../../utils/service/models/User_MOCKED'
import { User } from '../../utils/service/models/User'

/**
 * Custom hook : return data, if data is loading.
 * If an error is detected, there will be a redirect to the error page
 * @function useFetchUserData
 * @param {string} idFromURL Id catched in url, matches user id
 * @param {Array.<String>} urls Routes used by the api
 * @returns {Object} user data
 * @returns {Boolean} is data loading or not
 */

export function useFetchUserData(idFromURL, urls) {
  // data object destination
  const [data, setData] = useState([])
  // is loading or not status
  const [isLoading, setLoading] = useState(true)
  // error catched or not
  const [error, setError] = useState(null)
  // constant will be used to check datamode
  const dataMode = process.env.REACT_APP_DATA_MODE
  // used for redirection when an error is detected
  const navigate = useNavigate()

  useEffect(() => {
    /**
     * Fetch data with the API
     * @function fetchData
     * @return {Object|Boolean} user's data from API or catched error
     */
    async function fetchData() {
      try {
        const arrayOfResponses = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        )
        return setData(new User(arrayOfResponses))
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    /**
     * Fetch data with Mocked Data
     * @function fetchMockedData
     * @return {Object|Boolean} user's data from mocked data file or catched error
     */
    function fetchMockedData() {
      try {
        return setData(new User_MOCKED(Number(idFromURL)))
      } catch (err) {
        navigate('/error', {
          state: { message: err.message },
        })
      } finally {
        setLoading(false)
      }
    }

    //Datamode checking
    dataMode === 'MOCK' ? fetchMockedData() : fetchData()
  }, [idFromURL])

  /**
   * A way to clean up the error state when the component unmounts.
   * @function cleanupError
   */
  useEffect(() => {
    return () => {
      setError(null)
    }
  }, [])
  useEffect(() => {
    if (error) {
      navigate('/error', {
        state: { message: error.message },
      })
    }
  }, [error, navigate])

  return { isLoading, data }
}

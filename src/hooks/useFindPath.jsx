import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useFindPath = (find) => {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState('')
  useEffect(() => {
    if (location) {
      if (location.pathname.search(find) > -1) {
        setCurrentPath(find)
      }
    }
  }, [location])
  return currentPath
}
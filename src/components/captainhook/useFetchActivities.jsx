import { useEffect, useState } from 'react'
import { getAllActivities } from '../../api'

export const useFetchActivities = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        const fetchActivities = async () => {
          const results = await getAllActivities()
          setActivities(results)
          }
        fetchActivities();
        
        // const fetchRoutines = async () => {
        //     const results = await getAllRoutines()
        //     setRoutines(results)
        //     }
        //   fetchRoutines();

        //   const fetchRoutineById = async () => {
        //     const routineId = 3
        //     const results = await getRoutinesById(routineId)
        //     setGetRoutineById(results)
        //     }
        // fetchRoutineById();
    }, [])
    
    return {activities};
}
import { useEffect, useState } from 'react'
import { getAllRoutines, getRoutinesById, getUserRoutines } from '../../api'

export const useFetchRoutines = () => {
    const [routines, setRoutines] = useState([])
    const [getRoutineById, setGetRoutineById] = useState([])
    const [userRoutines, setUserRoutines] = useState([]);

    useEffect(() => {
        const fetchRoutines = async () => {
          const results = await getAllRoutines()
          setRoutines(results)
          }
        fetchRoutines();
    
        const fetchRoutineById = async () => {
          const routineId = 3
          const results = await getRoutinesById(routineId)
          setGetRoutineById(results)
          }
        fetchRoutineById();

        const fetchUserRoutines = async () => {
          const results = await getUserRoutines();
          setUserRoutines(results);
          console.log("user routines", userRoutines);
        }
        fetchUserRoutines();

        }, [])
    
        return {routines, getRoutineById};
    }
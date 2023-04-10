import React from 'react'

const RoutineButton = ({ id, selectedRoutine, setSelectedRoutine }) =>  (
  <button
  className="activity-button"
  type='button'
  onClick={() =>
    setSelectedRoutine(
      selectedRoutine === id ? null : id
    )
  }
>
  {selectedRoutine === id ? "Hide Details" : "Show Details"}
</button>
  )


export default RoutineButton
import React, { Fragment, useState } from 'react';
import { useFetchRoutines } from './captainhook/useFetchRoutines';
import RoutineButton from './UI/RoutineButton';
import { deleteRoutine_Activity } from "../api";

const Routines = ({online, token}) => {

const { routines } = useFetchRoutines();
console.log("routines array", routines);
const [selectedRoutine, setSelectedRoutine] = useState(null);

const handleDeleteRA = async (routineActivityId) => {
  await deleteRoutine_Activity(routineActivityId, {token});
};

  return (
    <main className="page-right">
      <h1>Routine </h1>
      <aside>
        <section>

          {routines.map((routine) => (
            // Only show routines that are public when offline
            !online && !routine.isPublic ? 
              null : (
                  <div key={routine._id} className="routine-container">
                    <p><strong>Creator Name: </strong> {routine.creatorName}</p>
                    {online &&
                    <>
                      <span className="routine-small"><strong>ID: </strong> {routine.id}</span>
                      <span className="routine-small"><strong>Creator ID: </strong> {routine.creatorId}</span>
                    </>
                    }
                    {/*only shows isPublic if online */}
                    {online &&
                      <Fragment>
                        <span className="routine-small"><strong>isPublic: </strong>{routine.isPublic === true ? <span>Yes</span> : <span>No</span>}</span>
                      </Fragment>
                    }
                    <p><strong>Name: </strong>{routine.name}</p>
                    <p><strong>Goal: </strong> {routine.goal}</p>
                    <span className="activitiesInRoutines"><strong>Number of Activities: </strong></span>
                    {routine.activities.length === 0 ? <span>No Activities</span> : (<span>{routine.activities.length} </span>)}
                    <br/>
                    {routine.activities.length === 0 ? null : 
                      <RoutineButton selectedRoutine={selectedRoutine} id={routine.id} setSelectedRoutine={setSelectedRoutine}/>
                    }
                    {selectedRoutine === routine.id && (
                      <div className='attachedActivities--container'>
                        {routine.activities.map((activity) => (
                          <div key={activity.id} className="activityInRoutines">
                            <p><strong>Name:</strong> {activity.name}</p>
                            {online &&
                            <Fragment>
                            <span className="activity-small"><strong>RoutineAcitivity ID:</strong> {activity.routineActivityId}</span>
                            <span className="activity-small"><strong>Routine ID:</strong> {activity.routineId}</span>
                            <br/>
                            </Fragment>
                            }
                            <p><strong>Description:</strong> {activity.description}</p>
                            <span className="activity-big"><strong>Count:</strong> {activity.count}</span>
                            <span className="activity-big"><strong>Duration:</strong> {activity.duration} min(s)</span>
                            <br/>
                            <button 
                                className='delete-routine-button'
                                onClick={() => handleDeleteRA(activity.routineActivityId)}>Delete Routine
                            </button>    
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) 
              )
          )}
        </section>
      </aside>
    </main>
  );
}

export default Routines;
import React from 'react';
import { useFetchActivities } from './captainhook/useFetchActivities';

const Activities = () => {

const { activities } = useFetchActivities();
console.log("actvities array", activities);

    return(
        <main className="page-right">
            <h1>Activities</h1>
            {activities.map((activity, i) => (
                <div key={activity._id} className="allActivities-container">
                <p className="activity-small"><strong>ID: </strong> {activity.id}</p>
                <p><strong>Name: </strong> {activity.name}</p>
                <p><strong>Description: </strong> {activity.description}</p>
            </div>
            ))}
        </main>
    )
}

export default Activities;
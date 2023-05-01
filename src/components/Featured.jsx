import React, { useState } from 'react';
import { createActivity, createRoutine } from '../api'
import useToastNotification from './UI/useToastNotification';
import MainButton from './UI/MainButton';

const Featured = ({online, token}) => {
    const { toastNotification } = useToastNotification();

    //routines fields
    const [routineName, setRoutineName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(false);

    //activities fields
    const [activityName, setActivityName] = useState("");
    const [description, setDescription] = useState("");

    //create routine handler
    const createRou = async (event) => {
        event.preventDefault();
        if (!online) {
            toastNotification(`You must be online to create a routine.`, 'error');
            return;
          } else {
        try {
            const result = await createRoutine({token, routineName, goal, isPublic})
            if (result.error) {
                toastNotification(`Error ${result.message} `, 'error');
            } else {
                toastNotification(`Routine created!`, 'success');
            }
        console.log("create routine", result);
    } catch (error) {
        toastNotification(`Error creating routine.`, 'error');
        }
    }
};

    //create activity handler
    const createAct = async (event) => {
        event.preventDefault();

        if (!online) {
            toastNotification(`You must be online to create an activity.`, 'error');
            return;
        } else {
        try {
            const result = await createActivity({token, activityName, description});
            if (result.error) {
                toastNotification(`Error ${result.message} `, 'error');
            } else {
                toastNotification(`Activity created!`, 'success');
            }
            console.log("create activity", result);
        } catch (error) {
            toastNotification(`Error creating routine.`, 'error');
            }
        }
    };

    return(
        <main className="featured-main" >
            <h2 className="createt-station">Create Station</h2>
            <aside>
            <h2 className="create-h2">Create Routine</h2>
                <form onSubmit={createRou} id="routine-form">
                    {/* CHANGE to InputField */}
                    <input
                        type="text"
                        required
                        className="create-name-input"
                        placeholder="Name"
                        onChange={event => setRoutineName(event.target.value)}
                        />
                    <input
                        type="text"
                        required
                        className="create-goal-input"
                        placeholder="Goal"
                        onChange={event => setGoal(event.target.value)}
                        />
                    <label className="create-public-input">
                    <span className="chekboxText">isPublic?</span>
                    <input type="checkbox" id="public-id"
                    checked={isPublic}
                    onChange={(event) => setIsPublic(event.target.checked)} />
                    </label>
                    <MainButton fromType='routine-form' btnLabel='Submit Routine' /> 
                </form>
                <br/>
            <h2 className="create-h2">Create Activity</h2>
                <form onSubmit={createAct} id="activity-form">
                    {/* CHANGE to InputField */}
                    <input
                        type="text"
                        required
                        className="create-name-input"
                        placeholder="Name"
                        onChange={event => setActivityName(event.target.value)}
                    />
                    <textarea
                        type="text"
                        required
                        className="create-desc-input"
                        placeholder='Description'
                        onChange={event => setDescription(event.target.value)}
                    />
                    <MainButton fromType='activity-form' btnLabel='Submit Activity' /> 
                </form>
            </aside>
        </main>
    )
}

export default Featured;
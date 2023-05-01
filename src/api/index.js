import { BASE_URL } from "../config";

//Users Fetch---------------------------------------------------
// POST /users/register
export const userRegister = async (username, password) => {
	try {
		const response = await fetch(`${BASE_URL}/users/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				// user: {
				username,
				password,
				// }
			}),
		});
		const result = await response.json();
		console.log("userRegister", result);
		return result;
	} catch (err) {
		console.error(err);
	}
};

// POST /users/login
export const userLogin = async (username, password) => {
	try {
		const response = await fetch(`${BASE_URL}/users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				// user: {
                username,
				password,
                // }
			}),
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};


// GET /users/me
export const userData = async () => {
	try {
		const response = await fetch(`${BASE_URL}/users/me`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};

//   GET /users/:username/routines
export const getUserRoutines = async ({username, token}) => {
	try {
		const response = await fetch(`${BASE_URL}/activities/${username}/routines`, {
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${token}`,
			},
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};

//Activities Fetch----------------------------------------------
// GET /activities
export const getAllActivities = async () => {
	try {
		const response = await fetch(`${BASE_URL}/activities`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();

		// console.log("getAllActivities", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};


// POST /activities
export const createActivity = async ({token, activityName, description}) => {

	try {
		const response = await fetch(`${BASE_URL}/activities`, 
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				name: activityName.charAt(0).toUpperCase() + activityName.slice(1),
				description: description.charAt(0).toUpperCase() + description.slice(1),
			}),
		});

		const result = await response.json();

		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};


// PATCH /activities/:activityId
export const updateActivityById = async ({token}) => {
	try {
		const response = await fetch(`${BASE_URL}/activities`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			method: "PATCH",
			body: JSON.stringify({
				name: "Running",
				description: "Keep on running, til you drop!",
			}),
		});

		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};

// GET /activities/:activityId/routines
export const getActivityByActivityId = async () => {
	try {
		const response = await fetch(`${BASE_URL}/activities/3/routines`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};


//Routines Fetch------------------------------------------------
// GET /routines
export const getAllRoutines = async () => {
	try {
		const response = await fetch(`${BASE_URL}/routines`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();

		// console.log("getAllRoutines", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};



// POST /routines
export const createRoutine = async ({token, routineName, goal, isPublic}) => {
		// const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
	try {
		const response = await fetch(`${BASE_URL}/routines`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				name: routineName.charAt(0).toUpperCase() + routineName.slice(1),
				goal: goal.charAt(0).toUpperCase() + goal.slice(1),
				isPublic: isPublic
			}),
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};

// PATCH /routines/:routineId
export const updatedRoutine = async ({token, routineName, goal, isPublic, routineId}) => {
	try {
		const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				name: routineName.charAt().toUpperCase() + routineName.slice(1),
				goal: goal.charAt().toUpperCase() + goal.slice(1),
				isPublic: isPublic
			}),
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};



// DELETE /routines/:routineId
export const deleteRoutine = async (routineId, {token}) => {
	try {
		const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${token}`,
			},
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};


// POST /routines/:routineId/activities
export const attachActivityToRoutinebyId = async () => {
	try {
		const response = await fetch(`${BASE_URL}/routines/6/activities`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				activityId: 7,
				count: 1,
				duration: 20,
			}),
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};



// EXTRA
export const getRoutinesById = async (routineId) => {
	try {
		const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();

		// console.log("getRoutinesById", result);
		return result;
	} catch (error) {
		console.error(error);
	}
};


//Routines_Activities Fetch-------------------------------------
// PATCH /routine_activities/:routineActivityId
export const UpdateRoutine_Activity = async ({token}) => {
	try {
		const response = await fetch(`${BASE_URL}/routine_activities/11`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				count: 2,
				duration: 30,
			}),
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};



// DELETE /routine_activities/:routineActivityId
export const deleteRoutine_Activity = async (routineActivityId, {token}) => {
	try {
		const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};


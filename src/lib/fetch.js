const baseURL = 'https://www.swapi.tech/api/';

export const fetchAllPeople = async(dispatch) => {
    try {
        const response = await fetch(`${baseURL}/people`);

        if(!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        dispatch({
            type: 'fetchedAllPeople',
            payload: data.results,
        })
        return data;
    }
    catch (error) {
        console.error("Error getting Star Wars people profiles!", error)
    }
}

export const fetchSinglePerson = async(uid, dispatch) => {
    try {
        const response = await fetch(`${baseURL}/people/${uid}`);

        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        dispatch({
            type: 'fetchedSinglePerson',
            payload: data.result.properties,
        })
        return data;
    }
    catch (error) {
        console.error("Error getting Star Wars person profile!", error)
    }
}

export const fetchAllPlanets = async() => {}
export const fetchSinglePlanet = async() => {}

export const fetchAllVehicles = async() => {}
export const fetchSingleVehicle = async() => {}

// TODOs
// 1. We need to fetch SWAPI data that we need
//      - fetch.js file to centralize our fetches
//      - useEffect to handle this side effect
// 2. Landing Page will have <component>Set.jsx files as children
//      - pass as props the store information for each set

import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { CharacterSet } from "../components/CharacterSet";
import { fetchAllPeople, fetchAllPlanets, fetchAllVehicles } from "../lib/fetch";

export const StarWarsLandingPage = () => {
    const {store, dispatch} = useGlobalReducer();



    useEffect(() => {
        // fetchAllPeople();
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="person-group">
                        <h1>Characters</h1>
                        <CharacterSet 
                            allpeople={store.allPeople}
                            dispatch={dispatch}
                        />
                    </div>                    
                    <div className="planet-group"></div>
                    <div className="vehicle-group"></div>
                </div>
                <div className="col-1"></div>
            </div>  
        </>
    );
}

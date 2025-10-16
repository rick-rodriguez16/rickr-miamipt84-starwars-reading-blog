import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchSinglePerson } from "../lib/fetch";

export const PeopleProfilePage = () => {
    const {store, dispatch} = useGlobalReducer();
    const {uid} = useParams();

    useEffect(() => {
        fetchSinglePerson(parseInt(uid), dispatch);
    }, [])

    return (
        <>
              <div className="container">
                {
                    store.singlePerson.map(demographic => {

                        return (
                            <div key={parseInt(uid)}>
                                {demographic.name}
                            </div>
                        )
                    })
                }
              </div>
        </>
    );
}

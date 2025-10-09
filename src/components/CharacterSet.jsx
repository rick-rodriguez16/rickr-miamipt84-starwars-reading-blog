import { CharacterCard } from "./CharacterCard";


export const CharacterSet = ({ allpeople, dispatch }) => {

    return (
        <>
            <div className="row">
                {
                    allpeople.map(person => {
                        return (
                            <CharacterCard 
                                key={person.uid}
                                uid={person.uid}
                                name={person.name}
                                dispatch={dispatch}
                            />
                        )
                    })
                }
            </div>
        </>
    );
}

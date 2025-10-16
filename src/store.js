import { StoreProvider } from "./hooks/useGlobalReducer";

export const initialStore=()=>{
  return{
    allPeople: [
      {
          "uid": "1",
          "name": "Luke Skywalker",
          "url": "https://www.swapi.tech/api/people/1"
      },
      {
          "uid": "2",
          "name": "C-3PO",
          "url": "https://www.swapi.tech/api/people/2"
      },
      {
          "uid": "3",
          "name": "R2-D2",
          "url": "https://www.swapi.tech/api/people/3"
      },
      {
          "uid": "4",
          "name": "Darth Vader",
          "url": "https://www.swapi.tech/api/people/4"
      },
      {
          "uid": "5",
          "name": "Leia Organa",
          "url": "https://www.swapi.tech/api/people/5"
      },
      {
          "uid": "6",
          "name": "Owen Lars",
          "url": "https://www.swapi.tech/api/people/6"
      },
      {
          "uid": "7",
          "name": "Beru Whitesun lars",
          "url": "https://www.swapi.tech/api/people/7"
      },
      {
          "uid": "8",
          "name": "R5-D4",
          "url": "https://www.swapi.tech/api/people/8"
      },
      {
          "uid": "9",
          "name": "Biggs Darklighter",
          "url": "https://www.swapi.tech/api/people/9"
      },
      {
          "uid": "10",
          "name": "Obi-Wan Kenobi",
          "url": "https://www.swapi.tech/api/people/10"
      }
    ],
    singlePerson: [],
    allPlanets: [],
    singlePlanet: [],
    allVehicles: [],
    singleVehicle: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'fetchedAllPeople':
    {
      const peopleArray = action.payload;
      return {
        ...store,
        allPeople: [...peopleArray],
      }
    }
    case 'fetchedAllPlanets':
    {
      break;
    }
    case 'fetchedAllVehicles':
    {
      break;
    }
    case 'favedProfile':
    {
      const { uid, name } = action.payload;

      if (!store.favorites.some(profile => profile.uid === uid && profile.name === name)) {
        return {
          ...store,
          favorites: [...store.favorites, {uid: uid, name: name}]
        }
      }
      
      return {
        ...store,
      }
    }
    case 'removedFavorite':
    {
      const { name } = action.payload;
      const filteredArray = store.favorites.filter(favorite => favorite.name !== name);
      
      return {
        ...store,
        favorites: [...filteredArray]
      }
    }
    default:
      throw Error('Unknown action.');
  }    
}

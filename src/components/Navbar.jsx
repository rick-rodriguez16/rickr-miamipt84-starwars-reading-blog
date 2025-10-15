import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const {store, dispatch} = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				
				
				
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars Reading Blog</span>
				</Link>



				<div className="ml-auto">
					<div className="btn-group">
						<button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							{
								store.favorites.map(favorite => {

									return (
										<li className="d-flex justify-content-between" key={`${favorite.name}${favorite.uid}`}>
											<Link className="dropdown-item" to={`/profile-page/people/${favorite.uid}`}>
												{favorite.name}
											</Link>
											<svg 
												xmlns="http://www.w3.org/2000/svg" 
												width="30"
												height="30" 
												fill="currentColor" 
												className="bi bi-trash3-fill my-auto me-3" 
												viewBox="0 0 16 16"
												// onClick={() => {}}    this onClick should dispatch to delete the character from the faves array in the store
												>
												<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
											</svg>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>


			</div>
		</nav>
	);
};
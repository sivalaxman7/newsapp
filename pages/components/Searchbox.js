import react from "react";
import Card from "./Card";
const Searchbox = ({searchValue,setSearchValue}) => {
	return (
		<div className="inputbox">
			<input className='input-bar'
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder='Search for a Blog...'
			/>
		</div>
	);
};

export default Searchbox;
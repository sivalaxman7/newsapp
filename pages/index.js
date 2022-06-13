import react,{useEffect,useState} from "react"
import App from "next/app"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Searchbox from "./components/Searchbox"
import Bloglist from "./components/Bloglist"
import axios from "axios"

export default function Home() {

  const [blogs, setBlogs] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getBlogRequest = async (searchValue) => {
		const url = `http://localhost:3000/showing?s=${searchValue}`;
		const response = await axios.get(url);
		//console.log(response)

		// console.log(responseJson)

		if (response) {
			setBlogs(response.data);
		}
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log("Latitude is :", position.coords.latitude);
			console.log("Longitude is :", position.coords.longitude);
		  });
		getBlogRequest(searchValue);
	}, [searchValue]);

	return (
	<>

  <Navbar/>
  <Searchbox searchValue={searchValue} setSearchValue={setSearchValue}/>
  <div className="card-outerdiv" suppressHydrationWarning>
  <Bloglist blogs={blogs}/>
  </div>
  
  </>  
	);
}

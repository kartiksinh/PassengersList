import { useState, useEffect } from 'react';
import Passenger from '../components/Passenger/Passenger';
import { ContentDiv } from './PassengerListStyles';
import Axios from 'axios';


function UserList() {

const [currentPage, setPage] = useState(0);
const [totalPages, setTotalPages] = useState(null);
const[ passengers, setPassengers] = useState([]);

const url = `https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=21`;


useEffect(()=>{
    async function fetchData() {
     const res = await Axios.get(url)
     const newPassengers = res.data.data;
     const total = res.data.totalPages;
     setPassengers(passengers.concat(newPassengers));
     setTotalPages(total);
    }

    fetchData();
},[currentPage]);

const scrollToEnd = () => {
  if(currentPage !== totalPages){
    setPage(currentPage+1);
  }
}

window.onscroll = function() {
  // lets check the user has scrolled down to the bottom or not
  if (
    window.innerHeight + document.documentElement.scrollTop
    === document.documentElement.offsetHeight
  ){
    scrollToEnd()
  }
}


  return (
    <div style={ContentDiv}>
        <h1>Air India Passengers</h1>
        <Passenger 
          passengers={passengers}
        />
    </div>
  )
  

}

export default UserList;

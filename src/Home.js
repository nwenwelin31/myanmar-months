import React, { useState } from "react";
import useFetch from "./useFetch";
import { FaRegCircle } from "react-icons/fa6";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Home = () => {
  //fetch months data
  const { data: months } = useFetch("https://json-server-snowy-pi.vercel.app/Months");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // 3 columns * 4 rows

  if (months === null) {
    return <div>Loading...</div>;
  }

   // Calculate indexes of items to display on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

   // Slice the array only if it is not null
  const currentMonths = months.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle pagination button click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  return (
    <div className="home">
    <h1>မြန်မာလ အသေးစိတ်များ</h1>
      <div className="col-12">
        <div className="d-flex">
        {/* loop for month image */}
        {
          currentMonths.map(month => (
            <Link to={`/months/${month.id}`} className='col m-1'  key={month.id}>
            <div className="card bg-warning" style={{ height: "100%", overflow: "hidden" }}>
            <div className="ratio" style={{ paddingTop: "100%", position: "relative" }}>
            <img className="position-absolute top-0 start-0 w-100 h-100 object-cover" src={`${process.env.PUBLIC_URL}/${month.ImagePath}`} alt="month" />

            </div>
                {/* month name on image */}
                <div className="position-absolute bottom-50 start-50 translate-middle-x text-center text-white">
                  <h4>{month.MonthMm}</h4>
                </div>
            </div>
            </Link>
            
          ))
        }
          
        </div>
        <div className="pagination d-flex justify-content-center mt-3">
          {[...Array(Math.ceil(months.length / itemsPerPage)).keys()].map(
            (number) => (
              <div
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className="mx-1"
              >
                <FaRegCircle style={{ color: 'orange' }} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import useFetch from "./useFetch";
import { FaRegCircle } from "react-icons/fa6";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Home = () => {
  //fetch months data
  const { data: months } = useFetch("http://localhost:8000/Tbl_Months");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // 3 columns * 4 rows

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
    <div className="row home">
    <h1>မြန်မာလ အသေးစိတ်များ</h1>
      <div className="col-lg-12">
        <div className="row">
        {/* loop for month image */}
        {
          currentMonths.map(month => (
            <Link to={`/months/${month.id}`} className='col-lg-3 col-md-5 m-3'  key={month.id}>
            <div className="card bg-warning">
            <div className="ratio" style={{"--bs-aspect-ratio": '100%'}}>
            <img className="img-fluid pt-1 pb-1" src={`${process.env.PUBLIC_URL}/${month.ImagePath}`} alt="month" />

            </div>
                {/* month name on image */}
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
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

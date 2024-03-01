import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { FaArrowCircleLeft } from "react-icons/fa";


const MonthDetail = () => {
  const { id } = useParams();
  const {
    data: month,
    error,
    isPending,
  } = useFetch("https://json-server-snowy-pi.vercel.app/Months/" + id);

  return (
    <div className="mx-5">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {month && (
        <div>
        {/* title */}
          <div>
              <h2 className="text-center">
                {month.MonthMm}({month.MonthEn})
              </h2><br/>
              <h5 className="text-center">
                {month.FestivalMm}({month.FestivalEn})
              </h5>
            </div>
            {/* <Link to="/" className="position-fixed start-50">
              <FaArrowCircleLeft  size={40} style={{ color: 'black' }} />
            </Link> */}

          <div className="row">
            <div className="col-md-6 mt-4">
              <img
                src={`${process.env.PUBLIC_URL}/${month.DetailImagePath}`}
                alt="monthPhoto" data-aos="zoom-in" data-aos-delay="500"
                className="img-fluid rounded" style={{ height: '20%', width: '100%' }}
              />
              <p className="mt-4">{month.Description}</p>
            </div>
            <div className="col-md-6">
           
                  <p className="mt-4">{month.Detail}</p>
              
            </div>
          </div>

          {/* <button onClick={handleClick}>Delete</button> */}
          {/* Arrow Container */}
          <div className="arrow-container">
            <Link to="/">
              <FaArrowCircleLeft size={40} style={{ color: 'black' }} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthDetail;

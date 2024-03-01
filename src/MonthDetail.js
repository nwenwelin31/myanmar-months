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
  } = useFetch("http://localhost:8000/Tbl_Months/" + id);

  return (
    <div className="mx-5">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {month && (
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h2>
                {month.MonthMm}({month.MonthEn})
              </h2><br/>
              <h5>
                {month.FestivalMm}({month.FestivalEn})
              </h5>
            </div>
            <Link to="/" className=''>
              <FaArrowCircleLeft  size={40} style={{ color: 'black' }} />
            </Link>
          </div>

          <div className="row">
            <div className="col-md-6 mt-4">
              <img
                src={`${process.env.PUBLIC_URL}/${month.DetailImagePath}`}
                alt="monthPhoto" data-aos="zoom-in" data-aos-delay="500"
                className="img-fluid rounded" style={{ height: '18rem', width: '30rem' }}
              />
              <p className="mt-4">{month.Description}</p>
            </div>
            <div className="col-md-6">
            {month.Detail.length > 10 ? (
                <div>
                  <p className="mt-4">{month.Detail}</p>
                </div>
              ) : (
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/${month.DetailImagePath}`}
                    alt="monthPhoto"
                    className="img-fluid rounded"
                  />
                  <p className="">{month.Detail}</p>
                </div>
              )}
            </div>
          </div>

          {/* <button onClick={handleClick}>Delete</button> */}
        </div>
      )}
    </div>
  );
};

export default MonthDetail;

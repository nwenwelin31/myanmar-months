import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { IoIosArrowForward } from "react-icons/io";

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
          <div className="d-flex justify-content-between">
            <div data-aos="zoom-in">
              <h2>
                {month.MonthMm}({month.MonthEn})
              </h2>
              <h5>
                {month.FestivalMm}({month.FestivalEn})
              </h5>
            </div>
            <Link to="/" className=''>
              <IoIosArrowForward size={60} style={{ color: 'black' }} />
            </Link>
          </div>

          <div className="row">
            <div className="col-md-6 mt-4">
              <img
                src={`${process.env.PUBLIC_URL}/${month.ImagePath}`}
                alt="monthPhoto"
                className="img-fluid rounded" style={{ height: '20rem', width: '30rem' }}
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
                    src={`${process.env.PUBLIC_URL}/${month.ImagePath}`}
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

import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

const MonthDetail = () => {
    const { id } = useParams();
    const { data: month, error, isPending } = useFetch('http://localhost:8000/Tbl_Months/' + id);


    return (
        <div className='mx-5'>

            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {month && (
                <div>
                    <div data-aos="zoom-in">
                    <h2>{month.MonthMm}({month.MonthEn})</h2>
                    <h5>{month.FestivalMm}({month.FestivalEn})</h5>
                    </div>

                    <div className='row'>
                        <div className='col-md-4 mt-4'>
                            <img src={`${process.env.PUBLIC_URL}/${month.ImagePath}`} alt='monthPhoto' className='img-fluid card-img-top rounded' />
                        </div>
                        <div className='col-md-8'>
                            <p className='mt-4'>{month.Description}</p>
                            <p className='mt-4'>{month.Detail}</p>
                        </div>

                    </div>

                    {/* <button onClick={handleClick}>Delete</button> */}
                </div>
            )
            }

        </div>
    )
}

export default MonthDetail

import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

const MonthDetail = () => {
    const {id} = useParams();
    const {data:month, error, isPending} = useFetch('http://localhost:8001/Tbl_Months/'+id);
    console.log("http://localhost:8001/Tbl_Months/")
    
  return (
    <div>

{isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {month && (
            <article>
                    <h2>{month.MonthMm}({month.MonthEn})</h2>
                    <p>{ month.FestivalMm }</p>
                    {/* <img src={`${process.env.PUBLIC_URL}/${month.ImagePath}`} alt='monthPhoto'/> */}
                    {/* <div>{month.Description}</div>
                    <div>{month.Detail}</div> */}
                    {/* <button onClick={handleClick}>Delete</button> */}
            </article>
        )
      }

    </div>
  )
}

export default MonthDetail

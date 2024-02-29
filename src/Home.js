import React, { useState } from "react";
import useFetch from "./useFetch";
import { FaRegCircle } from "react-icons/fa6";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Home = () => {
  //fetch months data
  const { data: months } = useFetch("https://json-server-snowy-pi.vercel.app/Months");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // 4 columns * 3 rows


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
    <h2>မြန်မာလ အသေးစိတ်များ</h2>
    <div className='card moving-text-container mb-3 ms-1 shadow' data-aos="zoom-in">
      <p  className='moving-text pt-2 textlight' style={{ whiteSpace: 'nowrap' }}>ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံသည် အရှေ့တောင်အာရှတွင် ယဉ်ကျေးမှုအထွန်းကားဆုံးသော နိုင်ငံတစ်နိုင်ငံဖြစ်ပါသည်။ ရှေးခေတ်မြန်မာတို့၏ ဘာသာရေး၊ လူမှုရေး၊ နိုင်ငံရေး၊ ပညာရေးစသည်တို့ကို အခြေခံ၍ ပေါ်ပေါက်လာသော "ဆယ့်နှစ်လရာသီ ရိုးရာပွဲတော်များ" ကို မြန်မာပြက္ခဒိန်ဖြင့် သတ်မှတ်လေ့ရှိသည်။ အဆိုပါပွဲတော်များသည် မြန်မာလူမျိုးတို့ နှစ်ပေါင်း (၁၀ဝဝ)နီးပါး အစဉ်အဆက်ထိန်းသိမ်းလာခဲ့သော ရိုးရာယဉ်ကျေးမှု ဓလေ့ထုံးတမ်းများလည်း ဖြစ်သည်။ ယဉ်ကျေးမှုပွဲတော်များ ကျင်းပခြင်းဖြင့် စွယ်စုံပညာရှင်များ ပေါ်ထွန်းလာစေနိုင်ခြင်း၊ ဘာသာသာသနာထွန်းကားပြန့်ပွားလာစေခြင်း၊ နိုင်ငံတော် တိုးတက်သာယာစေခြင်း စသည့်အကျိုးကျေးဇူးများကိုရရှိစေနိုင်ပါသည်။</p>
    </div>
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
        <div className="pagination d-flex justify-content-center m-4">
          {[...Array(Math.ceil(months.length / itemsPerPage)).keys()].map(
            (number) => (
              <div
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className="mx-1"
              >
                <FaRegCircle  key={number}
                  onClick={() => paginate(number + 1)}
                 style={{ color:"orange" }} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
// import { FaRegCircle } from "react-icons/fa6";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home = () => {
  //fetch months data
  const { data: months } = useFetch("https://json-server-snowy-pi.vercel.app/Months");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    // screen responsive
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1015) {
        setItemsPerPage(4);
      } else if (screenWidth >= 768) {
        setItemsPerPage(3);
      } else if (screenWidth >= 580) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize(); // Set initial items per page based on screen width
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  if (months === null) {
    return <div>Loading...</div>;
  }

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const totalPages = Math.ceil(months.length / itemsPerPage);

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const startIdx = (currentPage - 1) * itemsPerPage;
  const visibleMonths = months.slice(startIdx, startIdx + itemsPerPage);
  
  //resposive function
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //     slidesToSlide: 1 // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3,
  //     slidesToSlide: 1 // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1 // optional, default to 1.
  //   }
  // };

  return (
    <div className="home">
      <h2 data-aos="slide-down" data-aos-delay="1000">
        မြန်မာလ အသေးစိတ်များ
      </h2>
      <div
        className="card moving-text-container mb-3 shadow"
        data-aos="zoom-in"
      >
        <p
          className="moving-text pt-2 textlight"
          style={{ whiteSpace: "nowrap" }}
        >
          ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံသည် အရှေ့တောင်အာရှတွင်
          ယဉ်ကျေးမှုအထွန်းကားဆုံးသော နိုင်ငံတစ်နိုင်ငံဖြစ်ပါသည်။
          ရှေးခေတ်မြန်မာတို့၏ ဘာသာရေး၊ လူမှုရေး၊ နိုင်ငံရေး၊ ပညာရေးစသည်တို့ကို
          အခြေခံ၍ ပေါ်ပေါက်လာသော "ဆယ့်နှစ်လရာသီ ရိုးရာပွဲတော်များ" ကို
          မြန်မာပြက္ခဒိန်ဖြင့် သတ်မှတ်လေ့ရှိသည်။ အဆိုပါပွဲတော်များသည်
          မြန်မာလူမျိုးတို့ နှစ်ပေါင်း (၁၀ဝဝ)နီးပါး အစဉ်အဆက်ထိန်းသိမ်းလာခဲ့သော
          ရိုးရာယဉ်ကျေးမှု ဓလေ့ထုံးတမ်းများလည်း ဖြစ်သည်။ ယဉ်ကျေးမှုပွဲတော်များ
          ကျင်းပခြင်းဖြင့် စွယ်စုံပညာရှင်များ ပေါ်ထွန်းလာစေနိုင်ခြင်း၊
          ဘာသာသာသနာထွန်းကားပြန့်ပွားလာစေခြင်း၊ နိုင်ငံတော် တိုးတက်သာယာစေခြင်း
          စသည့်အကျိုးကျေးဇူးများကိုရရှိစေနိုင်ပါသည်။
        </p>
      </div>
      <div className="col-12">
        <div className="row">
          {visibleMonths.map((month) => (
            <Link
              to={`/months/${month.id}`}
              className="col-lg-3 col-md-4 col-sm-6 align-center"
              key={month.id}
            >
              <div
                className="card bg-warning"
                style={{ height: "100%", overflow: "hidden" }}
              >
                <div
                  className="ratio"
                  style={{ paddingTop: "100%", position: "relative" }}
                >
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-cover"
                    src={`${process.env.PUBLIC_URL}/${month.ImagePath}`}
                    alt="month"
                  />
                </div>
                {/* month name on image */}
                <div className="position-absolute bottom-50 start-50 translate-middle-x text-center text-white">
                  <h4>{month.MonthMm}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* carousel control */}
        <div className="pagination d-flex justify-content-center m-4">
          {/* Left arrow */}
          <div onClick={handlePrevClick} style={{ cursor: "pointer" }}className="mx-1" >
            <FaChevronLeft size={30}/>
            
            {/* <FaRegCircle
                 style={{ color: activePage === number + 1 ? "orange" : "orange" }} /> */}
          </div>
          {/* Right arrow */}
          <div className="mx-1" onClick={handleNextClick} style={{ cursor: "pointer" }}>
            <FaChevronRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

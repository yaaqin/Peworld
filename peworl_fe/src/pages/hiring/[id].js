import React from "react";
import Navbar from "../Component/navbar";
import Footer from "../Component/footer";
import axios from "axios";
import Link from "next/link";
import { getCookie } from "cookies-next";

function Hiring(props) {
  const { Data } = props;

  const token = getCookie("token")

  const [subject, setSubject] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [desk, setDesk] = React.useState("");
  const [successMsg, setSuccessMsg] = React.useState("");
  const [isoading, setisoading] = React.useState(false);

  const handleSend = () => {
    setisoading(true)

    axios.post("https://hire-job.onrender.com/v1/contact", {
      subject: subject,
      description: desk,
      sender: fullname,
      toName: Data?.fullname,
      to: Data?.socmed?.email,
    }, {headers: {Authorization: `Bearer ${token}`}}).then((resullt) => {
      setSuccessMsg("Email success sended to user")
    } ).catch((err)=> {
      console.log(err)
    }).finally(() => {
      setisoading(false)
    });
  };
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5">
        <div className="col-span-2 py-[50px] px-[50px] bg-[#EEF5FF] ">
          <div className="h-[750px] w-[497px] bg-[#fff] rounded-xl py-[30px] shadow-qin px-[50px]">
            <div className="flex justify-center">
              <img
                alt="profile"
                src={Data.photo}
                width="150px"
                height="150px"
                className="bg-[cyan] rounded-full"
              ></img>
            </div>
            <h3 className="text-[35px] mt-[15px] mb-[10px]">{Data.fullname}</h3>
            <p>{Data.job}</p>
            <div className="flex gap-[5px] my-[15px] h-[20px]">
              <img
                width="35px"
                alt="icon location"
                src="/images/map-pin.png"
              ></img>
              <p>{Data.location}</p>
            </div>
            <h6 className="capitalize">{Data.desk}</h6>
            <h5 className="mt-[20px] text-[25px]">Skill</h5>
            <div className="flex gap-[15px] mt-[15px] flex-wrap">
              {Data?.skills.map((item, key) => (
                <div key={key}>
                  <button className="hover:scale-[1.03] bg-[#FBB01799] border-2 border-[#FBB017] py-[5px] rounded-md px-[15px]">
                    {item}
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-[140px] ml-[300px]">
              {/* <Link href={"/talent-list"}>
                <button className="hover:scale-[1.03] bg-[#5E50A1] text-[#fff] px-[10px] mt-[-20px] rounded-md">
                  Talent-list
                </button>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="bg-[#EEF5FF] py-[50px] col-span-3">
          <div className="bg-[#EEF5FF]">
            <h2 className="text-[35px]">Hubungi {Data.fullname}</h2>
            <p className="capitalize">
              Pilih dan hubungi talenta dengan skill terbaik yang anda butuhkan di Peworld
            </p>
            {successMsg ? (
            <div className="alert alert-success w-[95%]" role="alert">
              <p>{successMsg}</p>
            </div>
          ) : null}
            <label className="text-[#9EA0A5] text-muted mt-[20px] block">
              Subject
            </label>
            <input
              onChange={(e) => setSubject(e.target.value)}
              id="Subject"
              placeholder="Subject"
              className=" w-[95%] px-[20px] py-[10px] mt-[5px] rounded-md shadow-qin"
            ></input>
            <label className="text-[#9EA0A5] text-muted mt-[20px] block">
              Fullname
            </label>
            <input
              onChange={(e) => setFullname(e.target.value)}
              id="Fullname"
              placeholder="Fullname"
              className=" w-[95%] px-[20px] py-[10px] mt-[5px] rounded-md shadow-qin"
            ></input>
            <label className="text-[#9EA0A5] text-muted mt-[20px] block">
              Description
            </label>
            <input
              onChange={(e) => setDesk(e.target.value)}
              id="Description"
              placeholder="Description"
              className=" w-[95%] h-[250px] px-[20px] py-[10px] pb-[200px] mt-[5px] rounded-md shadow-qin"
            ></input>
            <button className="bg-[#FBB017] text-[white] w-[95%] mt-[15px] rounded-md hover:scale-[1.01] mt-[30px] py-[10px]" onClick={handleSend}>
              {isoading ? "Loading..." : "Kirim"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ request, res, params }) {
  const { id } = params;

  const user = getCookie("user", { request, res });
  const token = getCookie("token", { request, res });

  // if (user && token) {
  //     return {
  //       redirect: {
  //         permanent: false,
  //         destination: `/talent-list`,
  //       },
  //     };
  // }
    
  
  const req = await axios.get(`http://localhost:3000/api/list-talent?id=${id}`);
  return {
    props: req.data,
  };
}

export default Hiring;

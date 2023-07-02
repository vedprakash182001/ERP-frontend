import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BasDetails from "../components/BasDetails";
import Header from "../components/header";
import AddNew from "./AddNew";

export default function UserProfile() {
  const [editAccess, setedit] = useState(true);
  const [msg, setmsg] = useState("");
  const { roll } = useParams();

  const [loginroll, setloginroll] = useState("$");
  const navigate = useNavigate();
  const [userfname, setfn] = useState("");
  const [userlname, setln] = useState("");
  const [userroll, setroll] = useState("");
  const [userdob, setdob] = useState("");
  const [usergen, setgen] = useState("");
  const [usercat, setcat] = useState("");
  const [userdept, setdept] = useState("");
  const [useremail, setemail] = useState(null);
  const [stake, setstake] = useState("S");

  const [phone, setphone] = useState(null);
  const [inst_mail, setImail] = useState(null);
  const [Guardmail, setGuardmail] = useState(null);
  const [Guardphone, setGuardphone] = useState(null);

  const [address, setaddress] = useState(null);
  const [city, setcity] = useState(null);
  const [policeSt, setpoliceSt] = useState(null);
  const [pincode, setpincode] = useState(null);
  const [district, setdistrict] = useState(null);
  const [state, setstate] = useState(null);
  const [country, setcountry] = useState(null);

  const [emgphone, setemgphone] = useState(null);
  const [emgperson, setemgperson] = useState(null);
  const [emgrelation, setemgrelation] = useState(null);
  const [emgaddress, setemgaddress] = useState(null);

  const [father, setfather] = useState(null);
  const [income, setincome] = useState(null);
  const [guardname, setguardname] = useState(null);
  const [profession, setprofession] = useState(null);

  let credential = null;
  const fetchUser = () => {
    credential = JSON.parse(localStorage.getItem("userKey"));
    console.log(credential);
    if (credential == null) {
      navigate("/");
    } else {
      setloginroll(credential.roll);
      axios
        .get(`http://localhost:7001/api/user/get/${roll}`)
        .then((response) => {
          console.log(response.data);
          const userRes = response.data.result;
          //   console.log("->>>", userRes[0],userRes[0].DOB);
          if (userRes.length != 0) {
            setfn(userRes[0].fname.toUpperCase());
            setln(userRes[0].lname.toUpperCase());
            setroll(userRes[0].roll);
            const dte = new Date(userRes[0].DOB);
            let dteString =
              dte.getDate() + "-" + dte.getMonth() + "-" + dte.getFullYear();
            setdob(dteString);
            setgen(userRes[0].gender);
            setcat(userRes[0].cat);
            setstake(userRes[0].stakeholdertype);
            if (useremail == null) setemail(userRes[0].email);
          }
          return;
        })
        .catch((err) => {
          console.log("err1- ", err);
        });
    }
  };

  const fetchUserDetails = () => {
    axios
      .get(`http://localhost:7001/api/user/biodata/${roll}`)
      .then((response) => {
        console.log("res2 ", response.data);
        const userRes = response.data.result;
        if (userRes.length != 0) {
          console.log("res len!=0 ");
          ///////////////////////////////
          if (phone == null) setphone(userRes[0].phone);
          if (inst_mail == null) setImail(userRes[0].inst_mail);
          if (Guardmail == null) setGuardmail(userRes[0].Guardmail);
          if (Guardphone == null) setGuardphone(userRes[0].Guardphone);
          if (address == null) setaddress(userRes[0].address);
          if (city == null) setcity(userRes[0].city);
          if (policeSt == null) setpoliceSt(userRes[0].policeSt);
          if (pincode == null) setpincode(userRes[0].pincode);
          if (district == null) setdistrict(userRes[0].district);
          if (state == null) setstate(userRes[0].state);
          if (country == null) setcountry(userRes[0].country);
          if (emgphone == null) setemgphone(userRes[0].emgphone);
          if (emgperson == null) setemgperson(userRes[0].emgperson);
          if (emgrelation == null) setemgrelation(userRes[0].emgrelation);
          if (emgaddress == null) setemgaddress(userRes[0].emgaddress);
          if (father == null) setfather(userRes[0].father);
          if (income == null) setincome(userRes[0].income);
          if (guardname == null) setguardname(userRes[0].guardname);
          if (profession == null) setprofession(userRes[0].profession);
          //////////////////////////////////
        } else {
          console.log("res len==0 ");
        }
      })
      .catch((err) => {
        console.log("err2 ", err);
      });
  };

  const saveData = () => {
    setedit(!editAccess);

    axios
      .post("http://localhost:7001/api/user/update", {
        roll: userroll,
        dept: userdept,
        email: useremail,
      })
      .then((response) => {
        console.log(response);
        // setmsg
      })
      .catch((err) => {
        setmsg(err.response.data.msg);
        console.log(err);
      });

    axios
      .post("http://localhost:7001/api/user/biodata", {
        roll: userroll,
        phone: phone,
        inst_mail: inst_mail,
        Guardmail: Guardmail,
        Guardphone: Guardphone,
        address: address,
        city: city,
        policeSt: policeSt,
        pincode: pincode,
        district: district,
        state: state,
        country: country,
        emgphone: emgphone,
        emgperson: emgperson,
        emgrelation: emgrelation,
        emgaddress: emgaddress,
        father: father,
        income: income,
        guardname: guardname,
        profession: profession,
      })
      .then((response) => {
        console.log(response);
        // setmsg
      })
      .catch((err) => {
        // setmsg(err.response.data.msg);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser();
    fetchUserDetails();
  }, [roll]);

  return (
    <Container>
      <Header
        heading={ roll.toUpperCase()+"'s Profile"}
        msg=""
      />
      <div className="biodata">
          

          <div className="edit tit print">
        {loginroll == userroll && <>
            {editAccess !== false && (
              <button onClick={() => setedit(!editAccess)}>Edit</button>
            )}
            {editAccess !== true && (
              <button onClick={() => saveData()}>save</button>
            )}
        </>
        }
            <h5> Biodata/Profile</h5>
            <button onClick={()=>window.print()}>Print</button>
          </div>
          
        <div className="data">
          <div className="basic-info">
            <h3>Basic information</h3>
            <div className="box">
              <BasDetails label="ID/Roll No" value={userroll} i={2} />
              <BasDetails label="DOB" value={userdob} i={2} />
              <BasDetails label="First Name" value={userfname} i={2} />
              <BasDetails label="Last Name" value={userlname} i={2} />
              <BasDetails label="Gender" value={usergen} i={2} />
              <BasDetails label="Category" value={usercat} i={2} />
              <BasDetails
                label="Department"
                type="text"
                onchange={(e) => setdept(e.target.value)}
                value={userdept}
                i={0}
                disabled={editAccess}
              />
              <BasDetails
                label="Email-Id"
                type="email"
                onchange={(e) => setemail(e.target.value)}
                value={useremail}
                i={0}
                disabled={editAccess}
              />
            </div>
          </div>
          <div className="parental">
            {/* <h3>Parental Information</h3> */}
            <AddNew
              roll={userroll}
              disabled={editAccess}
              phone={phone}
              setphone={setphone}
              inst_mail={inst_mail}
              setImail={setImail}
              Guardmail={Guardmail}
              setGuardmail={setGuardmail}
              Guardphone={Guardphone}
              setGuardphone={setGuardphone}
              address={address}
              setaddress={setaddress}
              city={city}
              setcity={setcity}
              policeSt={policeSt}
              setpoliceSt={setpoliceSt}
              pincode={pincode}
              setpincode={setpincode}
              district={district}
              setdistrict={setdistrict}
              state={state}
              setstate={setstate}
              country={country}
              setcountry={setcountry}
              emgphone={emgphone}
              setemgphone={setemgphone}
              emgperson={emgperson}
              setemgperson={setemgperson}
              emgrelation={emgrelation}
              setemgrelation={setemgrelation}
              emgaddress={emgaddress}
              setemgaddress={setemgaddress}
              father={father}
              setfather={setfather}
              income={income}
              setincome={setincome}
              guardname={guardname}
              setguardname={setguardname}
              profession={profession}
              setprofession={setprofession}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .biodata {
    .box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: auto auto;
    }
    .tit {
      display: flex;
      justify-content: center;
      align-item: center;
      button {
        margin: 20px 0.3rem;
        padding: 0;
        background-color: blue;
        color: white;
      }
    }
  }
`;

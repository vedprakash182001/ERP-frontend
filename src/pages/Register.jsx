import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import { useNavigate } from 'react-router-dom';
import BasDetails from '../components/BasDetails';
import axiosIntance from "../utils/axios"
import axios from 'axios';
import styled from 'styled-components';

export default function Register() {
   const stakeholders=[
    ["E","Institute Employee"],
    ["S","Student"]
   ];
   
     const months = [
       "Jan",
       "Feb",
       "Mar",
       "Apr",
       "May",
       "Jun",
       "Jul",
       "Aug",
       "Sep",
       "Oct",
       "Nov",
       "Dec",
     ];
      const gen = [
        ["M", "Male"],
        ["F", "Famale"],
        ["O", "Other"],
      ];
      const category = [
        ["GEN", "General(GEN)"],
        ["OBC", "Other Backward Category(OBC)"],
        ["SC", "Scheduled Caste(SC)"],
        ["ST", "Scheduled Tribes(ST)"],
      ];
     
     const [DOB, setDOB] = useState(" ");
     const [date, setdate] = useState(new Date());

    const navigate=useNavigate("");
    const [roll,setroll]=useState("");
    const [passwrd,setpasswrd]=useState("");
    const [fname,setfname]=useState("");
    const [lname,setlname]=useState("");
    const [email,setemail]=useState("");
    const [gender, setgender] = useState("M");
    const [cat, setcat] = useState("GEN");     
    const [stakeholdertype,setstakeholdertype]=useState("E");
  

    const [msg,setmsg]=useState("");


const setupActualDate = () => {
  const datepart = date.toString().split(" ").slice(1, 4);
  var tempdob = "";
  tempdob += datepart[2] + "-";
  let id = 0;
  months.map((val) => {
    if (val == datepart[0]) {
      if (id < 9) {
        tempdob += "0" + (id + 1);
      } else tempdob += 1 + id;
    }
    id += 1;
  });
  tempdob += "-" + datepart[1];
  setDOB(tempdob);
};
useEffect(() => setupActualDate(), [date]);



    const SignUp=()=>{
        setmsg("");
        if(roll.length<5){
            setmsg("incorrect login-id or (length<5)");
            return;
        }
        if(passwrd.length<6){
            setmsg("password should have atleast 6 letter");
            return;
        }
        if(fname.length<2){
            setmsg("fill correst first name");
            return;
        }
        if(lname.length<2){
            setmsg("fill correst last name");
            return;            
        }
        if(email.length<5){
            setmsg("enter correct mail address");
            return;
        }        
           axios.post("http://localhost:7001/api/user/create", {
                roll: roll,
                stakeholdertype: stakeholdertype,
                passwrd: passwrd,
                fname: fname,
                lname: lname,
                gender: gender,
                cat: cat,
                DOB: DOB,
                email: email,
              }).then((response) => {
                
                // console.log(response.json());
                console.log(response);
                window.alert(response.data.msg);
                navigate("/");
              }).catch((err)=>{
                
                // console.log("11");
                
                setmsg(err.response.data.msg);
                console.log(err);
                });
                
         

    }
  return (
    <>
      <Header heading="Register" msg={msg} />
      <form>
        <BasDetails
          label="Stakeholder type"
          fun={(data) => setstakeholdertype(data)}
          value={stakeholders}
          name="stakeholder"
          i={1}
        />

        <BasDetails
          label="Roll number/login-id"
          type="text"
          onchange={(e) => {
            setroll((e.target.value).toUpperCase());
          }}
          placeholder="Roll no/Employee number"
          value={roll}
          i={0}
        />
        <BasDetails
          label="Password"
          type="password"
          onchange={(e) => {
            setpasswrd(e.target.value);
          }}
          placeholder="set-password"
          value={passwrd}
          i={0}
        />
        <BasDetails
          label="First Name"
          type="text"
          onchange={(e) => {
            setfname(e.target.value);
          }}
          placeholder="Enter first-name"
          value={fname}
          i={0}
        />
        <BasDetails
          label="Last Name"
          type="text"
          onchange={(e) => {
            setlname(e.target.value);
          }}
          placeholder="Last Name"
          value={lname}
          i={0}
        />

        <BasDetails
          label="Gender"
          fun={(data) => setgender(data)}
          value={gen}
          name="gender"
          i={1}
        />
        <BasDetails
          label="Category"
          fun={(data) => setcat(data)}
          value={category}
          name="category"
          i={1}
        />
        <BasDetails
          label="Personal Email"
          type="email"
          onchange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="ex: abc@email.com"
          value={email}
          i={0}
        />
        <BasDetails
          label="DOB"
          msg="(yyyy-mm-dd)"
          id="dob"
          name="dateOfBirth"
          fun={setdate}
          value={DOB}
          date={date}
          i={3}
        />
      </form>
       <Container>
       <div className="box">
       <div></div>
      <button onClick={() => navigate("/login")}>Login</button>
      <div></div>
      <button onClick={SignUp}>Register</button>
      <div></div>
       </div>
       </Container>
    </>
  );
}

const Container = styled.div`
  .box {
    padding:2rem;
    display: grid;
    grid-template-columns: 4fr 2fr 1fr 2fr 10fr;
    gap: auto auto auto auto auto;
    button{
      width:4rem;
      height:2rem;
      border:none;
      border-radius:0.2rem;
      background-color:blue;
      color:white;
      &:hover{
      background-color:grey;
      color:black;
      }
    }
  }
`;
import React, { useEffect, useState } from 'react'
import BasDetails from '../components/BasDetails';
import Header from '../components/header';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function SearchStudent(props) {

   const [msg,setmsg]=useState("");
    const [roll,setroll]=useState("");
    const [detailVis,setdetailsVis]=useState(false);
    const navigate=useNavigate();

    
  const [userfname, setfn] = useState("");
  const [userlname, setln] = useState("");
//   const [userroll, setroll] = useState("");
  const [userdob, setdob] = useState("");
  const [usergen, setgen] = useState("");
  const [usercat, setcat] = useState("");
  const [userdept, setdept] = useState("");
  const [useremail, setemail] = useState(null);
  const [stake, setstake] = useState("S");
    
     const credential = JSON.parse(localStorage.getItem("userKey"));
     console.log(credential);
     useEffect(() => {
       if (credential != null && credential.stakeholdertype=="S") {
         navigate("/");
       }
     }, [credential]);

     const Action=()=>{
       setmsg("");
         if(roll.length==0){
          setmsg("Enter Roll No.");
          return;
         }
         setmsg("");
         axios
         .get(`http://localhost:7001/api/user/get/${roll}`)
        .then((response) => {
          console.log(response.data);
          const userRes = response.data.result;
          //   console.log("->>>", userRes[0],userRes[0].DOB);
          if (userRes.length != 0) {
              if(userRes[0].stakeholdertype!="S"){
                  setdetailsVis(false);
                  window.alert("Student does not exit with this ID");
                  return;
                }
                setdetailsVis(true);
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
            setdept(userRes[0].dept);
            if (useremail == null) setemail(userRes[0].email);
        }
        else{
            setdetailsVis(false);
            window.alert("Student does not exit with this ID");
            return;
        }
    }).catch((err)=>{
        
    })
    
}

     const CnD=()=>{
        axios.post("http://localhost:7001/api/user/remove/student",{roll}).then((response)=>{
            console.log("yessss",response);
            window.alert(response.data.msg);
            setdetailsVis(false);
        }).catch((err)=>{
            console.log(err);
            window.alert(err.response.data.msg);
            setdetailsVis(false);

        });
     }
  return (
    <>
    <Header
     heading={props.A==0?"Search student info":"Remove Student from Data"} 
      msg={msg}
     />
      <Container>
      <div className="box3"></div>
      <div className="box3 search-box">

        <BasDetails
          label="Enter roll number"
          type="text"
          onchange={(e) => {
            setroll(e.target.value);
          }}
          value={roll}
          disabled={false}
          i={0}
        />
        {
            props.A==0 &&
        <button onClick={()=>{
          if(roll.length==0){setmsg("enter roll no");return;}
          navigate(`/search/user/${roll}`)}}>Search</button>}
        {
            props.A==1 && <>
            <div className="btn">
            <div></div>
             <button onClick={()=>Action()}>Remove</button>
            <div></div>
            </div>
            </>
             }
      </div>
      {
        detailVis==true && <div className="basic-details">
         <h4>Confirm details</h4>
         <div className="box">

          <BasDetails
           label="DOB"
           value={userdob}
           i={0}
           />
          <BasDetails
           label="Roll no"
           value={roll}
           i={0}
           />
          <BasDetails
           label="first name"
           value={userfname}
           i={0}
           />
          <BasDetails
           label="Last name"
           value={userlname}
           i={0}
           />
          <BasDetails
           label="Department"
           value={userdept}
           i={0}
           />
          <BasDetails
           label="Category"
           value={usercat}
           i={0}
           />
          <BasDetails
           label="Gender"
           value={usergen}
           i={0}
           />
          <BasDetails
           label="Email"
           value={useremail}
           i={0}
           />
         </div>
         <div className="btn">
           <div></div>
           <div>
         <button onClick={()=>CnD()}>Confirm and Delete</button>
           </div>
           <div></div>
         </div>
        </div>
      }
<div className="box3"></div>
      </Container>
    </>
  );
}



const Container = styled.div`
  .box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: auto auto;
  }

  .search-box {
    margin: 2rem;
    width: 75%;
    height: 80px;
    border: 1px solid black;
    align-item: center;
  }
  .btn {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: auto auto auto;
  }
  button {
    width: auto;
    height: 2rem;
    ${'' /* height: 2rem; */}
    border: none;
    border-radius: 0.2rem;
    background-color: blue;
    color: white;
    &:hover {
      background-color: grey;
      color: black;
      cursor: pointer;
    }
  }

  ${
    "" /* .btn{
    float:right;
  } */
  }
`;
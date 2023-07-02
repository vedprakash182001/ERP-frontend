import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header';

export default function UserAcadsInfo() {
  const navigate = useNavigate();
  const { roll }=useParams();
  const credential = JSON.parse(localStorage.getItem("userKey"));
  const [searchedroll,setsearchedroll]=useState("");
  const [name,setname]=useState("");
  console.log(credential);
const searchUser=()=>{

     axios
       .get(`http://localhost:7001/api/user/get/${roll}`)
       .then((response) => {
         console.log(response.data);
         const userRes = response.data.result;
         //   console.log("->>>", userRes[0],userRes[0].DOB);
         if (userRes.length != 0) {
             if(userRes[0].stakeholdertype!="S"){
              window.alert("You only can search for student");
              navigate("/get-student-info");
          }
          setsearchedroll(roll);
            setname(
              userRes[0].fname.toUpperCase() +
                " " +
                userRes[0].lname.toUpperCase()
            );
    }
       else{
             window.alert("Not registered student");
             navigate("/get-student-info");
         }
         return;
       })
       .catch((err) => {
         console.log("err1- ", err);
       });
}

  useEffect(() => {
    searchUser();
    
  }, [credential]);


  return (
    <Container>
      <Header
        heading="Student Data"
      />
      <div className="student info">
        <h4>Your Academic Information</h4>
        <h6 style={{ color: "red" }}>*please click on link to get details</h6>
        <div className="section">
          <div className="sec sec1">
              <label>Roll no</label>
               <p>{searchedroll}</p>
          </div>
          <div className="sec sec2">
            <label>Name</label>
            <p>{name.toUpperCase()}</p>
          </div>
          <div className="sec sec3 link">
            <label>Biodata</label>
            <p
              onClick={() => {
                navigate(`/user-profile/${searchedroll}`);
              }}
            >
              Profile
            </p>
          </div>
          
            <div className="sec sec4 pnf">
              <label>Performance</label>
              <p>Performance New</p>
            </div>
          
          
            <div className="sec sec5 pnf">
              <label>Reg. card</label>
              <p>Reg. Card</p>
            </div>          
            <div className="sec sec6 pnf">
              <label>Faculty advisor</label>
              <p>Loading...</p>
            </div>
          
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .student {
    width: 98vw;
    border: 1px solid blue;
    margin: 2rem 1vw;
    .section {
      display: flex;
      .sec {
        flex-direction: row;
        flex-gap: 1rem;
        margin: 0.1rem;
        color: #000066;
        background-color: #efeefe;
        label {
          padding: 0 0.2rem;
          display: block;
          background-color: rgb(135, 206, 235);
        }
        p {
          ${"" /* display:block; */}
          padding: 0 0.2rem;
          background-color: rgb(229, 229, 233);
        }
      }
      .pnf {
        p {
          color: rgb(244, 96, 66);
          cursor: not-allowed;
        }
      }
      .link {
        cursor: pointer;
      }
    }
  }
`;
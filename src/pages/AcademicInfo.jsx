import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/header';
import { useNavigate } from 'react-router-dom';

export default function AcademicInfo() {
   const navigate=useNavigate();
     const credential = JSON.parse(localStorage.getItem("userKey"));
     console.log(credential);
     useEffect(() => {
       if (credential == null) {
         navigate("/login");
       }
     }, [credential]);

     const name=credential.fname+" "+credential.lname;
     const roll=credential.roll;

  return (
    <Container>
      <Header
        heading={
          (credential !== null && credential.stakeholdertype == "S")
            ? "For Students"
            : "For Institute Employee"
        }
        msg={
          ( credential.dept == null)
            ? "Please complete your profile"
            : ""
        }
      />
      <div className="student info">
        <h4>Your Academic Information</h4>
        <h6 style={{ color: "red" }}>*please click on link to get details</h6>
        <div className="section">
          <div className="sec sec1">
            {credential !== null && credential.stakeholdertype === "S" && (
              <label>Roll no</label>
            )}
            {credential !== null && credential.stakeholdertype !== "S" && (
              <label>Emp no</label>
            )}
            <p>{roll}</p>
          </div>
          <div className="sec sec2">
            <label>Name</label>
            <p>{name.toUpperCase()}</p>
          </div>
          <div className="sec sec3 link">
            <label>Biodata</label>
            <p
              onClick={() => {
                navigate(`/user-profile/${credential.roll}`);
              }}
            >
              Profile
            </p>
          </div>
          {credential !== null && credential.stakeholdertype === "S" && (
            <div className="sec sec4 pnf">
              <label>Performance</label>
              <p>Performance New</p>
            </div>
          )}
          {credential !== null && credential.stakeholdertype === "S" && (
            <div className="sec sec5 pnf">
              <label>Reg. card</label>
              <p>Reg. Card</p>
            </div>
          )}
          {credential !== null && credential.stakeholdertype === "S" && (
            <div className="sec sec6 pnf">
              <label>Faculty advisor</label>
              <p>unknown.</p>
            </div>
          )}
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
          cursor:not-allowed;
          
        }
      }
      .link{
        cursor:pointer;
      }
    }
  }
`;
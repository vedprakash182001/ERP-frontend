import React, { useEffect, useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  const opt=["Scholarship","Fees"];

  const [studentsVis, setstudentsVis] = useState(0);
  const [adminVis1, setadminVis1] = useState(0);
  const [adminVis2, setadminVis2] = useState(0);
  const [stake, setstake] = useState("$");

  const credential = JSON.parse(localStorage.getItem("userKey"));
  console.log(credential);
  useEffect(() => {
    if (credential == null) {
      navigate("/login");
    } else {
      setstake(credential.stakeholdertype);
    }
  }, [credential]);

  return (
    <>
      <Header heading={stake == "S" ? "For Students" : "For Faculty/Admin"} />
      <Container>
        <div className="options">
          <h6>**Red-colored are only accessible to authorized person</h6>
          <h6 style={{ color: "yellow" }}>
            **Yellow-colored are under-process
          </h6>
          <div className={"opt add" + (stake != "S" ? " NA" : " A")}>
            <div
              onClick={() => {
                setstudentsVis(1 - studentsVis);
                setadminVis1(0);
                setadminVis2(0);
              }}
            >
              <span className="sec1">
                <span className="plus">
                  {studentsVis === 0 && <FaPlusSquare />}
                  {studentsVis !== 0 && <FaMinusSquare />}
                </span>
                Student
              </span>
            </div>
            {stake == "S" && (
              <>
                {studentsVis !== 0 && (
                  <div>
                    <ul>
                      <li onClick={() => navigate("/your-academic-info")}>
                        Your Academic information
                      </li>  
                      <li onClick={() => navigate("/time-table")}>Time table</li>
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
          <>
            <div className={"opt getinfo" + (stake == "S" ? " NA" : " A")}>
              <div
                onClick={() => {
                  setadminVis1(1 - adminVis1);
                  setadminVis2(0);
                }}
              >
                <span className="sec1">
                  <span className="plus">
                    {adminVis1 === 0 && <FaPlusSquare />}
                    {adminVis1 !== 0 && <FaMinusSquare />}
                  </span>
                  Employee
                </span>
              </div>
              {stake !== "S" && (
                <>
                  {adminVis1 !== 0 && (
                    <div>
                      <ul>
                        <li onClick={() => navigate("/your-academic-info")}>
                          Personal Information
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
            {/*  */}
            <div className={"opt getinfo" + (stake == "S" ? " NA" : " A")}>
              <div
                onClick={() => {
                  setadminVis2(1 - adminVis2);
                  setadminVis1(0);
                }}
              >
                <span className="sec1">
                  <span className="plus">
                    {adminVis2 === 0 && <FaPlusSquare />}
                    {adminVis2 !== 0 && <FaMinusSquare />}
                  </span>
                  Administrative section
                </span>
              </div>
              {stake !== "S" && (
                <>
                  {adminVis2 !== 0 && (
                    <div>
                      <ul>
                        <li onClick={() => navigate("/get-student-info")}>
                          Search for a Student
                        </li>
                        <li onClick={() => navigate("/delete-student-info")}>
                          Delete Student data
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
          {opt.map((data) => {
            return (
              <div className={"opt add UW"}>
                <div onClick={() => {}}>
                  <span className="sec1">
                    <span className="plus">
                      <FaPlusSquare />
                      {/* {studentsVis === 0 && <FaPlusSquare />}
                  {studentsVis !== 0 && <FaMinusSquare />} */}
                    </span>
                    {data}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  text-align: left;
  margin-top: 50px;
  .options {
    display: block;
    width: 98%;
    height: 70vh;
    border: 1px solid transparent;
    h6 {
      color: red;
      font-size: 0.8rem;
      text-align: center;
    }
    .NA {
      color: rgb(244, 96, 66);
      cursor: not-allowed;
    }
    .A{
      cursor:pointer;
    }
    .UW{
      color:Yellow;
    }
    .opt {
      background-color: rgb(138, 198, 250);
      margin-right: auto;
      margin-left: auto;
      margin-top: 1.2rem;
      margin-bottom: 1.2rem;
      position: relative;
      border: 1px solid black;
      height: auto;
      width: 90%;
      padding: 0.6rem;
      .sec1 {
        height: 10px;
      }
      li {
        width: 100%;
        height: 20px;
        background-color: white;
        margin: 0.3rem;
        list-style-type: none;
        cursor: pointer;
        &:hover {
          color: rgb(104, 164, 217);
        }
      }
      .plus {
        color: white;
        font-size: 1.2rem;
        margin: 0 2rem 0 0;
      }
    }
  }
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPowerOff, FaArrowLeft, FaHome, FaStamp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  const credential = JSON.parse(localStorage.getItem("userKey"));
  const [idindex, setidindex] = useState(0);
  let id;
  if (credential != null) {
    id = [
      credential.fname.toUpperCase() + " " + credential.lname.toUpperCase(),
      credential.roll,
    ];
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setidindex(1 - idindex);
    }, 5000);
  }, []);

  return (
    <Container>
      {credential != null && (
        <div
          className="back-btn"
          title="to main-page"
          onClick={() => navigate("/")}
        >
          <FaHome />
        </div>
      )}
      <div className="title">
        <h1>
          <span className="head_title">{props.heading}</span>
        </h1>
        <h3>{props.msg}</h3>
      </div>
      {credential != null && (
        <div className="power off1">
          <div>
            <p>{id[0]}</p>
            <p>{id[1]}</p>
          </div>

          <div
            className=" off2"
            title="logout"
            onClick={() => {
              localStorage.removeItem("userKey");
              navigate("/");
            }}
          >
            {" "}
            <FaPowerOff />
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  .back-btn {
    width: 2rem;
    padding-left: 0.5rem;
    padding-top: 2rem;
    &:hover {
    color: blue;
      font-size: 1.8rem;
    }
  }
  .title {
    margin-left: auto;
    margin-right: auto;
    width: 98vw;
    height: auto;
    min-height: 50px;
    background-color: rgb(179, 193, 240);
    text-align: center;
    .head_title {
    }
    h1 {
    }
    h3 {
      background-color: rgb(246, 156, 138);
      color: white;
    }
  }
  .power {
    background-color: grey;
    color: white;
    position: fixed;
    right:0;
    width: auto;
    font-size: medium;
    float: right;
    padding:0 0.2rem 0 0.2rem;
    text-align:center;
    border-radius:1rem 0;
  }
  .off2 {
    padding:0;
    margin: 0.3rem 1rem
    ;
    color: blue;
    margin:2rem 0 0 1rem;
    &:hover {
      font-size: large;
      color: white;
      font-weight:bolder;
      cursor: pointer;
    }
  }
`;

import React, { useState } from 'react'
import Header from '../components/header'
import BasDetails from '../components/BasDetails';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { FaEye } from 'react-icons/fa';


export default function Login() {
  
  const navigate=useNavigate();
  const [idV,setidV]=useState(false);
  const [passV,setpassV]=useState(false);
  
  const [roll,setroll]=useState("");
  const [passwrd,setpasswrd]=useState("");
  const [errid,seterrid]=useState("");
  const [errpass,seterrpass]=useState("");
  const [msg,setmsg]=useState("");
  console.log((new Date).getTime);
    const SignIn=async()=>{

        seterrid("");  
        setmsg("");
        seterrpass("");
        if(roll.length>=5 && passwrd.length>=6){
            axios.get(`http://localhost:7001/api/user/get/${roll}/${passwrd}`).then((response)=>{
              console.log(response.data);
              setmsg(response.data.msg);
              const userRes = response.data.result;
              // console.log("->>>",userRes[0].fname);
              if(userRes.length!=0){
              localStorage.setItem(
                "userKey",
                JSON.stringify({roll:userRes[0].roll,stakeholdertype:userRes[0].stakeholdertype,fname:userRes[0].fname,lname:userRes[0].lname,dept:userRes[0].dept})
              );
              navigate("/");
             }
             setroll("");
             setpasswrd("");
              return;
            }).catch((err)=>{
              console.log("here",err);
            });
        }

        if(roll.length<5){
            seterrid("Invalid login-id");
            setmsg("Check Again");
            return;
        }        
        if(passwrd.length<6){
            seterrpass("Invalid password");
            setmsg("Check Again");
            return;
        }        
        
    }

   

  return (
    <>
      <Header heading="Login" msg={msg} />

      <BasDetails
        label="Id : "
        type={idV==true?"test":"password"}
        onchange={(e) => {
          setroll(e.target.value.toUpperCase());
        }}
        placeholder="Stakeholder code/login id"
        value={roll}
        errmsg={errid}
        i={0}
        eye={1}
        oneye={(e)=>{setpassV(false);setidV(!idV)}}
      />
      {/* <FaEye /> */}
      <BasDetails
        label="Password : "
        type={passV==true?"text":"password"}
        onchange={(e) => {
          setpasswrd(e.target.value);
        }}
        placeholder="password"
        value={passwrd}
        errmsg={errpass}
        i={0}
        eye={1}
        oneye={(e)=>{setpassV(!passV);setidV(false)}}
      />
      {/* <FaEye /> */}

      <Container>
        <div className="box">
          <div></div>
          <button onClick={() => navigate("/register")}>Register</button>
          <div></div>
          <button onClick={SignIn}>Login</button>
          <div></div>
        </div>
      </Container>

    </>
  );
}



const Container = styled.div`
  .box {
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 2fr 0fr 2fr 10fr;
    gap: auto auto auto auto auto;
    button {
      width: 4rem;
      height: 2rem;
      border: none;
      border-radius: 0.2rem;
      background-color: blue;
      color: white;
      &:hover {
        background-color: grey;
        color: black;
        cursor:pointer;
      }
    }
  }
`;
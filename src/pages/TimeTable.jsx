import React from 'react'
import time_table from "../resources/time_table.png"
import styled from 'styled-components'
import Header from '../components/header';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function TimeTable() {
    const navigate=useNavigate();
  return (
    <Container>
    <Header 
        heading="Time Table"
    />
     <div className="back" onClick={()=>navigate(-1)}>
        <FaArrowLeft />
         Back
     </div>
        <div className="time_">
            <img src={time_table} alt="time table Loading..." />
        </div>
    </Container>
  )
}


const Container=styled.div`
.back{
    width:60px;
    margin:0.8rem 0 0 3rem;
        color:white;
    &:hover{
        background-color:grey;
        cursor:pointer;
    }
}
 .time_{
    text-align:center;
    margin: 2rem 0 0 0;
    width:90%;
    height:65%;    
    padding:auto;
 }
`;
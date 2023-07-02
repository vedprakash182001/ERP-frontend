import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import { FaEye } from 'react-icons/fa';
import styled from 'styled-components';


export default  function BasDetails(props) {

    //  const [date, setDate] = useState(new Date());
     const [calVis,setVis]=useState(0);
    //  const [DOB,setDOB]=useState(" ");
     
 
    return (
      <Container>
        <div className="basic-details">
          <div className="errMsg">{props.errmsg}</div>
          <form>
          <div className="row">

           <div className="box">
                
               <div>
            <label>
              {props.label}
              {props.msg}
            </label>
            
               </div>
               <div>

            {props.i == 0 && (
              <>
              <div className="inpt">

              <input
                type={props.type}
                onChange={props.onchange}
                placeholder={props.placeholder}
                value={props.value}
                pattern={props.pattern}
                disabled={props.disabled}
              />
              
              <div className="eye" onClick={props.oneye}>

               {props.eye==1 && <FaEye />}
              </div>
              <div></div>
              </div>
              
              </>
            )}
            {props.i == 1 && (
              <select
                onChange={(e) => {
                  props.fun(e.target.value);
                }}
                disabled={props.disabled}
              >
                {props.value.map((data) => {
                  return (
                    <option name={props.name} value={data[0]}>
                      {data[1]}
                    </option>
                  );
                })}
              </select>
            )}
            {props.i == 3 && (
              <>
                <a
                  className="dob dob1"
                  name={props.name}
                  id={props.id}
                  title="set date"
                  onClick={(e) => {
                    setVis(1 - calVis);
                  }}
                >
                  {props.value}
                </a>
                {calVis == 1 && (
                  <Calendar
                    className="dob dob2"
                    onClickDay={(e) => {
                      {
                        props.fun(e);
                      }
                      setVis(0);
                    }}
                    value={props.date}
                  />
                )}
              </>
            )}
            {props.i == 2 && (
              <input
                value={props.value}
                disabled={true}
              />
            )}
               </div>
           </div>
          </div>
          </form>
        </div>
      </Container>
    );
  }


  const Container = styled.div`
    .basic-details {
      background-color: rgb(242, 242, 182);
      padding: 1.2rem;

      .row {
        height: 15px;
        .box {
          display: grid;
          grid-template-columns: 1fr 6fr;
          gap: auto auto;
        }
      }
      .inpt {
        {display: flex;
        grid-template-columns: 49fr 1fr 0.5fr;
        gap: auto auto auto;

        }
        input {
          border: none;
          width: 45%;
          height: 1.5rem;
          border-style: none;
          border-radius: 5px;
          padding-left: 0.5rem;
          color: blue;
          font-weight: bold;
          text-transform: uppercase;
          &:focus {
            background-color: rgb(172, 182, 248);
          }
        }
      }
      .dob1 {
        width: 40%;
        height: 1.5rem;
        text-align: right;
        &:hover {
          background-color: rgb(172, 182, 248);
        }
      }
      .dob2 {
        z-index: 100;
        position: absolute;
        right: 12.5vw;
      }
    }
  `;

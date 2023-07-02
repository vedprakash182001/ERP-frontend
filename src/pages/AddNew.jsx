import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Header from '../components/header';
import BasDetails from '../components/BasDetails';

// import {SICalender} from "react-icons/si"
export default function AddNew(props){
    
     
     const [msg,setmsg]=useState("");

     const SaveStudentData=()=>{
       /*
       {firstName,lastName,rollNo,gender,category,dob,personal_email,insti_email,phone,G_email,G_phone,address,city,police_station,pin_code,district,state,country,emg_contact_no,emg_person_name,emg_relation,emg_contact_address}

      */
     }
    


 
    return (
      <>
        <Container>
          {/* ************************************** */}
          <div className="parents">
            <h3>Parental Information</h3>
            <div className="box">
              <BasDetails
                label="Father Name"
                type="text"
                onchange={(e) => {
                  props.setfather(e.target.value);
                }}
                value={props.father}
                disabled={props.disabled}
                i={0}
              />
              <BasDetails
                label="Family annula income"
                type="number"
                onchange={(e) => {
                  props.setincome(e.target.value);
                }}
                value={props.income}
                disabled={props.disabled}
                i={0}
              />
              <BasDetails
                label="Guardian Name"
                type="text"
                onchange={(e) => {
                  props.setguardname(e.target.value);
                }}
                value={props.guardname}
                disabled={props.disabled}
                i={0}
              />
              <BasDetails
                label="Parent Profession"
                type="text"
                onchange={(e) => {
                  props.setprofession(e.target.value);
                }}
                value={props.profession}
                disabled={props.disabled}
                i={0}
              />

            </div>
          </div>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="box">
              <BasDetails
                label="Institute Email-Id"
                type="email"
                onchange={(e) => {
                  props.setImail(e.target.value);
                }}
                value={props.inst_mail}
                disabled={props.disabled}
                i={0}
              />
              <BasDetails
                label="Phone No"
                type="tel"
                onchange={(e) => {
                  props.setphone(e.target.value);
                }}
                value={props.phone}
                pattern="[0-9]{10}"
                disabled={props.disabled}
                i={0}
              />
              <BasDetails
                label="Guardian Email-Id"
                type="email"
                onchange={(e) => {
                  props.setGuardmail(e.target.value);
                }}
                value={props.Guardmail}
                disabled={props.disabled}
                i={0}
              />

              <BasDetails
                label="Guardian Phone No"
                type="tel"
                onchange={(e) => {
                  props.setGuardphone(e.target.value);
                }}
                value={props.Guardphone}
                pattern="[0-9]{10}"
                disabled={props.disabled}
                i={0}
              />
            </div>
          </div>
          {/* ******************************* */}
          <div className="address">
            <h3>Permanent Address</h3>
            <BasDetails
              label="Address"
              type="textarea"
              onchange={(e) => {
                props.setaddress(e.target.value);
              }}
              value={props.address}
              disabled={props.disabled}
              i={0}
            />
            <div className="box">
              <BasDetails
                label="City"
                type="text"
                onchange={(e) => {
                  props.setcity(e.target.value);
                }}
                value={props.city}
                disabled={props.disabled}
                i={0}
              />
              <BasDetails
                label="Police Station"
                type="text"
                onchange={(e) => {
                  props.setpoliceSt(e.target.value);
                }}
                placeholder=""
                value={props.policeSt}
                disabled={props.disabled}
                i={0}
              />
              <BasDetails
                label="Pin code"
                type="tel"
                onchange={(e) => {
                  props.setpincode(e.target.value);
                }}
                value={props.pincode}
                pattern="[0-9]{10}"
                disabled={props.disabled}
                i={0}
              />
              <BasDetails
                label="District"
                type="text"
                onchange={(e) => {
                  props.setdistrict(e.target.value);
                }}
                placeholder=""
                value={props.district}
                disabled={props.disabled}
                i={0}
              />
              <BasDetails
                label="State"
                type="text"
                onchange={(e) => {
                  props.setstate(e.target.value);
                }}
                placeholder=""
                value={props.state}
                disabled={props.disabled}
                i={0}
              />
              <BasDetails
                label="Country"
                type="text"
                onchange={(e) => {
                  props.setcountry(e.target.value);
                }}
                placeholder=""
                value={props.country}
                disabled={props.disabled}
                i={0}
              />
            </div>
          </div>
          {/* ************************************ */}
          <div className="emergency-info">
            <h3>Emergency information</h3>
            <div className="box">
              <BasDetails
                label="Contact No"
                type="tel"
                onchange={(e) => {
                  props.setemgphone(e.target.value);
                }}
                value={props.emgphone}
                pattern="[0-9]{10}"
                disabled={props.disabled}
                i={0}
              />
              <BasDetails
                label="Contact person"
                type="text"
                onchange={(e) => {
                  props.setemgperson(e.target.value);
                }}
                value={props.emgperson}
                disabled={props.disabled}
                i={0}
              />
            </div>
            <BasDetails
              label="Relation with  person"
              type="text"
              onchange={(e) => {
                props.setemgrelation(e.target.value);
              }}
              value={props.emgrelation}
              disabled={props.disabled}
              i={0}
            />
            <BasDetails
              label="Emg contact Address"
              type="textarea"
              onchange={(e) => {
                props.setemgaddress(e.target.value);
              }}
              value={props.emgaddress}
              disabled={props.disabled}
              i={0}
            />
          </div> 
        </Container>
      </>
    );

}


const Container = styled.div`
  color: black;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  .submit-button {
    width: 150px;
    height: 2.5rem;
    margin: 1.2rem 0;
    float: right;
    border-radius: 2rem;
    border-style: none;
    background-color: rgb(87, 141, 250);
    &:hover {
      background-color: rgb(46, 45, 150);
      color:white;
    }
    ${"" /* box-shadow: */}
  }
`;
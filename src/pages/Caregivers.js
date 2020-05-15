import React, { useState } from "react";
import { useCaregivers, updateCaregiver, deleteCaregiver } from "../api";

import Button from "../components/Button";
import Header from "../components/Header";

export default function Caregivers() {
  const { loading, caregivers, error } = useCaregivers();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  // use this to make sure you are getting the right data
  console.log(caregivers);

  // Display a list of the authors
    return (
        <div>

            <h1>Caregivers List</h1>
            <Header />
            <div>
                {caregivers.map(caregiver => (
                    <Caregiver key={caregiver.username} {...caregiver} />
                ))}
            </div>
        </div> );
}

export function Caregiver(caregiver) {
  const { first_name, last_name, gender, introduction, username} = caregiver;
  const [showUpdate, setShowUpdate] = useState(false);

  return (
    <div className={`caregiver caregiver-${username}`} key={username}>
      <div className="info">
        ({username}) {first_name} {last_name} {gender} {introduction}
        <Button className={"btn"} onClick={() => setShowUpdate(!showUpdate)}>
          {showUpdate ? "-" : "+"}
        </Button>
      </div>
      <CaregiverExtended {...caregiver} showUpdate={showUpdate} />
    </div>
  );
}

function CaregiverExtended(props) {
  const { first_name, last_name, gender, introduction, username, showUpdate } = props;

  const [username_input, setUsername] = useState(username);
  const [first_input, setFirstName] = useState(first_name);
  const [last_input, setLastName] = useState(last_name);
  const [gender_input, setGender] = useState(gender);
  const [introduction_input,setIntroduction] = useState(introduction);
  function onSubmit() {
    // call upate author function
      updateCaregiver({
       first_name: first_input,
       last_name: last_input,
       gender: gender_input,
       introduction: introduction_input,
       username: username,
     });
  }

  return (

    <div className={`caregiver-expand ${showUpdate ? "show" : ""}`}>
      <form className={"caregiver-expand-left"}>
        {/* TODO - add value and onChange properties to inputs */}
        <p>
            <label className="label_input">first name</label>
        <input type="text" name="first_name" value = {first_input} onChange={event => {setFirstName(event.target.value);}}/>
        </p>
        <p>
            <label className="label_input">last name</label>
        <input type="text" name="last_name" value = {last_input} onChange={event => {setLastName(event.target.value);}}/>
        </p>
        <p>
            <label className="label_input">gender</label>
        <input type="text" name="gender" value = {gender_input} onChange={event => {setGender(event.target.value);}}/>
        </p>
        <p>
         <label className="label_input">introduction</label>
         <input type="text" name="introduction" value = {introduction_input} onChange={event => {setIntroduction(event.target.value);}}/>
        </p>
        <Button className={"btn-warning"} onClick={onSubmit}>
          Update
        </Button>

      <Button className={"btn-danger"} onClick={() => deleteCaregiver(username)}>
        Delete
      </Button>
      </form><form className={"caregiver-expand-right"}></form>


      </div>
  );
}

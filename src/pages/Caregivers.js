import React, { useState } from "react";
import { useCaregivers, updateCaregiver, deleteCaregiver } from "../api";

import Button from "../components/Button";

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
          {caregivers.map(caregiver => (
              <Caregiver key={caregiver.id} {...caregiver} />
          ))}
      </div> );
}

function Caregiver(caregiver) {
  const { id, first_name, last_name, gender, introduction} = caregiver;
  const [showUpdate, setShowUpdate] = useState(false);

  return (
    <div className={`caregiver caregiver-${id}`} key={id}>
      <div className="info">
        ({id}) {first_name} {last_name} {gender} {introduction}
        <Button className={"btn"} onClick={() => setShowUpdate(!showUpdate)}>
          {showUpdate ? "-" : "+"}
        </Button>
      </div>
      <CaregiverExtended {...caregiver} showUpdate={showUpdate} />
    </div>
  );
}

function CaregiverExtended(props) {
  const { id, first_name, last_name, gender, introduction, showUpdate } = props;

  const [id_input, setId] = useState(id);
  const [first_input, setFirstName] = useState(first_name);
  const [last_input, setLastName] = useState(last_name);
  const [gender_input, setGender] = useState(gender);
  const [introduction_input,setIntroduction] = useState(introduction);
  function onSubmit() {
    // call upate author function
      updateCaregiver({
       id: id_input,
       first_name: first_input,
       last_name: last_input,
       gender: gender_input,
       introduction: introduction_input
     });
  }

  return (
    <div className={`caregiver-expand ${showUpdate ? "show" : ""}`}>
      <form>
        {/* TODO - add value and onChange properties to inputs */}
        <input type="text"
               name="id"
               value = {id_input}
               onChange={event => {
                   setId(event.target.value);
               }}
            />
        <input type="text"
               name="first_name"
               value = {first_input}
               onChange={event => {
                   setFirstName(event.target.value);
               }}
        />
        <input type="text"
               name="last_name"
               value = {last_input}
               onChange={event => {
                   setLastName(event.target.value);
               }}
        />
        <input type="text"
                 name="gender"
                 value = {gender_input}
                 onChange={event => {
                     setGender(event.target.value);
                 }}
         />
         <input type="text"
                 name="introduction"
                 value = {introduction_input}
                 onChange={event => {
                     setIntroduction(event.target.value);
                 }}
         />

        <Button className={"btn-warning"} onClick={onSubmit}>
          Update
        </Button>
      </form>
      <Button className={"btn-danger"} onClick={() => deleteCaregiver(id)}>
        Delete
      </Button>
    </div>
  );
}

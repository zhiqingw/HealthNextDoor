import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "https://healthnextdoortest.herokuapp.com";

function getCaregivers() {
  const endpoint = BASE_URL + `/findCaregiver`;

  // TODO
  // return fetch call that gets author list
  return fetch(endpoint).then(res => {
    console.log(res);
    return res.json();
  });
}

export function getCaregiver(id) {
  const endpoint = BASE_URL + `/findCaregiver/${id}`;

  // TODO
  // return fetch statement to get an author by the id
}

export function addCaregiver(caregiver) {
  const { id, first_name, last_name } = caregiver;
  if (!id || !first_name || !last_name) {
    alert("must include all fields");
    return;
  }

  const endpoint = BASE_URL + `/findCaregiver/`;

  // TODO
  // return fetch statement to add an author
}

export function updateCaregiver(caregiver) {
  const { id, first_name, last_name, gender, introduction } = caregiver;
  if (!id) {
    alert("must include an id");
    return;
  }
  if (!first_name || !last_name) {
    alert("must include a first name or last name to update");
    return;
  }
  if (!gender){
    alert("must include gender");
    return;
  }
  if (!introduction){
    alert("must include an introduction");
    return;
  }

  const endpoint = BASE_URL + `/findCaregiver/${id}`;

  // return fetch query to update an author
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id,
      first_name,
      last_name,
      gender,
      introduction
    })
  });

}

export function deleteCaregiver(id) {
  const endpoint = BASE_URL + `/findCaregiver/${id}`;

  // return fetch query
}

export function useCaregivers() {
  const [loading, setLoading] = useState(true);
  const [caregivers, setCaregivers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCaregivers()
      .then(caregivers => {
        setCaregivers(caregivers);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    caregivers,
    error
  };
}

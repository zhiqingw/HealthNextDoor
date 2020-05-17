import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "https://healthnextdoortest.herokuapp.com";

/*login check used to validate the input with data from the database and let the user log in*/
export function loginCheck(username, password) {

  if (!username) {
    alert("must include a username");
    return;
  }
  if (!password) {
    alert("must include password");
    return;
  }

  const endpoint = BASE_URL + `/login`;
  // return fetch query to update an author
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then(res =>{
    if(res.ok){
      window.sessionStorage.setItem("username",username);
      window.location.assign(`user-management/${username}`)
    }
    else{
      alert("wrong password or username");
    }
  });
}

/*sign up check used to validate the input and let the user sign up*/
export function signupCheck(username, password, confirmed_password) {

  if (username === "") {
    alert("please input a username!");
  }
  if (password === "") {
    alert("please input a password!");
  }
  if (confirmed_password === "") {
    alert("please confirm your password!");
  }
  if (password !== confirmed_password) {
    alert("password and confirmed password does not match");
  }

  const endpoint = BASE_URL + `/signup`;
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then(res =>{
    if(res.ok){
      window.sessionStorage.setItem("username",username);
      window.location.href = `user-management/${username}`;
    }
    else{
      alert("This username has already been taken!");
      window.location.href = `SignUp/`;
    }
  });

}

export function updateUser(user) {
  const { username, password} = user;
  if (!password) {
    alert("must include a password");
    return;
  }
  const endpoint = BASE_URL + `/login/${username}`;
// return fetch query
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  });
  //.then(res => location.reload());
}


export function getUser() {
  const endpoint = BASE_URL + `/login`;
  return fetch(endpoint).then(res => {
    console.log(res);
    return res.json();
  });
}

export function useUser() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser()
        .then(user => {
          setUser(user);
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
    user,
    error
  };
}
function getCaregivers() {
  const endpoint = BASE_URL + `/findCaregiver`;

  // TODO
  // return fetch call that gets caregivers list
  return fetch(endpoint).then(res => {
    console.log(res);
    return res.json();
  });
}
/*addCaregiver used to let user to make a post*/
export function addCaregiver(caregiver) {
  const { first_name, last_name, gender, introduction, username, age, address, salary, working_experience } = caregiver;
  if ( !gender|| !first_name || !last_name || !introduction || !username || !age || !address || !salary || !working_experience) {
    alert("must include all fields");
    return;
  }

  const endpoint = BASE_URL + `/findCaregiver/`;
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      first_name,
      last_name,
      gender,
      introduction,
      username,
      age,
      address,
      salary,
      working_experience,
    })
  }).then(res =>{
    if(res.ok){
      window.location.href = `user-management/${username}`;
    }
    else{
      alert("You already have a post, please update or delete the existed post in user home page!");
    }
  });
}
/*updataeCarever used to let user to update post*/
export function updateCaregiver(caregiver) {
  const { first_name, last_name, gender, introduction, username, age, address, salary, working_experience } = caregiver;
  if (!username) {
    alert("must include a username");
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
  if (!age){
    alert("must include an age");
    return;
  }
  if (!address){
    alert("must include an address");
    return;
  }
  if (!salary){
    alert("must include a salary");
    return;
  }
  if (!working_experience){
    alert("must include a salary");
    return;
  }

  const endpoint = BASE_URL + `/findCaregiver/${username}`;

  // return fetch query to update an author
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      first_name,
      last_name,
      gender,
      introduction,
      username,
      age,
      address,
      salary,
      working_experience,
    })
  });

}

export function deleteCaregiver(username) {
  const endpoint = BASE_URL + `/findCaregiver/${username}`;
  return fetch(endpoint, {
    method: "DELETE",
  });
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


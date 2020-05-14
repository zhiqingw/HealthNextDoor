import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "https://healthnextdoortest.herokuapp.com";

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
      /**let history = this.props.history;
      history.push('/${username}');**/
      //<User {...username}/>
      window.location.href = `user-management/${username}`;
      //let handleGoToDetail;
    }
    else{
      alert("wrong password or username");
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
  // TODO
  // return fetch statement to get an author by the id

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
  const { first_name, last_name, gender, introduction, username } = caregiver;
  if ( !gender|| !first_name || !last_name || !introduction || !username) {
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
      username
    })
  });
  // TODO
  // return fetch statement to add an author
}

export function updateCaregiver(caregiver) {
  const { first_name, last_name, gender, introduction, username } = caregiver;
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
      username
    })
  });

}

export function deleteCaregiver(username) {
  const endpoint = BASE_URL + `/findCaregiver/${username}`;
  return fetch(endpoint, {
    method: "DELETE",
  });
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


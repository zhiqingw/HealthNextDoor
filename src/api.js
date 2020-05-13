import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "https://mylibraryapp956895.herokuapp.com";

function getAuthors() {
  const endpoint = BASE_URL + `/author-management`;
// return fetch call that gets author list
  return fetch(endpoint).then(res => {
    console.log(res);
    return res.json();
  });
}

export function getAuthor(id) {
  const endpoint = BASE_URL + `/author-management/${id}`;
  return fetch(endpoint).then(res => {
    console.log(res);
    return res.json();
  });
  // TODO
  // return fetch statement to get an author by the id
}

export function addAuthor(author) {
  const { id, first_name, last_name } = author;
  if (!id || !first_name || !last_name) {
    alert("must include all fields");
    return;
  }

  const endpoint = BASE_URL + `/author-management/`;

  // TODO
  // return fetch statement to add an author
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id,
      first_name,
      last_name
    })
  });
}

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

export function updateAuthor(author) {
  const { id, first_name, last_name } = author;
  if (!id) {
    alert("must include an id");
    return;
  }
  if (!first_name || !last_name) {
    alert("must include a first name or last name to update");
    return;
  }
  const endpoint = BASE_URL + `/author-management/${id}`;
// return fetch query
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id,
      first_name,
      last_name
    })
  });
  //.then(res => location.reload());
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

export function deleteAuthor(id) {
  const endpoint = BASE_URL + `/user-management/${id}`;
  return fetch(endpoint, {
    method: "DELETE",
  });
  // return fetch query
}

export function useAuthors() {
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAuthors()
        .then(authors => {
          setAuthors(authors);
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
    authors,
    error
  };
}
export function getUser(username) {
  const endpoint = BASE_URL + `/findCaregiver/${username}`;
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
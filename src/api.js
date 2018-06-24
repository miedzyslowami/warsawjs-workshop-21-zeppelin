const API_ADDRESS = 'https://warsawjs-21-api.herokuapp.com';

export function login({username, password}) {
  return fetch(`${API_ADDRESS}/auth`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({username, password})
  }).then(transformJSONResponse);
}

function transformJSONResponse(response) {
  if (!response.ok) {
    return Promise.reject(response);
  }
  return response.json();
}

export function readPostList() {
  return fetch(`${API_ADDRESS}/posts`, {method: 'GET'}).then(transformJSONResponse);
}

export function createPost({username, title, image}) {
  const body = new FormData();
  body.append('username', username);
  body.append('title', title);
  body.append('image', image);

  return fetch(`${API_ADDRESS}/posts`, {
    method: 'POST',
    body
  }).then(transformJSONResponse);
}

export function readPost(postId) {
  return fetch(`${API_ADDRESS}/posts/${postId}`, {method: 'GET'}).then(transformJSONResponse);
}

export function createComment({postId, username, body, position}) {
  return fetch(`${API_ADDRESS}/posts/${postId}/comments`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({postId, username, body, position})
  }).then(transformJSONResponse);
}

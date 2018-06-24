export function isLoggedIn(state) {
  return !!state.auth.username;
}

export function getProjectList(state) {
  return state.projects.items;
}

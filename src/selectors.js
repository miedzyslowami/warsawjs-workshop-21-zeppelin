export function isLoggedIn(state) {
  return !!state.auth.username;
}

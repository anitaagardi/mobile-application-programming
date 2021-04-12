export default {
  login(credentials) {
    return (
      credentials.email == 'admin' && credentials.password == 'admin'
    );
  },
};

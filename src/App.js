import GoogleLogin from "react-google-login";

function App() {
  const responseGoogle = (res) => {
    console.log(res);
  };

  return (
    <div className="App">
      <GoogleLogin
        clientId="1019792659480-v1lvsoqi495r5u4qclg70eothoorob5h.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        scope="https://www.googleapis.com/auth/contacts.readonly email profile"
      />
    </div>
  );
}

export default App;

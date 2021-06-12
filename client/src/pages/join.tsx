import axios from "axios";
import { useRouter } from "next/router";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { Container, AuthWrapper } from "../styles/join.style";
import { Button } from "../components/button";

function EDIT() {
  const router = useRouter();

  const handleSubmit = (res) => {
    if (!res.profileObj) return;
    const user = {
      googleId: res.profileObj.googleId,
      firstname: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      username: res.profileObj.name,
      avater: res.profileObj.imageUrl,
    };
    axios
      .post("/auth/google", user)
      .then((res) => {
        router.push("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const handleError = (res) => {
    console.log(res);
  };
  const handleFacebook = (res) => {
    console.log(res);
    if (!res) return;
    const user = {
      facebookId: res.id,
      email: res.email,
      username: res.name,
      firstname: res.name.split(" ")[0],
      lastname: res.name.split(" ")[res.name.split(" ").length - 1],
      avater: res.picture.data.url,
    };
    axios
      .post("/auth/facebook", user)
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Container>
      <AuthWrapper>
        <GoogleLogin
          clientId={process.env.GOOGLE_AUTH_ID}
          render={(renderProps) => (
            <Button
              buttonStyle="primary"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sigin with Google
            </Button>
          )}
          buttonText="Login"
          onSuccess={handleSubmit}
          onFailure={handleError}
          cookiePolicy={"single_host_origin"}
        />

        <FacebookLogin
          appId={process.env.FACEBOOK_AUTH_ID}
          autoLoad={false}
          callback={handleFacebook}
          fields="name,email,picture"
          render={(renderProps) => (
            <Button buttonStyle="warning" onClick={renderProps.onClick}>
              Signin with facebook
            </Button>
          )}
        />
      </AuthWrapper>
    </Container>
  );
}

export default EDIT;

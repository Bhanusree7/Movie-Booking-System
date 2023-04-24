import CookieConsent from "react-cookie-consent";
import { useCookies } from "react-cookie";

function Cookies() {
  const [cookies, setCookie] = useCookies(["myAwesomeCookieName2"]);
<CookieConsent
  location="bottom"
  buttonText="Accept"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
</CookieConsent>

  // ...
}

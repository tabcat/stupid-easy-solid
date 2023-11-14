import { useSolidAuth } from "@ldo/solid-react";
import { FunctionComponent } from "react";
import { Profile } from "./Profile";

export const Login: FunctionComponent = () => {
  const { login, logout, session } = useSolidAuth();

  if (!session.isLoggedIn) {
    return (
      <div>
        <p>Currently Logged Out</p>
        <button onClick={() => {
          const issuer = prompt("What is your Solid Issuer?", "https://solidweb.me");
          if (issuer) login(issuer);
        }}>Log In</button>
      </div>
    )
  }

  return (
    <div>
      <p>Logged in as {session.webId}</p>
      <button onClick={logout}>Log Out</button>
      <Profile />
    </div>
  )
}

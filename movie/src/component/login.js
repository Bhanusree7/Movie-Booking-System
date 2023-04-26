import React, { useState } from "react";
import './login.css'
import Launching from "./Launching";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the API to verify the user's credentials
  };

  return (
    <div className="all">
      <Launching></Launching>
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-form__label">
            Email:
            <input className="login-form__input" type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label className="login-form__label">
            Password:
            <input className="login-form__input" type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button className="login-form__button" type="submit"><Link to="/">Login</Link></button>
        </form>
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     axios.post('/api/login', {
//       username: username,
//       password: password,
//     })
//     .then((response) => {
//       console.log(response.data);
//       // redirect user to dashboard or home page
//     })
//     .catch((error) => {
//       console.log(error);
//       // show error message to user
//     });
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={handleUsernameChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={handlePasswordChange} />
//       </label>
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;









// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/LoginPage', { username, password });
//       console.log(response.data);
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;







// import React, { useState } from 'react';
// import './login.css';
// import Launching from './Launching';
// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Email: ${email}, Password: ${password}`);
//     // handle login logic here
//   };

//   return (
//     <div>

//     <Launching></Launching>
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Log in</button>
//     </form>
//     </div>
//   );
// }

// export default Login;

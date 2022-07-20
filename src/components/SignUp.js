import React from "react";

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <input type="text" name="firstName" placeholder="First name" />
        </div>
        <div>
          <input type="text" name="lastName" placeholder="Last name" />
        </div>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="username" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SignUp
import React from "react";
import './Signup.css'

export default function Signup() {
  return (
    <div className="main">
   
      <div className="sign-up">
      <h1 className="text-center pb-5">Sign Up</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            UserName
          </label>
          <input
            type="text"
            class="form-control inputt"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control inputt"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Remember Me
          </label>
        </div>
        <div className="text-center">
        <button type="submit" class="btn text-center">
          Submit
        </button>
        </div>
      </form>
    </div>
    </div>
   
  );
}

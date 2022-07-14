import React from "react";

const SignupModal = () => {
  return (
    <div>
      

      <input type="checkbox" id="signupModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
        <h1 className="font-bold uppercase">Sign Up Please!</h1>

        <input type="text" placeholder="Type Name" class="input input-bordered w-full max-w-xs my-4" />

        <input type="email" placeholder="Type Email" class="input input-bordered w-full max-w-xs my-4" />

        <input type="password" placeholder="Type Password" class="input input-bordered w-full max-w-xs my-4" />

        <input type="password" placeholder="Type Confirm Password" class="input input-bordered w-full max-w-xs my-4" />

        <textarea placeholder="Type Your Text" class="input input-bordered w-full max-w-xs my-4" />

        <input type="submit" class=" bg-blue-500 p-2 rounded-lg text-white uppercase w-full max-w-xs my-4 cursor-pointer" value="Sign Up" />
          
          <div class="modal-action">
            <label for="signupModal" class="btn">
              cencel!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;

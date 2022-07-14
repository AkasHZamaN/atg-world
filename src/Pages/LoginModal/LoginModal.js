import React from "react";

const LoginModal = () => {
  return (
    <div>
      

      <input type="checkbox" id="loginModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
        <h1 className="font-bold uppercase">Login Please!!</h1>
        <input type="email" placeholder="Type Email" class="input input-bordered w-full max-w-xs my-4" />

        <input type="password" placeholder="Type password" class="input input-bordered w-full max-w-xs my-4" />

        <input type="submit" class=" bg-blue-500 p-2 rounded-lg text-white uppercase w-full max-w-xs my-4 cursor-pointer" value="Login" />
          
          <div class="modal-action">
            <label for="loginModal" class="btn">
              cencel!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

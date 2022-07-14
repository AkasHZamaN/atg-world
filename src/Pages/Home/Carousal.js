import React from "react";

const Carousal = () => {
  return (
    <div>
      <div
        class="hero h-96"
        style={{backgroundImage:"url('https://i.postimg.cc/Dzn94sVt/woman-holding-credit-card-hand-entering-security-code-using-laptop.jpg')"}}
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-start text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-3xl font-bold">Computer Engineering</h1>
            <p class="mb-5">
              142,765 Computer engineers follow this
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;

const Landing_page = () => {
  return (
    <div className="bg-bg_1 px-3 box-border h-screen">
      <div className="header h-10 flex justify-center">
        <div className="flex pt-1">
          <a href="#top">Home</a>
          <a href="https://www.google.com" className="pl-5">
            Our Products
          </a>
          <a href="www.google.com" className="px-5">
            How it works
          </a>
          <a href="www.google.com">Contact us</a>
        </div>
      </div>

      <div className="Main_Section flex justify-start">
        <div className="Left_Part text-left">
          <div className="pt-[100px] text-8xl">Build By Block</div>
          <div className="text-3xl">BlockChain Web-app For Real Estate</div>
          <div className="text-lg">
            It was always the Monday mornings. It never seemed to happen on
            Tuesday morning, Wednesday morning, or any other morning during the
            week.
          </div>
          <button>Sign Up</button>
          <button>Sign In</button>
        </div>

        <div className="pr-[50%] Right_Part">tdsasdaasdaja</div>
      </div>
    </div>
  );
};

export default Landing_page;

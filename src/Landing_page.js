const Landing_page = () => {
  return (
    <div className="bg-bg_1 px-3 h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-black"></div>
      </div>
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

      <div className="Main_Section grid grid-cols-2">
        <div className="Left_Part">
          <div className="pt-[100px] text-8xl">Build By Block</div>
          <div className="text-3xl">BlockChain Web-app For Real Estate</div>
          <div className="text-lg">
            It was always the Monday mornings. It never seemed to happen on
            Tuesday morning, Wednesday morning, or any other morning during the
            week.
          </div>
          <div className="button">
            <button className="border-2 border-txt_1 rounded-xl pt-1 p-2 text-3xl">
              Sign Up
            </button>
            <button className="border-2 border-txt_1 mx-1 rounded-xl pt-1 p-2 text-3xl">
              Sign In
            </button>
            <button className="border-2 border-txt_1 rounded-xl pt-1 p-2 text-3xl">
              Vision
            </button>
          </div>
        </div>
        <div className="Right_Part">tdsasdaasdaja</div>
      </div>
    </div>
  );
};

export default Landing_page;

// First BLOCKCHAIN WEBSITE FOR REALSTATE
//DECENTRALIZED NETWORK
//24/7 AVAILIBILITY
//BLOGGING FOR LATEST NEWS AND

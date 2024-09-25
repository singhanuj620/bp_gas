import { BrowserLocation, InputLocation } from "../index";
const Homepage = () => {
  return (
    <div className="min-h-[72vh] md:min-h-[73vh] flex justify-center items-center gap-10">
      <div className="w-[50%] flex justify-center items-center">
        <BrowserLocation />
      </div>
      <div className="border-2 border-gray-300 h-[30vh]"></div>
      <div className="w-[50%] flex justify-center items-center">
        <InputLocation />
      </div>
    </div>
  );
};

export default Homepage;

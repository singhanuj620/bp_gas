import Button from "../Button/Button";
import UserLocation from "../UserLocation/UserLocation";
import { useSelector, useDispatch } from "react-redux";
import AddFilters from "../AddFilters/AddFilters";
import { toggleMode, changeRadius } from "../../features/filters/filtersSlice";
import { setpath } from "../../features/path/pathSlice";
import { allRoutes } from "../../constants/allRoutes";
const Homepage = () => {
  const dispatch = useDispatch();
  const {
    showModal: addMoreFilters,
    radius,
    filters,
  } = useSelector((state) => state.filters);
  const { latitude, longitude } = useSelector((state) => state.location);
  const { isDarkMode: darkMode } = useSelector((state) => state.darkMode);
  return (
    <div
      className={`min-h-[72vh] md:min-h-[73vh] flex justify-center items-center flex-col gap-10 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className={`${addMoreFilters && "opacity-50"}`}>
        <UserLocation />
      </div>
      {addMoreFilters && <AddFilters />}
      <div className={`${addMoreFilters && "opacity-50"}`}>
        <div className="flex flex-col gap-2 justify-start items-start">
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className={`${darkMode && "text-white"}`}>
              Radius (in miles) :{" "}
            </div>
            <div className="flex flex-row gap-5">
              <div
                className={`${radius === 0.5 && "bg-gray-700 text-white "} ${
                  darkMode && "text-white"
                } rounded-md p-2 cursor-pointer`}
                onClick={() => dispatch(changeRadius(0.5))}
              >
                0.5
              </div>
              <div
                className={`${radius === 1 && "bg-gray-700 text-white"} ${
                  darkMode && "text-white"
                } rounded-md p-2 cursor-pointer`}
                onClick={() => dispatch(changeRadius(1))}
              >
                1
              </div>
              <div
                className={`${radius === 5 && "bg-gray-700 text-white"} ${
                  darkMode && "text-white"
                } rounded-md p-2 cursor-pointer`}
                onClick={() => dispatch(changeRadius(5))}
              >
                5
              </div>
            </div>
          </div>

          <Button onClick={() => dispatch(toggleMode())}>
            {filters.open24 ||
            filters.hotFood ||
            filters.convinienceStore ||
            filters.bpFuelCards
              ? "Edit Filters"
              : "Apply Filters"}
          </Button>
        </div>
        <div className="my-10">
          <Button
            darkMode={darkMode}
            disabled={!latitude || !longitude}
            onClick={() => dispatch(setpath({ path: allRoutes.results }))}
          >
            Start Searching
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

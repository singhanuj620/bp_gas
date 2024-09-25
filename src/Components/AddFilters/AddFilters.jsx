import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAllFilters,
  handleFilterChange,
  toggleMode,
} from "../../features/filters/filtersSlice";
const AddFilters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filters);
  const { isDarkMode: darkMode } = useSelector((state) => state.darkMode);
  const handleApplyFilter = () => {
    dispatch(toggleMode());
    console.log("Filters Applied", filters);
  };
  return (
    <div
      className={`fixed top-32 md:w-[30vw] md:h-[50vh] border-2 border-black ${
        darkMode ? "bg-gray-700" : "bg-white"
      } p-4 z-20`}
    >
      <div
        className="flex w-full justify-end cursor-pointer"
        onClick={() => dispatch(toggleMode())}
      >
        <img src="./icons/cross.svg" alt="modal close" width="30" height="30" />
      </div>
      <div className={`text-2xl font-semibold ${darkMode && "text-white"}`}>
        Choose Filters :
      </div>
      <div className="flex flex-row gap-10 justify-between items-center mt-6">
        <div className={`flex flex-col gap-3 ${darkMode && "text-white"}`}>
          <div>Open 24/7</div>
          <div>Convinience Store available</div>
          <div>Store prepared and serve hot food</div>
          <div>Accept bp fuel cards</div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <input
              type="checkbox"
              checked={filters.open24}
              onChange={() => dispatch(handleFilterChange({ type: "open24" }))}
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={filters.convinienceStore}
              onChange={() =>
                dispatch(handleFilterChange({ type: "convinienceStore" }))
              }
            />
          </div>
          <div>
            <input
              type="checkbox"
              disabled={!filters.convinienceStore}
              checked={filters.convinienceStore && filters.hotFood}
              onChange={() => dispatch(handleFilterChange({ type: "hotFood" }))}
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={filters.bpFuelCards}
              onChange={() =>
                dispatch(handleFilterChange({ type: "bpFuelCards" }))
              }
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div
          onClick={() => dispatch(clearAllFilters())}
          className={`cursor-pointer font-thin ${darkMode && 'text-white'} mb-2`}
        >
          Clear All Filters
        </div>
        <Button onClick={() => handleApplyFilter()}>Apply Filters</Button>
      </div>
    </div>
  );
};

export default AddFilters;

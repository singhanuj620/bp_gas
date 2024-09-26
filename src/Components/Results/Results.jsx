/* eslint-disable react/prop-types */
import AppliedFilters from "../AppliedFilters/AppliedFilters";
import { stationDataList } from "../../constants/db";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { favoriteBPStations } from "../../constants/localStorage";
import { allRoutes } from "../../constants/allRoutes";

const Results = () => {
  const { filterUpdatedCount } = useSelector((state) => state.filters);
  const { path: currentPath } = useSelector((state) => state.path);
  const [stationList, setStationList] = useState(stationDataList || []);
  useEffect(() => {
    if (currentPath === allRoutes.fav) {
      setStationList(
        JSON.parse(localStorage.getItem(favoriteBPStations)) || []
      );
    }
  }, [filterUpdatedCount, currentPath]);

  return (
    <div>
      <AppliedFilters stationDataList={stationList} />
    </div>
  );
};

export default Results;

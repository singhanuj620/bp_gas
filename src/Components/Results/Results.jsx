/* eslint-disable react/prop-types */
import React from "react";
import AppliedFilters from "../AppliedFilters/AppliedFilters";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { favoriteBPStations } from "../../constants/localStorage";
import { allRoutes } from "../../constants/allRoutes";

const Results = () => {
  const { filterUpdatedCount } = useSelector((state) => state.filters);
  const { path: currentPath } = useSelector((state) => state.path);
  const { isDarkMode: darkMode } = useSelector((state) => state.darkMode);
  const { stationDataList } = useSelector((state) => state.stationData);
  const [stationList, setStationList] = useState(stationDataList);
  useEffect(() => {
    if (currentPath === allRoutes.fav) {
      setStationList(
        JSON.parse(localStorage.getItem(favoriteBPStations)) || []
      );
    }
  }, [filterUpdatedCount, currentPath]);

  return (
    <div className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <AppliedFilters stationDataList={stationList} />
    </div>
  );
};

export default Results;

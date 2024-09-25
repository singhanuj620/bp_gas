import { useState } from "react";
import axios from "axios";
import {
  fetchInputAddressFromGoogle,
  fetchPlaceIdDetail,
} from "../../constants/endpoints";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../features/location/locationSlice";
const InputLocation = () => {
  const dispatch = useDispatch();
  const { isDarkMode: darkMode } = useSelector((state) => state.darkMode);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.post("/.netlify/functions/proxy", {
        url: fetchInputAddressFromGoogle(query),
      });

      if (response.data.status === "OK") {
        setSuggestions(response.data.predictions);
      } else {
        console.error("Error fetching suggestions:", response.data.status);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const fetchPlaceDetails = async (placeId) => {
    try {
      const response = await axios.post("/.netlify/functions/proxy", {
        url: fetchPlaceIdDetail(placeId),
      });

      if (response.data.status === "OK") {
        const { lat, lng } = response.data.result.geometry.location;
        dispatch(setLocation({ latitude: lat, longitude: lng }));
        console.log("Coordinates:", { lat, lng });
      } else {
        console.error("Error fetching place details:", response.data.status);
      }
    } catch (error) {
      console.error("Error fetching place details:", error);
    }
  };

  const handleSelect = (suggestion) => {
    setInput(suggestion.description);
    setSuggestions([]);
    fetchPlaceDetails(suggestion.place_id);
  };

  return (
    <div className=" max-h-[65vh]">
      <div className="md:w-[30vw] flex flex-col gap-5">
        <div className={`${darkMode ? "text-white" : "text-black"}`}>
          OR Enter an address to get suggestions
        </div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              fetchSuggestions(e.target.value);
            }}
            placeholder="Enter an address"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:w-full"
          />
        </div>
      </div>
      <div>
        {suggestions.length > 0 && (
          <ul className="mt-2 border border-gray-300 rounded-md shadow-lg bg-white">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.place_id}
                onClick={() => handleSelect(suggestion)}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                {suggestion.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InputLocation;

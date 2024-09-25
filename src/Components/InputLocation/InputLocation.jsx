import { useState, useEffect } from "react";
import axios from "axios";
import { fetchInputAddressFromGoogle } from "../../constants/endpoints";


const InputLocation = () => {
  const proxyurl = import.meta.env.VITE_PROXY_URL
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(fetchInputAddressFromGoogle(query));

      if (response.data.status === "OK") {
        setSuggestions(response.data.predictions);
      } else {
        console.error("Error fetching suggestions:", response.data.status);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions(input);
    }, 300); // Debounce time

    return () => clearTimeout(delayDebounceFn);
  }, [input]);

  const handleSelect = (suggestion) => {
    setInput(suggestion.description);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an address"
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputLocation;

import axios from "axios";
import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { fetchAddressFromGoogle } from "../../constants/endpoints";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../features/location/locationSlice";

const BrowserLocation = () => {
  const dispatch = useDispatch();
  const { isDarkMode: darkMode } = useSelector((state) => state.darkMode);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const fetchAddress = async (latitude, longitude) => {
    try {
      const fetchAddressURL = fetchAddressFromGoogle(latitude, longitude);
      const response = await axios.get(fetchAddressURL);
      const data = response.data;
      if (data.status === "OK") {
        setAddress(data.results[0].formatted_address);
        setLoading(false);
        setErrorMsg(null);
      } else {
        setLoading(false);
        setErrorMsg("Error fetching address");
        console.error("Geocoding error ", data.status);
      }
    } catch (error) {
      setErrorMsg("Error fetching address");
      setLoading(false);
      console.error("Error fetching address:", error);
    }
  };

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log("Coordinates:", { latitude, longitude });
            dispatch(setLocation({ latitude, longitude }));
            fetchAddress(latitude, longitude);
          },
          (error) => {
            setLoading(false);
            console.error("Error getting location:", error);
            setErrorMsg(error.message);
          }
        );
      } else {
        setLoading(false);
        console.error("Geolocation is not supported by this browser.");
        setErrorMsg("Geolocation is not supported by this browser.");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="flex justify-center items-center p-12">
      {loading && (
        <div className="flex flex-col gap-5 justify-center items-center">
          <MoonLoader
            color={`${darkMode ? "ffffff" : "#06402B"}`}
            loading={loading}
            size={50}
            speedMultiplier={1}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <div className={`${darkMode ? "text-white" : "text-black"}`}>
            Fetching location
          </div>
        </div>
      )}
      {!loading && errorMsg && (
        <div className="flex flex-col gap-5 justify-center items-center">
          <div>
            <img
              src="./icons/erroralert.svg"
              alt="Error"
              width="60"
              height="60"
            />
          </div>
          <div className={`${darkMode ? "text-white" : "text-black"}`}>
            {errorMsg}
          </div>
        </div>
      )}
      {!loading && !errorMsg && address && (
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-row justify-start items-start gap-5 w-full">
            <div>
              <img src="./icons/pin.svg" alt="Error" width="30" height="30" />
            </div>
            <div
              className={`font-semibold text-xl ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Current Location
            </div>
          </div>
          <div
            className={`flex flex-row justify-center items-center gap-5 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {address}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowserLocation;

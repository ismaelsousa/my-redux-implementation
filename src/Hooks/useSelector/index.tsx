import { useContext, useEffect, useState } from "react";
import { Context as ContextRedux } from "../../Context/Redux";
import { UseSelectorProps } from "./types";

const useSelector = (getState : UseSelectorProps) => {
  const { state } = useContext(ContextRedux);
  const [selectedState, setSelectedState] = useState(getState(state));

  useEffect(() => {
    const newSelected = getState(state);
    if (selectedState !== newSelected) {
      setSelectedState(newSelected);
    }
  }, [getState, selectedState, state]);

  return selectedState;
};

export default useSelector;

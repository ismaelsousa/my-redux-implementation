import { useCallback, useContext, useEffect, useState } from "react";
import { Context as ContextRedux } from "../../Context/Redux";
import { UseSelectorProps } from "./types";

const useSelector = (getState: UseSelectorProps) => {
  const { state, subscribe } = useContext(ContextRedux);
  const [selectedState, setSelectedState] = useState(getState(state));

  const handleSubscription = useCallback((newState)=>{
    const selected = getState(newState)
    setSelectedState(selected)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
   const unsubscribe =  subscribe(handleSubscription)
   return unsubscribe;    
  }, [handleSubscription, subscribe]);

  return selectedState;
};

export default useSelector;

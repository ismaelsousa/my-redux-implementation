import { useContext } from 'react';
import { Context as ContextRedux } from "../../Context/Redux";

const useDispatch = () => {
  const {  dispatch } = useContext(ContextRedux);

  return dispatch;
}

export default useDispatch;
import React from 'react';
import useDispatch from '../../Hooks/useDispatch';
import useSelector from '../../Hooks/useSelector';
import { changeNameAuth } from '../../store/modules/auth/actions';


const New: React.FC = () => {
  const dispatch = useDispatch()
  const state = useSelector((state:any)=>state.auth) as {name:string}

  const handleChangeName = ()=> dispatch(changeNameAuth({name:`${new Date().toISOString()}`}))

  console.log("Render: New");
  
  return <div><h1>New: {state.name}</h1> <button onClick={handleChangeName}>Press</button></div>;
}

export default New;
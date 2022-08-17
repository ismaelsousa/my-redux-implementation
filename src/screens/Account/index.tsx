import React from "react";
import useDispatch from "../../Hooks/useDispatch";
import useSelector from "../../Hooks/useSelector";
import { AuthState } from "../../store/modules/auth";
import { login, logout } from "../../store/modules/auth/actions";

const Account: React.FC = () => {
  const dispatch = useDispatch();
  const state: AuthState = useSelector((state) => state.auth)

  const handleAuth = () =>{
    if(!state.isLoggedIn){
      dispatch(login({ name: 'Ismael', email:'ismael@gmail.com' }))
    }else{
      dispatch(logout())
    }
  };

  console.log("Render: Account");

  return (
    <div>
      <h1>Usuário: {state.name}</h1>
      <button onClick={handleAuth}>{state.isLoggedIn?'Logout':'Login'}</button>
    </div>
  );
};

export default Account;

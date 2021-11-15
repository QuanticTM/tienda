import {useContext} from "react";
import {GlobalContext} from "../../logic/globalState"
import { useAuth0 } from "@auth0/auth0-react";

const UserInfo = () => {

    const {rol} = useContext(GlobalContext);
    const {user, isLoading, isAuthenticated } = useAuth0();

    const rolList = ["Pendiente", "Vendedor", "Admin"];

    return  rol < 1 ?
        <></>
        :
        isLoading ? <p> Cargando... </p>
        :
        isAuthenticated && <p className="user-info">{user.name} || {rolList[rol - 1]} </p>
}

export default UserInfo;

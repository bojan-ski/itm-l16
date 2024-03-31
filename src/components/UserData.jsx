import { useRecoilValue } from "recoil"
import { userState } from "../states/userState"

const UserData = () => {
    const userData = useRecoilValue(userState)
    console.log(userData);

    return (
        <div>
            <p>{userData.loggedIn}</p>
        </div>
    )
}

export default UserData
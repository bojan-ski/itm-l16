import { RecoilRoot } from "recoil"
import Login from "./components/Login"
import UserData from "./components/UserData"

const App = () => {
  return (
    <>
      <RecoilRoot>
        <UserData/>
        <Login/>
      </RecoilRoot>
    </>
  )
}

export default App

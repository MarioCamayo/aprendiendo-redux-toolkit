import { useSelector } from "react-redux"

const Header = () => {

    const user =  useSelector((state)=> state.user)
  return (
    <header>
        <h1>Redux ToolKit 2024</h1>
        <ul>
            <li>Name: {user.name} </li>
            <li>Email: {user.email} </li>
            <li>UserName: {user.username} </li>
        </ul>
    </header>
  )
}

export default Header
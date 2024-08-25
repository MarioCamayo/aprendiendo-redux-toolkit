import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { changeEmail } from "../redux/userSlice"

const Email = () => {
    const dispatch = useDispatch()
    const email = useSelector((state)=> state.user.email)
    const handleChange = (e)=>{
      dispatch(changeEmail(e.target.value))
    }

  return (
    <>
      <input type="text"  placeholder="Email" value={email} onChange={handleChange}/>
    </>
  )
}

export default Email
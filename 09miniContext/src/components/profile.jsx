import { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const{user} = useContext(UserContext)
  
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username} kya apka password ye tha {user.pass}</div>

}

export default Profile

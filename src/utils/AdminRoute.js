// import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
// import { UserContext } from './CreateContext'

const AdminRoute = ({ element: component, ...rest }) => {
    const isCekLogin = true

    // const login = isCekLogin.map((item, index) => {
    //     console.log(item.isAdmin);
    //     // if (item.isAdmin = true) {
    //     //     return isAdmin = true
    //     // }
    // })

    // console.log("ini element ", login)
    return (
        isCekLogin ? <Outlet /> : <Navigate to="/" />
    )
}

export default AdminRoute
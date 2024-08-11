import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from './store'
function Users()
{
    const data=useSelector((state)=>state.usersdata.users)
    const Status =useSelector((state)=>state.usersdata.status)
    const Error=useSelector((state)=>state.usersdata.error)
    const dispatch=useDispatch()
   useEffect(
    ()=>{
        dispatch(fetchdata())
    },[]
   )
   return(
    <>
      <div className="container">
        <h1 className="text-primary text-center m-5">Users Data using Async-Thunk</h1>
        {Error &&  <h2 className="text-danger text-center">{Error}</h2>}
        {Status==="Loading" && <h2 className="text-danger text-center">Fetching Data... Please Wait....</h2>}
        {Status==="Completed" && Error===false && <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Username</th>
                   <th>Phone</th>
                   <th>Website</th>

                </tr>     
            </thead>
            <tbody>
             {
                data.map(
                    (e)=>
                    {
                        return(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.username}</td>
                                <td>{e.phone}</td>
                                <td>{e.website}</td>
                            </tr>
                        )
                    }
                )
             }
            </tbody>
        </table>}
      </div>
    </>
   )
}
export default Users
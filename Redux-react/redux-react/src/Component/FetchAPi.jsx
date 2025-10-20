// #flow=Component file-actions-reducer-dispatch-file -rendering Ui 


import React from 'react'
 import {useDispatch,useSelector} from "react-redux";
 import {fetchAPi} from "../redux/actions"
const FetchAPi = () => {
    const data=useSelector((state=>state.users))
    console.log(data)
    const dispatch = useDispatch();
    const handleAPi=()=>{
        dispatch(fetchAPi());

    }
  return (
    <div>
      <p>FetchAPi</p>
      <button onClick={handleAPi}>Call API</button>
      {data.map((item)=>(
        <>
        <li>{item.name}</li>
        <li>{item.email}</li>
        <li>{item.phone}</li>

        </>
      ))}
    </div>
  )
}

export default FetchAPi
 
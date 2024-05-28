import React from 'react'
import Card from './commonComps/Card'
import { useSelector } from 'react-redux'


const UserDashboard = () => {
  const cardDetails = useSelector((store)=>store.dashboardData.data[0])
  console.log(cardDetails)
  
  return (
    <div>
      <h1 className='text-3xl text-center'>Welcome to Retailer Dashboard</h1>
      <h1>Reports(Today i.e. 01-01-2023)</h1>
      <div className="flex flex-wrap">
      {cardDetails?.map((item,i)=><Card key={item._id} item={item}/>)}
      </div>
    </div>
  )
}

export default UserDashboard
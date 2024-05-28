import React from 'react'
import Table2 from '../UserComponents/Table2'
import SubHeading from '../commonComps/SubHeading'



const MyTeam = () => {
  return (
    <div>
        <SubHeading
        title="My Team"
        sidebutton="Add New Member"
        link="/masterdistributor/addmember"
      />
      <div className='mt-5'>
      <Table2/>
      </div>
    </div>
  )
}

export default MyTeam
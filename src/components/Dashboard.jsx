import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatsGrid />
      <TransactionChart />
    </div>
  )
}

export default Dashboard
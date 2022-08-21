import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className="logo">Nobilitas</span>
        </div>
        <hr />
        <div className='center'>
            <ul>
                <p className='title'>Main</p>
                <li>
                <DashboardIcon className="Icon" />
                    <span>Dashboard</span>
                    </li>
                    <p className='title'>LIST</p>
                <li>
                    <PersonOutlineOutlinedIcon className='Icon' />
                    <span>Users</span>
                    </li>
                <li>
                <StoreMallDirectoryIcon className='Icon' />
                    <span>Product</span>
                    </li>
                <li>
                    <CreditCardIcon className="Icon" />
                    <span>orders</span>
                </li>

                <li>
                    <LocalShippingIcon className='Icon' />
                    <span>Delivery</span>
                </li>

                <p className='title'>USEFUL</p>

                <li>
                <   InsertChartIcon className='Icon' />
                    <span>stats</span>
                </li>

                <li>
                    <NotificationsNoneIcon className='Icon'/>
                    <span>Notifications</span>
                </li>
                    <p className='title'>SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className='Icon' />
                    <span>System health</span>
                </li>

                <li>
                    <PsychologyOutlinedIcon className='Icon' />
                    <span>Logs</span>
                </li>

                <li>
                    <SettingsApplicationsIcon  className='Icon'/>
                    <span>setting</span>
                </li>

                <p className='title'>Main</p>
                <li>
                    <AccountCircleIcon className='Icon' />
                    <span>profile</span>
                </li>

                <li>
                    <ExitToAppIcon className='Icon' />
                    <span>Logout</span>
                </li>

            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar
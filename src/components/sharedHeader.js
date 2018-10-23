import React from 'react'
import './css/SharedHeader.css'

const SharedHeader = ({children}) => (
  <>
	<header className="main-header">
      <div className="main-heading">
        <h1>Roles Based Dashboard</h1>
      </div>
      <a className="community-chat" href="#community">
        <i className={`demoIcon iconChat1`}>&#xe801;</i> Sandbox Community
      </a>
    </header>

    {children}
  </>
)

export default SharedHeader

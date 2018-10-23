import React from 'react'
import profileImage from '../images/profileImage.jpg'
import './css/dropDown.css'

function Profile(props) {
    return (
        <div
            className="dropDown"
            style={{
                visibility: !props.displayToggle ? 'hidden' : 'visible',
                opacity: !props.displayToggle ? '0' : '1',
                transition: 'visibility 0s, opacity 0.5s linear'
            }}
        >
            {(() => {
                switch (props.whichDropDown) {
                    case 'profile':
                        return (
                            <>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <h2 style={{
                                        marginRight: '20px',
                                        marginLeft: '15px'
                                    }}>Hello Chris!</h2>
                                    <img className="pic" src={profileImage} />
                                </div>

                                <ul className="profileDropDown">
                                    <li>Settings</li>
                                    <li>Account</li>
                                    <li>Privacy</li>
                                    <li>Logout</li>
                                </ul>
                            </>
                        )
                    case 'mail':
                        return (
                            <>  
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                <h2>Messages</h2>
                                <h2><span className="unread">3</span> unread</h2>
                                </div>
                                <ul>
                                    <li style={{fontWeight: 'bold'}}>Welcome to Sandvine</li>
                                    <li style={{fontWeight: 'bold'}}>Your ticket #1233</li>
                                    <li style={{fontWeight: 'bold'}}>
                                        Your subscription has been renewed...
                                    </li>
                                    <li>
                                        Usage notice!
                                    </li>
                                    <li>
                                        Special Pricing!
                                    </li>
                                </ul>
                            </>
                        )
                    case 'help':
                        return (
                            <>
                                <h2>Help &amp; Faq</h2>
                                <input
                                    type="text"
                                    style={{
                                        marginTop: '10px',
                                        width: '150px',
                                        fontSize: '16px'
                                    }}
                                    placeholder="Search help"
                                />
                                <a href="#" style={{
                                    padding: '12px',
                                    border: '1px solid #ebeef4',
                                    marginLeft: '-6px',
                                    backgroundColor: '#ebeef4'
                                }}>Search</a>
                            </>
                        )
                    default:
                        return <></>
                }
            })()}
        </div>
    )
}

export default Profile

import { useState } from "react"
import Profile from "./Profile"
import { Link } from "react-router-dom"

export default function Aside({ setCurrentUser, currentUser, handleLogout }) {
    
    return (
        <div className="aside-component">
            <div className="aside-component-wrapper">
                <div className="aside-component-switches">
                    <h5 className={"signup active"}>Your Profile</h5>
                </div>
                <div className="aside-component-content-wrap">
                    <Profile setCurrentUser={setCurrentUser} currentUser={currentUser} />
                </div>
                <div className="aside-footer">
                    <Link className="link-for-logout" to="/">
                        <span className="logout-btn" onClick={handleLogout}>
                            log out
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

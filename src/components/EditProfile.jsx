import { useState } from "react"
import axios from "axios"

export default function EditProfile({ setCurrentUser, currentUser, handleEditPage }) {
    const [ editProfile, setEditProfile ] = useState({
        name: currentUser.name,
        bio: currentUser.bio
    })
    const [formImg, setFormImg] = useState("")

    const handleSaveImg = async (e) => {
        e.preventDefault() 
        console.log(editProfile)
        const token = localStorage.getItem('jwt')
        const options = {
            headers: {
              'Authorization': token
            },
            new : true
        }
        try {
            const fd = new FormData()
            fd.append("image", formImg)
            // axios call to get and update the current users profile-img
            const uploadedImage = await axios.put(
                `${process.env.REACT_APP_SERVER_URL}/api-v1/images`,
                fd, options
            )
            setCurrentUser({
                id: currentUser.id,
                name: currentUser.name,
                email: currentUser.email,
                iat: currentUser.iat,
                exp: currentUser.exp,
                avatar: uploadedImage.data.cloudImage
            })
        } catch (err) {
            console.log(err)
        }
    }



    // const handleSaveText = async (e) => {
    //     e.preventDefault() 
    //     const token = localStorage.getItem('jwt')
    //     const options = {
    //         headers: {
    //           'Authorization': token
    //         },
    //         new : true
    //     }
    //     try {
    //         // axios call to get and update the current users profile-img
    //         const uploadedImage = await axios.put(
    //             `${process.env.REACT_APP_SERVER_URL}/api-v1/profile/${currentUser.id}`,
    //             editProfile, options
    //         )
    //         setCurrentUser({
    //             id: currentUser.id,
    //             name: editProfile.name,
    //             email: currentUser.email,
    //             iat: currentUser.iat,
    //             exp: currentUser.exp,
    //             bio: editProfile.bio,
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    
    return (
        <>
            <div className="aside-profile-wrapper">
                <div className="go-back-btn" onClick={handleEditPage}>
                    <img
                        className="go-back-img"
                        src="arrow-left.svg"
                        alt="arrow left"
                        />
                </div>
                <div>
                    <img
                        className="profile-img"
                        src={currentUser.avatar}
                        alt=""
                        />
                </div>
                <div className="user-details-wrapper-profile">
                    <div className="login-form-email">
                        <form>
                                <label className="label" htmlFor="image-upload">
                                    Change Avatar
                                </label>
                                <input
                                    type="file"
                                    src=""
                                    alt=""
                                    id="image-upload"
                                    name="image"
                                    onChange={(e) =>
                                        setFormImg(e.target.files[0])
                                    }
                                    />

                                <div className="edit-profile-btn-wrapper">
                                    <button
                                        onClick={handleSaveImg}
                                        className="edit-profile-btn"
                                        >
                                            Save
                                    </button>
                                </div>
                        </form>
                        {/* <form>
                                <label
                                    className="label"
                                    htmlFor="username"
                                    ></label>
                                <input 
                                    className="name-text-input"
                                    type="text"
                                    value={editProfile.name} 
                                    onChange={e => setEditProfile({...editProfile, name: e.target.value})}
                                />
                           

                            <div className="user-bio-wrapper">
                                <label 
                                    className="label"  
                                    htmlFor="bio"
                                    ></label>
                                <input 
                                    className="bio-text-input" 
                                    type="text" 
                                    value={editProfile.bio} 
                                    onChange={e => setEditProfile({...editProfile, bio: e.target.value})}
                                />
                            </div>

                            <div className="edit-profile-btn-wrapper">
                                <button
                                    onClick={handleSaveText}
                                    className="edit-profile-btn"
                                >
                                    Save
                                </button>
                            </div>
                        </form> */}
                    </div>
                    <div className="followers-wrapper">
                        {/* <div className='followers'>Rooms: 1000</div>
          <div className='followers'>Fallowers: 1000</div>
          <div className='following'>Fallowing: 1000</div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

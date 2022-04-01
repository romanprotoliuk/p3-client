import { useState } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { Navigate, useNavigate } from "react-router-dom"

export default function Register({ currentUser, setCurrentUser }) {
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
        passwordConfirmation: "",
    })
    const [msg, setMsg] = useState("")

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (form.password === form.passwordConfirmation) {
                // remove unneeded data in the form pre-request
                delete form.passwordConfirmation
                // do the axios since the passwords match
                const response = await axios.post(
                    `${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`,
                    form
                )
                // get the token from the response
                const { token } = response.data
                // set the token in local storage
                localStorage.setItem("jwt", token)
                // decode the token
                const decoded = jwt_decode(token)
                // log the user in
                setCurrentUser(decoded)
                navigate("/timeline", { replace: true })
            } else {
                setMsg("the two passwords you entered do not match 🥴")
            }
        } catch (err) {
            if (err.response.status === 409) {
                setMsg(err.response.data.msg)
            } else {
                console.log(err)
            }
        }
    }

    // navigate away if the user logs in
    if (currentUser) return <Navigate to="/profile" />

    return (
        <div className="register-form-wrapper">
            <p>{msg}</p>

            <form onSubmit={handleSubmit}>
                <div className="login-form-email">
                    <label className="label" htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        placeholder="enter your email..."
                    />
                </div>
                <div className="login-form-email">
                    <label className="label" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="enter-your-name"
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        placeholder="enter your name..."
                    />
                </div>

                <div className="login-form-email">
                    <label className="label" htmlFor="bio">
                        Your bio:
                    </label>
                    <input
                        className="enter-your-name"
                        type="text"
                        id="bio"
                        value={form.bio}
                        onChange={(e) =>
                            setForm({ ...form, bio: e.target.value })
                        }
                        placeholder="Short bio..."
                    />
                </div>

                <div className="login-form-email">
                    <label className="label" htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        placeholder="enter your password..."
                    />
                </div>

                <div className="login-form-email">
                    <label className="label" htmlFor="passwordConfirmation">
                        Confirmation:
                    </label>
                    <input
                        type="password"
                        id="passwordConfirmation"
                        value={form.passwordConfirmation}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                passwordConfirmation: e.target.value,
                            })
                        }
                        placeholder="enter your confirmation..."
                    />
                </div>

                <input className="register-btn" type="submit" />
            </form>
        </div>
    )
}

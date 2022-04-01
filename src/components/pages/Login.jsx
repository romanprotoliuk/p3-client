import { useState } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"

export default function Login({ currentUser, setCurrentUser }) {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const [msg, setMessage] = useState("")
    const [passShown, setPassShown] = useState(false)

    const togglePassword = () =>{
        setPassShown(!passShown)
    }

    let navigate = useNavigate()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`,
                form
            )
            const { token } = response.data
            const decoded = jwt_decode(token)
            localStorage.setItem("jwt", token)
            setCurrentUser(decoded)
            // Set a new state for avatar image

            navigate("/timeline", { replace: true })
        } catch (err) {
            if (err.response.status === 400) {
                console.log(err.response.data)
                setMessage(err.response.data.msg)
            }
            console.log(err)
        }
    }

    return (
        <div className="login-form-wrapper">
            <p>{msg ? `the server has a message for you: ${msg}` : ""}</p>
            <form onSubmit={handleFormSubmit}>
                <div className="login-form-email">
                    <label className="label" htmlFor="email">
                        Email:
                    </label>
                    <input
                        id="email"
                        placeholder="user@domain.com"
                        type="email"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        value={form.email}
                    />
                </div>

                <div className="login-form-password">
                    <label className="label" htmlFor="password">
                        Password:
                    </label>
                    <input
                        id="password"
                        type={passShown ? "text" : "password"}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        value={form.password}
                    />
                    <div onClick={togglePassword}><img className="eye-password-icon" src="eye.png" alt="" /></div>
                </div>

                <input className="submit-btn" type="submit" />
            </form>
        </div>
    )
}

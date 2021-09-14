import React, { useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react'

function Login() {
    const auth = useContext(AuthContext)
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    function handleChange(ev) {
        setData({
            ...data,
            [ev.target.name]: ev.target.value
        })
    }
    function handleSubmit(ev) {
        ev.preventDefault()
        auth.login(data.email, data.password)
    }


/* module.exports.get = (req, res, next) => {
    return Property.find({ owner: req.user.id })
                .then(properties => res.status(200).json({
                    profile: req.user,
                    properties
                }))
}

 */
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={data.email} />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input name="password"
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        value={data.password} />
                </div>

                <button type="submit" className="btn btn-primary">Acept and Continue</button>
            </form>
        </div>
    )
}

export default Login
import React, { useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react'
import './Login.css'
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
        <div id="login">
            <h1>Welcome to SaSoMo</h1>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={data.email} />
                </div>

                <div className="mb-3">
                    <input name="password"
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        value={data.password} />
                </div>

                <button type="submit" className="btn btn-primary">Sign UP</button>
            </form>
        </div>
    )
}

export default Login



{/* <div className="row row-cols-3">
      <div className="col mx-auto">
        <form className="mt-3 mb-3" onSubmit={handleSubmit(onLoginFormSubmit)}>

          <div className="input-group mb-2">
            <span className="input-group-text"><i className="fa fa-envelope fa-fw"></i></span>
            <input type="email" {...register("email", { required: 'Email is required' })}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="user@example.org" />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text"><i className="fa fa-lock fa-fw"></i></span>
            <input type="password" {...register("password", { required: 'Password is required' })}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Password" />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit" disabled={Object.keys(errors).length !== 0}>Login</button>
            <hr />
            <a href={`${process.env.REACT_APP_API_BASE_URL}/authenticate/google`} className="btn btn-danger" role="button"><i className="fa fa-google" /> Login with Google</a>
            <Link to="/signup" className="btn btn-secondary" role="button">Sign Up</Link>
          </div>

        </form>
      </div>
    </div> */}
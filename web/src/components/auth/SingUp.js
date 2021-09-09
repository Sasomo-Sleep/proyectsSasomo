import { useHistory } from 'react-router'
import service from '../../services/sasomo-service';

function SignUp() {
    const history = useHistory()

    function handleSubmit(ev) {
        ev.preventDefault()

        service.signUp({
            name: ev.target.name.value,
            email: ev.target.email.value,
            password: ev.target.password.value
        })
            .then(() => history.push('/login'))
            .catch(err => console.error(err.response.data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name="name" type="text" className="form-control" aria-describedby="emailHelp" />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" aria-describedby="emailHelp" />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input name="password" type="password" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Acept and Continue</button>
            </form>
        </div>
    )
}

export default SignUp
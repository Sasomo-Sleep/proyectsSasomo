/* import React from 'react';

const Fake = () => {
    return (
        <div className="col mx-auto">
            <div className="col mx-auto">
                <form className="mt-3 mb-3" onSubmit={handleSubmit}>
                    <input name="password" type="password"
                        className="form-control"
                        onChange={handleChange}
                        value={data.password} />
                </form>
            </div>
        </div>
    );
};

export default Fake;


<div className="row row-cols-3">
      <div className="col mx-auto">
        <form className="mt-3 mb-3" onSubmit={handleSubmit(onLoginFormSubmit)}>

          <div className="input-group mb-2">
            <span className="input-group-text"><i className="fa fa-envelope fa-fw"></i></span>
            <input name="password" type="password"
                        className="form-control"
                        onChange={handleChange}
                        value={data.password} />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text"><i className="fa fa-lock fa-fw"></i></span>
            <input name="password"
                        type="password"
                        className="form-control"
                        onChange={handleChange}
                        value={data.password} />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit" disabled={Object.keys(errors).length !== 0}>Login</button>
            <hr />
            <a href={`${process.env.REACT_APP_API_BASE_URL}/authenticate/google`} className="btn btn-danger" role="button"><i className="fa fa-google" /> Login with Google</a>
            <Link to="/signup" className="btn btn-secondary" role="button">Sign Up</Link>
          </div>

        </form>
      </div>
    </div> */
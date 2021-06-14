// Use destructuration instead of classical props syntax for the parameters of the function
const LoginForm = ({
    handleSubmit, 
    email, 
    setEmail, 
    password, 
    setPassword,
}) => (
    <form onSubmit={handleSubmit} className="mt-3">
            

            <div className="form-group mb-3">
                <div className="form-label">
                    <label>Your email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            <div className="form-group mb-3">
                <div className="form-label">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <button
                disabled={!email || !password} 
                className="btn btn-primary">Submit
            </button>
        </form>
)

export default LoginForm;
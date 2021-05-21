// Use destructuration instead of classical props syntax for the parameters of the function
const RegisterForm = ({
    handleSubmit, 
    name, 
    setName, 
    email, 
    setEmail, 
    password, 
    setPassword,
}) => (
    <form onSubmit={handleSubmit} className="mt-3">
            <div className="form-group mb-3">
                <div className="form-label">
                    <label>Your name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>

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

            <button className="btn btn-primary">Submit</button>

        </form>
)

export default RegisterForm;
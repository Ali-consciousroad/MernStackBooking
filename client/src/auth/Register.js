import {useState} from 'react'

// Set state by using callback functions and hook (functions)
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 

    // Event hander
    const handleSubmit = (e) => {
        e.preventDefault();
        console.table({ name, email, password });
    };

    const registerForm = () => (
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
        );

    return(
        <div>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Register</h1>                
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        {registerForm()}
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Register;

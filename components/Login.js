import { useMoralis } from 'react-moralis'




function Login() {
    const { authenticate, login } = useMoralis();
    return (
        <div>
            <div>This is the Login page!</div>
            <hr/>
            <button type="button" onClick={authenticate}>Login into Metaverse</button>
        </div>
    )
}

export default Login

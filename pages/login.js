import { authenticated, login } from 'react-moralis'

function Login() {
    return (
        <div>
            <button type="button" onClick={authenticated}>Login into Metaverse</button>
        </div>
    )
}

export default Login

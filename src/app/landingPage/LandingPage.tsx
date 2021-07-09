import { useHistory } from "react-router-dom";

const LandingPage = () => {
    const history = useHistory();
    return (
        <div>
            Landing page
            <br />
            <button onClick={() => { history.push('/login') }}>Login</button>
            <button onClick={() => { history.push('/portal/dashboard') }}>My Triage</button>
        </div>
    )
}

export default LandingPage;
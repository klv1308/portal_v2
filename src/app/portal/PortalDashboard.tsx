import { useHistory } from "react-router-dom";

const PortalDashboard = () => {
    const history = useHistory();
    return (
        <div>
            My Triage
            <br />            
            <button onClick={() => { history.push('/conveymap') }}>Conveymap</button>
            <button onClick={() => { history.push('/verify') }}>Verify</button>
            <button onClick={() => { history.push('/rol') }}>RoL</button>
        </div>
    )
}

export default PortalDashboard;
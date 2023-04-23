import { Routes as Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './Dashboard'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Switch>
    )
}

export default Routes
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {

    const isAuthenticated = false

    if (!isAuthenticated) {
        return <AppRoutes />
    } else {
        return <AuthRoutes />
    }
}
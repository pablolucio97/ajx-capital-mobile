import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {

    const isAuthenticated = true

    if (!isAuthenticated) {
        return <AppRoutes />
    } else {
        return <AuthRoutes />
    }
}
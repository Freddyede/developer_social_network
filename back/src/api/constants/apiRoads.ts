export const apiRoads = {
    notAuthenticated: [
        {
            description: 'Create new user',
            uri: '/register'
        },
        {
            description: 'Create new express-session',
            uri: '/login'
        }
    ],
    authenticated: [
        {
            description: 'Get all users of applications',
            uri: '/api/users'
        }
    ]
};
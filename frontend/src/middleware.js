import { NextResponse } from 'next/server'
import { getAccessToken } from './lib/actions'; // getAccessToken is a user defined function which returns aceess token

export async function middleware(request) {
    try {
        console.log('Hello middlewares ============');
        const isAuthenticated = await getAccessToken();

        if (isAuthenticated) {
            // Redirect logged-in users from the '/login' or '/signup' page to '/me'
            if (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup')) {
                console.log('Redirecting authenticated user to /me');
                return NextResponse.redirect(new URL('/', request.url));
            }
            // Allow access to '/me' routes for authenticated users
            return NextResponse.next();
        } else {
            // Allow access to the signup page for unauthenticated users
            if (request.nextUrl.pathname.startsWith('/signup')) {
                console.log('Allowing unauthenticated user to /signup');
                return NextResponse.next();
            }
            // Redirect unauthenticated users to the login page
            if (!request.nextUrl.pathname.startsWith('/login')) {
                console.log('Redirecting unauthenticated user to /login');
                return NextResponse.redirect(new URL('/login', request.url));
            }
            // Allow access to the login page
            return NextResponse.next();
        }
    } catch (error) {
        console.error('Error in authentication middleware:', error);
        // Handle error gracefully
        return NextResponse.error();
    }
}

// Protected routes 
export const config = {
    matcher: ['/me', '/login', '/signup']
};

// export const config = {
//     matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
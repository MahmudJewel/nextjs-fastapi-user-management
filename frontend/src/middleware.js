import { NextResponse } from 'next/server'
import { getAccessToken } from './lib/actions';


export async function middleware(request) {
    console.log('Hello middlewares ============');
    const user = await getAccessToken();
    // if logged in, he can access '/me' routes
    if (user) {
        return NextResponse.next()
    }
    // if not logged in, he can redirect '/login' page
    return NextResponse.redirect(new URL('/login', request.url))
}

// protecting the routes 
export const config = {
    matcher: ['/me'],
}

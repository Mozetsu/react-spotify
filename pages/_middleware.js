import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
	// Token will exist if user is logged in
	const token = await getToken({ req, secret: process.env.JWT_SECRET });

	const { pathname } = req.nextUrl;

	// Allow the requests if the following is true
	// 1) It's a request for next-auth session
	// 2) The token exists and is not fetching /login page
	if (pathname.includes('/api/auth') || (token && pathname !== '/login')) {
		return NextResponse.next();
	}

	// Redirect user to login page if they request a protected route
	// without a valid token
	if (!token && pathname !== '/login') {
		return NextResponse.redirect('/login');
	}

	// Redirect user to main page if trying to
	// Access /login with a valid token
	if (token && pathname === '/login') {
		return NextResponse.redirect('/');
	}
}

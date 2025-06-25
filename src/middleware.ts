import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //Для примера проверки токена
  /*  if(!token && request.nextUrl.pathname.startsWith('/profile')){
    return NextResponse.redirect(new URL('/login', request.url))
  } */
  console.log("Something do before page loading");
  return NextResponse.next();
}

//Для каких урлов делать проверку в middleware
export const config = {
  matcher: ["/profile-fake/:path*"],
};

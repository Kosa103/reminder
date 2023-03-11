import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTES } from './utils/routes';

export const middleware = (request: NextRequest) => {
  const url = request.nextUrl.clone();

  if (url.pathname === ROUTES.ROOT) {
    url.pathname = ROUTES.SIGN_IN;

    return NextResponse.redirect(url);
  }
};

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PATHS } from '@/common/utils/paths';

export const middleware = (request: NextRequest) => {
  const url = request.nextUrl.clone();

  if (url.pathname === PATHS.ROOT) {
    url.pathname = PATHS.SIGN_IN;

    return NextResponse.redirect(url);
  }
};

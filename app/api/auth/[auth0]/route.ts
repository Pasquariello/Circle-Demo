import { getCirleJWT } from '@/app/lib/actions';
import {
    handleAuth,
    handleCallback,
    AppRouteHandlerFnContext,
    Session,
    getSession,
    AfterCallbackAppRoute
  } from '@auth0/nextjs-auth0';
  import { NextRequest, NextResponse } from 'next/server';
  
  const afterCallback: AfterCallbackAppRoute = (req: NextRequest, session: Session) => {
    if (session.user) {
      return session;
    }
  };
  
  export const GET = handleAuth({
    async callback(req: NextRequest, ctx: AppRouteHandlerFnContext) {
      const res = (await handleCallback(req, ctx, { afterCallback })) as NextResponse;
      const session = await getSession(req, res);
      if (session) {
        await getCirleJWT(session.user.email);

        return NextResponse.redirect(`${process.env.AUTH0_BASE_URL}/dashboard`, res);
      } else {
        return NextResponse.redirect(`${process.env.AUTH0_BASE_URL}/fail`, res);
      }
    },
    onError(req: Request, error: Error) {
      console.error(error);
    }
  });
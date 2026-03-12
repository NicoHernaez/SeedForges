import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (password === process.env.INVESTOR_PASSWORD) {
      const response = NextResponse.json({ success: true });

      response.cookies.set('sf-investor-auth', 'authenticated', {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24, // 24 hours
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });

      return response;
    }

    return NextResponse.json(
      { error: 'Contrasena incorrecta' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Error en la solicitud' },
      { status: 400 }
    );
  }
}

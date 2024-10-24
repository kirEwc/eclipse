'use server'

import { cookies } from 'next/headers';

export async function setAuthCookie(token: string, role: string) {
  console.log('token: ', token);


  const maxAge = 60 * 60 * 24 * 365 

  await cookies().set('auth-token', token, {
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
    maxAge: maxAge,  // Expiración en 1 año
  });

  await cookies().set('user-role', role, {
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
    maxAge: maxAge,  // Expiración en 1 año
  });
}

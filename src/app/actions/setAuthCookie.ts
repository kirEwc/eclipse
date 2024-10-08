'use server'

import { cookies } from 'next/headers';

export async function setAuthCookie(token: string, role: string) {
console.log('token: ',token)

  await cookies().set('auth-token', token, {
    secure: true,
    httpOnly: true,
    sameSite: 'lax',  
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) 
  });

  await cookies().set('user-role', role, {
    secure: true,
    httpOnly: true,
    sameSite: 'lax', 
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
  });
}

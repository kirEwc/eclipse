'use server'

import { cookies } from 'next/headers';

export async function setAuthCookie(token: string, role: string) {
console.log('token: ',token)

  await cookies().set('auth-token', token, {
    secure: true,
    httpOnly: true,
    sameSite: 'lax',  

  });

  await cookies().set('user-role', role, {
    secure: true,
    httpOnly: true,
    sameSite: 'lax', 
 
  });
}

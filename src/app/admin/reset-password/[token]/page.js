'use client';

import ResetPasswordForm from "./resetPass";


export default function Page({ params, searchParams }) {
  const { token } = params;
  return <ResetPasswordForm token={token} />;
}

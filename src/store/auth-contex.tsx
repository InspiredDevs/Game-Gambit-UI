"use client";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";

import React, { createContext, useEffect } from "react";

const Context = createContext({});
const { Provider } = Context;

const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL;

if (!LOGIN_URL) {
  // throw new Error("add LOGIN_URL to your env file");
}

const onboardingRoute = "/onboarding";
const user = false;
const loading = false;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      router.push("/");
      return;
    }
  }, [loading, user]);

  if (loading)
    return (
      <div className='w-screen h-screen grid place-items-center'>
        <div className='flex flex-col items-center space-y-2'>
          <Image
            src={"/svg/logo.svg"}
            width={20}
            height={20}
            alt='logo'
            className='w-8 h-8'
            priority
          />{" "}
          <p className='animate-pulse text-sm'>Authenticating..</p>
        </div>
      </div>
    );

  if (!user) {
    router.push("/");
    return null;
  }

  return <Provider value={{}}>{children}</Provider>;
};

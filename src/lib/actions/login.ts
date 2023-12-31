'use server';

import { createClient } from "@/utils/supabase/server";
import { AuthError } from "@supabase/supabase-js";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {

    const origin = headers().get('origin');
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

  if (error) {
    console.error(error);
    if (error instanceof AuthError) {
      return redirect(`/?msg=${error.message}`)
    }
    return redirect('/?msg=Signup failed. Please double-check your information and try again.')
    }

  if (data.user && data.user.id) {
    return redirect('/?msg=Signup successful! Please check your inbox to confirm.')
  }
};

export  const signIn = async (prevState: any, formData: FormData) => {

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    console.error(error)
    if (error instanceof AuthError) {
      return {msg: error.message}
    }
    return {msg: 'Sign-in failed. Please check your credentials and try again.'}
    }

  if (data.user && data.user.id) {

    return {msg: 'Welcome back! You\'ve successfully signed in.'}
  }
  };

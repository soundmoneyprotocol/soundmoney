import { createClient } from "supabase";

export const supabaseClient = createClient(
  Deno.env.get("NFT_360_SUPABASE_URL") ?? "",
  Deno.env.get("NFT_360_SUPABASE_ANON_KEY") ?? "",
);

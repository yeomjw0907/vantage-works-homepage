import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url) throw new Error("Missing env: NEXT_PUBLIC_SUPABASE_URL");
  if (!anonKey) throw new Error("Missing env: NEXT_PUBLIC_SUPABASE_ANON_KEY");

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookies().getAll();
      }
    }
  });
}

export async function requireAdmin() {
  const supabase = createSupabaseServerClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData?.user) {
    return { isAdmin: false, reason: "not_authenticated" as const };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("user_id", userData.user.id)
    .maybeSingle();

  if (profileError) {
    return { isAdmin: false, reason: "profile_lookup_failed" as const };
  }

  if (profile?.role !== "admin") {
    return { isAdmin: false, reason: "not_admin" as const };
  }

  return { isAdmin: true as const, userId: userData.user.id };
}

export function createSupabaseStorageAdminClient() {
  // Storage 업로드에 서버 서비스 키를 사용(대신 requireAdmin으로 접근을 제한)
  return createSupabaseAdminClient();
}


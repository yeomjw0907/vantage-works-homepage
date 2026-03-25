"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const client = createSupabaseBrowserClient();
      if (!client) {
        setError("Supabase 환경변수가 설정되지 않았습니다.");
        return;
      }

      const { error } = await client.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      router.push("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "로그인 실패");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-10">
      <Card className="w-full p-6 md:p-10">
        <div className="text-2xl font-bold tracking-tight text-slate-900">Admin 로그인</div>
        <div className="mt-3 text-sm leading-6 text-slate-600">
          이메일/비밀번호로 로그인한 뒤 관리자만 업로드/관리할 수 있습니다.
        </div>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error ? (
            <div className="rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">{error}</div>
          ) : null}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "로그인 중..." : "로그인"}
          </Button>
          <div className="text-xs text-slate-500">
            * Admin 권한은 Supabase `profiles.role='admin'`로 관리합니다.
          </div>
        </form>
      </Card>
    </div>
  );
}


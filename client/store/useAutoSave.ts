// hooks/useAutoSave.ts
import { useEffect, useRef } from "react";
import { useResume } from "@/store/useResume";
import { useTabSwitch } from "@/store/useTabSwitch";

export function useAutoSave(delayMs = 1500) {
  const data = useResume((s) => s.data);
  const template = useResume((s) => s.template);
  // order from your sidebar store (works whether you store `tabs` or `reorderable`+fixed)
  const tabs = (useTabSwitch as any)((s: any) => s.tabs ?? s.reorderable);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const payload = {
        data,
        template,
        order: tabs?.map((t: any) => t.slug) ?? [],
        savedAt: new Date().toISOString(),
      };

      // 🔹 Fake DB write for now
      localStorage.setItem("resume-snapshot", JSON.stringify(payload));

      // 🔹 Later: call your API here
      // fetch("/api/resume", { method: "POST", body: JSON.stringify(payload) })
    }, delayMs);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [data, template, tabs, delayMs]);
}

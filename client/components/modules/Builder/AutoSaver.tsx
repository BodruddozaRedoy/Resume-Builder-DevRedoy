// components/AutoSaver.tsx
"use client";

import { useAutoSave } from "@/store/useAutoSave";

export default function AutoSaver() {
  useAutoSave(1500);
  return null;
}

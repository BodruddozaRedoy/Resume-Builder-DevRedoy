"use client";
import { Button } from "@/components/ui/button";
import { useTabSwitch, fixedTabs } from "@/store/useTabSwitch";
import {
  User,
  Mail,
  FileText,
  Wrench,
  Briefcase,
  GraduationCap,
  BookOpen,
  Users,
  Globe,
  Heart,
  Link,
  Menu,
} from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, any> = {
  User,
  Mail,
  FileText,
  Wrench,
  Briefcase,
  GraduationCap,
  BookOpen,
  Users,
  Globe,
  Heart,
  Link,
};

export default function LeftSideBar() {
  const { active, setActive, reorderable, setReorderable } = useTabSwitch();
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => setDragIndex(index);

  const handleDrop = (index: number) => {
    if (dragIndex === null || dragIndex === index) return;

    const updated = [...reorderable];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(index, 0, moved);

    // reassign IDs after the fixed 3
    const reindexed = updated.map((t, i) => ({ ...t, id: i + fixedTabs.length + 1 }));

    setReorderable(reindexed);
    setDragIndex(null);
  };

  return (
    <div className="flex flex-col gap-3 bg-background shadow-lg p-5 rounded-lg">
      {/* 🔹 Fixed tabs (never move) */}
      {fixedTabs.map((tab) => {
        const Icon = iconMap[tab.icon];
        return (
          <div key={tab.id} className="flex gap-2 items-center">
            <Button
              className="flex-1 flex justify-between items-center"
              variant={active === tab.slug ? "default" : "outline"}
              onClick={() => setActive(tab.slug)}
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4" />}
                {tab.title}
              </div>
            </Button>
          </div>
        );
      })}

      {/* 🔹 Reorderable tabs */}
      {reorderable.map((tab, index) => {
        const Icon = iconMap[tab.icon];
        return (
          <div
            key={tab.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            className="flex gap-2 items-center"
          >
            <Button
              className="flex-1 flex justify-between items-center"
              variant={active === tab.slug ? "default" : "outline"}
              onClick={() => setActive(tab.slug)}
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4" />}
                {tab.title}
              </div>
              <Menu className="w-4 h-4 cursor-grab" />
            </Button>
          </div>
        );
      })}
    </div>
  );
}

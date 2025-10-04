"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, PlusCircle, X } from "lucide-react";
import { useState } from "react";

interface LanguageItem {
  id: number;
  language: string;
  proficiency: "Novice (A1-A2)" | "Proficient (B1-B2)" | "Highly proficient (C1-C2)" | "Native" | "";
}

export const Languages = () => {
  const [languages, setLanguages] = useState<LanguageItem[]>([]);
  const [form, setForm] = useState<LanguageItem>({
    id: Date.now(),
    language: "",
    proficiency: "",
  });

  const [editId, setEditId] = useState<number | null>(null);

  // 🔹 Handle form change
  const handleChange = (field: keyof LanguageItem, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // 🔹 Add new
  const handleAdd = () => {
    if (!form.language) return;
    setLanguages((prev) => [...prev, { ...form, id: Date.now() }]);
    resetForm();
  };

  // 🔹 Edit existing
  const handleEdit = (item: LanguageItem) => {
    setForm(item);
    setEditId(item.id);
  };

  // 🔹 Update existing
  const handleUpdate = () => {
    setLanguages((prev) =>
      prev.map((item) => (item.id === editId ? { ...form, id: editId! } : item))
    );
    resetForm();
    setEditId(null);
  };

  // 🔹 Delete
  const handleDelete = (id: number) => {
    setLanguages((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔹 Reset form
  const resetForm = () => {
    setForm({
      id: Date.now(),
      language: "",
      proficiency: "",
    });
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Languages</h1>
      <p className="mb-3 text-muted-foreground">
        Add languages you know and your level of proficiency.
      </p>

      {/* Form */}
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label>Language Name</Label>
          <Input
            value={form.language}
            onChange={(e) => handleChange("language", e.target.value)}
            type="text"
            placeholder="e.g. English"
            className="mt-2"
          />
        </div>
        <div>
          <Label>Proficiency</Label>
          <select
            value={form.proficiency}
            onChange={(e) => handleChange("proficiency", e.target.value as LanguageItem["proficiency"])}
            className="mt-2 w-full rounded border px-2 py-2 text-sm"
          >
            <option value="">Select proficiency</option>
            <option value="Novice (A1-A2)">Novice (A1-A2)</option>
            <option value="Proficient (B1-B2)">Proficient (B1-B2)</option>
            <option value="Highly proficient (C1-C2)">Highly proficient (C1-C2)</option>
            <option value="Native">Native</option>
          </select>
        </div>
      </div>

      {editId ? (
        <Button onClick={handleUpdate} className="mt-3 w-full">
          <Pencil /> Update Language
        </Button>
      ) : (
        <Button onClick={handleAdd} className="mt-3 w-full">
          <PlusCircle /> Add Language
        </Button>
      )}

      {/* List */}
      <div className="mt-6 space-y-3">
        {languages.map((item) => (
          <div
            key={item.id}
            className="p-3 border rounded flex justify-between items-start"
          >
            <div>
              <p className="font-semibold">{item.language}</p>
              <p className="text-sm text-muted-foreground">{item.proficiency}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleEdit(item)}
              >
                <Pencil size={16} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(item.id)}
              >
                <X size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

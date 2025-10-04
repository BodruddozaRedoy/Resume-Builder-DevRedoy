"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReferenceItem } from "@/types/resume.types";
import { Pencil, PlusCircle, X } from "lucide-react";
import { useState } from "react";


export const References = () => {
  const [references, setReferences] = useState<ReferenceItem[]>([]);
  const [form, setForm] = useState<ReferenceItem>({
    id: Date.now(),
    referentName: "",
    referentCompany: "",
    referentEmail: "",
    referentPhone: "",
  });

  const [editId, setEditId] = useState<number | null>(null);

  // 🔹 Handle form change
  const handleChange = (field: keyof ReferenceItem, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // 🔹 Add new
  const handleAdd = () => {
    if (!form.referentName || !form.referentCompany) return;
    setReferences((prev) => [...prev, { ...form, id: Date.now() }]);
    resetForm();
  };

  // 🔹 Edit existing
  const handleEdit = (item: ReferenceItem) => {
    setForm(item);
    setEditId(item.id);
  };

  // 🔹 Update existing
  const handleUpdate = () => {
    setReferences((prev) =>
      prev.map((item) => (item.id === editId ? { ...form, id: editId! } : item))
    );
    resetForm();
    setEditId(null);
  };

  // 🔹 Delete
  const handleDelete = (id: number) => {
    setReferences((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔹 Reset form
  const resetForm = () => {
    setForm({
      id: Date.now(),
      referentName: "",
      referentCompany: "",
      referentEmail: "",
      referentPhone: "",
    });
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">References</h1>
      <p className="mb-3 text-muted-foreground">
        Add references from past employers, colleagues, or mentors who can vouch
        for your experience.
      </p>

      {/* Form */}
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label>Referent Name</Label>
          <Input
            value={form.referentName}
            onChange={(e) => handleChange("referentName", e.target.value)}
            type="text"
            placeholder="John Doe"
            className="mt-2"
          />
        </div>
        <div>
          <Label>Referent Company</Label>
          <Input
            value={form.referentCompany}
            onChange={(e) => handleChange("referentCompany", e.target.value)}
            type="text"
            placeholder="Acme Corp"
            className="mt-2"
          />
        </div>
        <div>
          <Label>Referent Email</Label>
          <Input
            value={form.referentEmail}
            onChange={(e) => handleChange("referentEmail", e.target.value)}
            type="email"
            placeholder="john@example.com"
            className="mt-2"
          />
        </div>
        <div>
          <Label>Referent Phone</Label>
          <Input
            value={form.referentPhone}
            onChange={(e) => handleChange("referentPhone", e.target.value)}
            type="tel"
            placeholder="+1 555 123 4567"
            className="mt-2"
          />
        </div>
      </div>

      {editId ? (
        <Button onClick={handleUpdate} className="mt-3 w-full">
          <Pencil /> Update Reference
        </Button>
      ) : (
        <Button onClick={handleAdd} className="mt-3 w-full">
          <PlusCircle /> Add Reference
        </Button>
      )}

      {/* List */}
      <div className="mt-6 space-y-3">
        {references.map((item) => (
          <div
            key={item.id}
            className="p-3 border rounded flex justify-between items-start"
          >
            <div>
              <p className="font-semibold">{item.referentName}</p>
              <p className="text-sm text-muted-foreground">
                {item.referentCompany}
              </p>
              <p className="text-xs text-gray-500">{item.referentEmail}</p>
              <p className="text-xs text-gray-500">{item.referentPhone}</p>
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

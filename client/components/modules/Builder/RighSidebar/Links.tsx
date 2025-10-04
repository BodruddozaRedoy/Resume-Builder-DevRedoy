"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LinkItem } from "@/types/resume.types";
import { Pencil, PlusCircle, X, Link2 } from "lucide-react";
import { useState } from "react";



export const Links = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [form, setForm] = useState<LinkItem>({
    id: Date.now(),
    title: "",
    url: "",
  });

  const [editId, setEditId] = useState<number | null>(null);

  // 🔹 Handle form change
  const handleChange = (field: keyof LinkItem, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // 🔹 Add new
  const handleAdd = () => {
    if (!form.title || !form.url) return;
    setLinks((prev) => [...prev, { ...form, id: Date.now() }]);
    resetForm();
  };

  // 🔹 Edit existing
  const handleEdit = (item: LinkItem) => {
    setForm(item);
    setEditId(item.id);
  };

  // 🔹 Update existing
  const handleUpdate = () => {
    setLinks((prev) =>
      prev.map((item) => (item.id === editId ? { ...form, id: editId! } : item))
    );
    resetForm();
    setEditId(null);
  };

  // 🔹 Delete
  const handleDelete = (id: number) => {
    setLinks((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔹 Reset form
  const resetForm = () => {
    setForm({
      id: Date.now(),
      title: "",
      url: "",
    });
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Links</h1>
      <p className="mb-3 text-muted-foreground">
        Add relevant links like portfolio, GitHub, LinkedIn, or personal
        website.
      </p>

      {/* Form */}
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label>Link Title</Label>
          <Input
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            type="text"
            placeholder="e.g. GitHub"
            className="mt-2"
          />
        </div>
        <div>
          <Label>Link URL</Label>
          <Input
            value={form.url}
            onChange={(e) => handleChange("url", e.target.value)}
            type="url"
            placeholder="https://github.com/username"
            className="mt-2"
          />
        </div>
      </div>

      {editId ? (
        <Button onClick={handleUpdate} className="mt-3 w-full">
          <Pencil /> Update Link
        </Button>
      ) : (
        <Button onClick={handleAdd} className="mt-3 w-full">
          <PlusCircle /> Add Link
        </Button>
      )}

      {/* List */}
      <div className="mt-6 space-y-3">
        {links.map((item) => (
          <div
            key={item.id}
            className="p-3 border rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold flex items-center gap-2">
                <Link2 size={16} /> {item.title}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 underline"
              >
                {item.url}
              </a>
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

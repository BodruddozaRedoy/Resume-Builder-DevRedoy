"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, PlusCircle, X } from "lucide-react";
import { useState } from "react";

interface HobbyItem {
  id: number;
  hobby: string;
}

export const Hobbies = () => {
  const [hobbies, setHobbies] = useState<HobbyItem[]>([]);
  const [form, setForm] = useState<HobbyItem>({
    id: Date.now(),
    hobby: "",
  });

  const [editId, setEditId] = useState<number | null>(null);

  // 🔹 Handle form change
  const handleChange = (value: string) => {
    setForm((prev) => ({ ...prev, hobby: value }));
  };

  // 🔹 Add new
  const handleAdd = () => {
    if (!form.hobby) return;
    setHobbies((prev) => [...prev, { ...form, id: Date.now() }]);
    resetForm();
  };

  // 🔹 Edit existing
  const handleEdit = (item: HobbyItem) => {
    setForm(item);
    setEditId(item.id);
  };

  // 🔹 Update existing
  const handleUpdate = () => {
    setHobbies((prev) =>
      prev.map((item) => (item.id === editId ? { ...form, id: editId! } : item))
    );
    resetForm();
    setEditId(null);
  };

  // 🔹 Delete
  const handleDelete = (id: number) => {
    setHobbies((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔹 Reset form
  const resetForm = () => {
    setForm({
      id: Date.now(),
      hobby: "",
    });
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Hobbies</h1>
      <p className="mb-3 text-muted-foreground">
        Add hobbies or interests that reflect your personality.
      </p>

      {/* Form */}
      <div className="grid grid-cols-1 gap-5">
        <div>
          <Label>Hobby</Label>
          <Input
            value={form.hobby}
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            placeholder="e.g. Reading, Hiking, Painting"
            className="mt-2"
          />
        </div>
      </div>

      {editId ? (
        <Button onClick={handleUpdate} className="mt-3 w-full">
          <Pencil /> Update Hobby
        </Button>
      ) : (
        <Button onClick={handleAdd} className="mt-3 w-full">
          <PlusCircle /> Add Hobby
        </Button>
      )}

      {/* List */}
      <div className="mt-6 space-y-3">
        {hobbies.map((item) => (
          <div
            key={item.id}
            className="p-3 border rounded flex justify-between items-center"
          >
            <p className="font-semibold">{item.hobby}</p>
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

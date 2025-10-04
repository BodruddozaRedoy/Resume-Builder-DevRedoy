"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EducationItem } from "@/types/resume.types";
import { Pencil, PlusCircle, X } from "lucide-react";
import { useState } from "react";

export const Education = () => {
    const [education, setEducation] = useState<EducationItem[]>([]);
    const [form, setForm] = useState<EducationItem>({
        id: Date.now(),
        degree: "",
        institute: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
    });

    const [editId, setEditId] = useState<number | null>(null);

    // 🔹 Handle input changes
    const handleChange = (field: keyof EducationItem, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    // 🔹 Add new entry
    const handleAdd = () => {
        if (!form.degree || !form.institute) return;

        setEducation((prev) => [...prev, { ...form, id: Date.now() }]);
        resetForm();
    };

    // 🔹 Start editing
    const handleEdit = (item: EducationItem) => {
        setForm(item);
        setEditId(item.id);
    };

    // 🔹 Save update
    const handleUpdate = () => {
        setEducation((prev) =>
            prev.map((item) => (item.id === editId ? { ...form, id: editId } : item))
        );
        resetForm();
        setEditId(null);
    };

    // 🔹 Delete entry
    const handleDelete = (id: number) => {
        setEducation((prev) => prev.filter((item) => item.id !== id));
    };

    // 🔹 Reset form
    const resetForm = () => {
        setForm({
            id: Date.now(),
            degree: "",
            institute: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
        });
    };

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Education</h1>
            <p className="mb-3 text-muted-foreground">
                Add the name of your school, where it is located, what degree you obtained,
                your field of study, and your graduation year.
            </p>

            {/* Form */}
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <Label>Degree Name</Label>
                    <Input
                        value={form.degree}
                        onChange={(e) => handleChange("degree", e.target.value)}
                        type="text"
                        placeholder="Type here..."
                        className="mt-2"
                    />
                </div>
                <div>
                    <Label>Institute Name</Label>
                    <Input
                        value={form.institute}
                        onChange={(e) => handleChange("institute", e.target.value)}
                        type="text"
                        placeholder="Type here..."
                        className="mt-2"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex-1">
                        <Label>Start Date</Label>
                        <Input
                            type="date"
                            value={form.startDate}
                            onChange={(e) => handleChange("startDate", e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <Label>End Date</Label>
                        <Input
                            type="date"
                            value={form.endDate}
                            onChange={(e) => handleChange("endDate", e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <Label>Location</Label>
                    <Input
                        value={form.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                        type="text"
                        placeholder="Type here..."
                        className="mt-2"
                    />
                </div>
                <div className="col-span-2">
                    <Label>Description</Label>
                    <Textarea
                        value={form.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        placeholder="Type here..."
                        className="mt-2"
                    />
                </div>
            </div>

            {editId ? (
                <Button onClick={handleUpdate} className="mt-3 w-full">
                    <Pencil /> Update Education
                </Button>
            ) : (
                <Button onClick={handleAdd} className="mt-3 w-full">
                    <PlusCircle /> Add Education
                </Button>
            )}

            {/* List */}
            <div className="mt-6 space-y-3">
                {education.map((item:any) => (
                    <div
                        key={item.id}
                        className="p-3 border rounded flex justify-between items-start"
                    >
                        <div>
                            <p className="font-semibold">{item.degree}</p>
                            <p className="text-sm text-muted-foreground">{item.institute}</p>
                            <p className="text-xs text-gray-500">
                                {item.startDate} - {item.endDate} | {item.location}
                            </p>
                            <p className="text-sm">{item.description}</p>
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
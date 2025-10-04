"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { InternshipItem } from "@/types/resume.types";
import { Pencil, PlusCircle, X } from "lucide-react";
import { useState } from "react";

export const Internship = () => {
    const [internship, setInternship] = useState<InternshipItem[]>([]);
    const [form, setForm] = useState<InternshipItem>({
        id: Date.now(),
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        country: "",
        companyLink: "",
        description: "",
    });

    const [editId, setEditId] = useState<number | null>(null);

    // 🔹 Handle form change
    const handleChange = (field: keyof InternshipItem, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    // 🔹 Add new
    const handleAdd = () => {
        if (!form.jobTitle || !form.company) return;
        setInternship((prev) => [...prev, { ...form, id: Date.now() }]);
        resetForm();
    };

    // 🔹 Edit existing
    const handleEdit = (item: InternshipItem) => {
        setForm(item);
        setEditId(item.id);
    };

    // 🔹 Update existing
    const handleUpdate = () => {
        setInternship((prev) =>
            prev.map((item) => (item.id === editId ? { ...form, id: editId } : item))
        );
        resetForm();
        setEditId(null);
    };

    // 🔹 Delete
    const handleDelete = (id: number) => {
        setInternship((prev) => prev.filter((item) => item.id !== id));
    };

    // 🔹 Reset form
    const resetForm = () => {
        setForm({
            id: Date.now(),
            jobTitle: "",
            company: "",
            startDate: "",
            endDate: "",
            country: "",
            companyLink: "",
            description: "",
        });
    };

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Internship History</h1>
            <p className="mb-3 text-muted-foreground">
                Show employers your past experience and what you have accomplished.
                Include simple, clear examples and use impactful words to demonstrate your skills.
            </p>

            {/* Form */}
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <Label>Job Title</Label>
                    <Input
                        value={form.jobTitle}
                        onChange={(e) => handleChange("jobTitle", e.target.value)}
                        type="text"
                        placeholder="Type here..."
                        className="mt-2"
                    />
                </div>
                <div>
                    <Label>Company Name</Label>
                    <Input
                        value={form.company}
                        onChange={(e) => handleChange("company", e.target.value)}
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
                <div className="flex items-center gap-2">
                    <div className="flex-1">
                        <Label>Country</Label>
                        <Input
                            value={form.country}
                            onChange={(e) => handleChange("country", e.target.value)}
                            type="text"
                            placeholder="Type here..."
                            className="mt-2"
                        />
                    </div>
                    <div className="flex-1">
                        <Label>Company Link</Label>
                        <Input
                            value={form.companyLink}
                            onChange={(e) => handleChange("companyLink", e.target.value)}
                            type="text"
                            placeholder="Type here..."
                            className="mt-2"
                        />
                    </div>
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
                    <Pencil /> Update Experience
                </Button>
            ) : (
                <Button onClick={handleAdd} className="mt-3 w-full">
                    <PlusCircle /> Add Experience
                </Button>
            )}

            {/* List */}
            <div className="mt-6 space-y-3">
                {internship.map((item:any) => (
                    <div
                        key={item.id}
                        className="p-3 border rounded flex justify-between items-start"
                    >
                        <div>
                            <p className="font-semibold">{item.jobTitle}</p>
                            <p className="text-sm text-muted-foreground">{item.company}</p>
                            <p className="text-xs text-gray-500">
                                {item.startDate} - {item.endDate} | {item.country}
                            </p>
                            {item.companyLink && (
                                <a
                                    href={item.companyLink}
                                    target="_blank"
                                    className="text-blue-500 text-sm underline"
                                >
                                    {item.companyLink}
                                </a>
                            )}
                            <p className="text-sm mt-1">{item.description}</p>
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
"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, X } from "lucide-react";
import { useRef, useState } from "react";

export const Skills = () => {
    const [skills, setSkills] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddSkill = () => {
        const value = inputRef.current?.value.trim();
        if (!value) return; // skip empty

        setSkills((prev) => [...prev, value]);
        inputRef.current!.value = ""; // clear input after add
    };

    const handleRemoveSkill = (index: number) => {
        setSkills((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Skills</h1>
            <p className="mb-3 text-muted-foreground">
                Highlight your most important and applicable professional skills.
            </p>

            <div className="flex items-center gap-2">
                <Input
                    ref={inputRef}
                    type="text"
                    placeholder="Type your skill."
                    className="w-1/3"
                />
                <Button
                    onClick={handleAddSkill}
                    className="flex items-center gap-1"
                >
                    <PlusCircle size={16} /> Add Skill
                </Button>
            </div>

            <div className="mt-4 flex gap-1">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 border rounded px-2 py-1"
                    >
                        <button onClick={() => handleRemoveSkill(index)}>
                            <X size={14} />
                        </button>
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
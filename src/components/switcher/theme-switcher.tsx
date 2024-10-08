'use client'
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
    const { setTheme } = useTheme();


    return (
        <div className="my-3 flex gap-1">
            <Button 
                variant={"ghost"} 
                onClick={() => setTheme('light')}
                className="border-2"
            >
                Light
            </Button>
            <Button onClick={() => setTheme('dark')}>Dark</Button>
        </div>
    )
}
"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import {
  TabletSmartphone,
  LaptopMinimal,
  ExternalLink,
  ClipboardCheck,
} from "lucide-react";

export default function Home() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const contacts = [
    {
      label: "Email",
      href_val: "csathmal24@gmail.com",
      display: "csathmal24@gmail.com",
    },
    {
      label: "GitHub",
      href_val: "https://github.com/Chethaka-Sathmal",
      display: "Chethaka-Sathmal",
    },
    {
      label: "X",
      href_val: "https://x.com/CSathmal",
      display: "CSathmal",
    },
    {
      label: "LinkedIn",
      href_val: "https://www.linkedin.com/in/chethaka-sathmal/",
      display: "Chethaka Sathmal",
    },
  ];

  const handleCopy = async (text: string, label: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLabel(label);
      setTimeout(() => setCopiedLabel(null), 2000); // Reset after 2s
      toast.success("Email copied", {
        description: "Email copied to clipboard",
      });
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Error copying", {
        description: "Error copying email to clipboard",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-15 p-4">
      {/* Header */}
      <section className="flex flex-col gap-4 text-center mb-12">
        <h1 className="text-3xl md:text-4xl">Chethaka Sathmal</h1>
        <h2 className="text-md md:text-lg text-gray-600">
          Software developer based in Sri Lanka
        </h2>
      </section>
      {/* About me */}
      <section className="flex flex-col gap-2 mb-12">
        <p>
          Hello everyone 👋, I&apos;m a self driven novice software developer
          focusing on creating innovative software solutions for everyday
          problems.
        </p>
        <p>Hope to hear from you soon 🤗</p>
      </section>
      {/* My services */}
      <section className="mb-12">
        <h3 className="font-semibold mb-4">My services</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="w-full">
            <CardHeader>
              <div className="flex flex-row items-center gap-4">
                <LaptopMinimal />
                <CardTitle>Web developer</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-600">
              Developed responsive websites using Next.js and React
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <div className="flex flex-row items-center gap-4">
                <TabletSmartphone />
                <CardTitle>Mobile app developer</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-600">
              Experience building mobile apps with React Native and Expo
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Contacts */}
      <section>
        <h3 className="font-semibold mb-4">My Contacts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2">
          {contacts.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="font-medium">{item.label}:</span>
              {item.label === "Email" ? (
                <button
                  onClick={() => handleCopy(item.href_val, item.label)}
                  className="text-[#395fe7] hover:underline flex items-center gap-1"
                >
                  {item.display}
                  {copiedLabel === item.label ? (
                    <ClipboardCheck size={14} className="text-green-500" />
                  ) : null}
                </button>
              ) : (
                <a
                  href={item.href_val}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#395fe7] hover:underline flex items-center gap-1"
                >
                  {item.display}
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

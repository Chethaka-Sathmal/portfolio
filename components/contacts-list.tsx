"use client";

import { useState } from "react";
import { ClipboardCheck, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export default function ContactsList() {
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
  );
}

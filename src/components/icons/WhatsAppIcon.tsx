import React from "react";

export function WhatsAppIcon({ className = "", ...props }: React.HTMLAttributes<HTMLElement>) {
    // Determine the font size based on the passed Tailwind height classes
    // This allows the icon to properly fill its container without overflowing or being too small
    let sizeStyle = {};
    if (className.includes("h-4")) sizeStyle = { fontSize: "1.25rem" };
    else if (className.includes("h-5")) sizeStyle = { fontSize: "1.5rem" };
    else if (className.includes("h-6")) sizeStyle = { fontSize: "1.75rem" };
    else if (className.includes("h-7")) sizeStyle = { fontSize: "2rem" };
    else if (className.includes("h-8")) sizeStyle = { fontSize: "2.5rem" };
    else if (className.includes("h-10")) sizeStyle = { fontSize: "3rem" };
    else if (className.includes("h-12")) sizeStyle = { fontSize: "3.5rem" };
    else sizeStyle = { fontSize: "inherit" }; // fallback

    return (
        <span
            className={`inline-flex items-center justify-center ${className}`}
            style={{ ...sizeStyle, lineHeight: 1 }}
            {...props}
        >
            <i className="fab fa-whatsapp" style={{ margin: 0, padding: 0 }} />
        </span>
    );
}

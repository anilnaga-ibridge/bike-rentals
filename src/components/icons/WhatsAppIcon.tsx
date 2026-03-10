import React from "react";

export function WhatsAppIcon({ className = "", ...props }: React.HTMLAttributes<HTMLElement>) {
    // Map standard lucide tailwind sizes to font-sizes for Font Awesome
    let sizeClass = "";
    if (className.includes("h-4")) sizeClass = "text-[1.2rem]"; // standard buttons
    else if (className.includes("h-5")) sizeClass = "text-[1.5rem]"; // contact page list
    else if (className.includes("h-7")) sizeClass = "text-[2.2rem]"; // floating button
    else if (className.includes("h-12")) sizeClass = "text-[3.5rem]"; // how it works steps

    return (
        <i className={`fab fa-whatsapp flex items-center justify-center ${sizeClass} ${className}`} {...props} />
    );
}

import React from "react";

export function WhatsAppIcon({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <i className={`fab fa-whatsapp ${className || ""}`} {...props} />
    );
}

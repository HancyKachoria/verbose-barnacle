import { init } from '@emailjs/browser';

// Initialize EmailJS with your public key
init("YOUR_PUBLIC_KEY");

export const EMAILJS_CONFIG = {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY"
}; 
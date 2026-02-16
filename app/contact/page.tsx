import { Metadata } from "next";
import ContactSection from "../contact/page";
import ContactSectionPages from "../sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact M.N. Graphics | Printing Services in Kolkata",
  description:
    "Contact M.N. Graphics for vinyl cutting, eco solvent printing and steel letter signage services in Kolkata.",
};

export default function ContactPage() {
  return (
    <main className="pt-40">
      <ContactSectionPages />
    </main>
  );
}



import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { bricolage } from "@/lib/fonts";

const faqs = [
  {
    question: "What is this platform about?",
    answer:
      "Our platform maximizes your Substack potential with custom newsletter landing pages designed to enhance subscriber engagement and boost conversion rates.",
  },
  {
    question: "How does the waitlist work?",
    answer:
      "By signing up for our waitlist, you’ll be among the first to know when we launch our platform. You'll receive exclusive discounts on premium catalogs as soon as they become available.",
  },
  {
    question: "Is there a cost to join the waitlist?",
    answer:
      "No, joining the waitlist is completely free! By signing up, you’re simply expressing your interest in our product, and we’ll keep you updated on our launch.",
  },
  {
    question: "When will the platform launch?",
    answer:
      "We are working hard to bring you our platform as soon as possible! While we don’t have an exact launch date yet, being on the waitlist ensures that you will be one of the first to know when we do launch.",
  },
  {
    question: "Will there be any early access benefits?",
    answer:
      "Yes! By joining our waitlist, you may receive special perks, including early access to our platform and exclusive offers when we launch.",
  },
  {
    question: "Who can I contact for support?",
    answer:
      "For any questions or support not covered in our FAQ, feel free to reach out using the contact information provided below",
  },
];

const FAQ = () => {
  return (
    <section>
      <h2 style={bricolage.style} className="text-2xl font-semibold text-gray-600 text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((item, index) => (
          <AccordionItem
            value={`item-${index + 1}`}
            key={index}
            className="bg-blue-400/10 px-5 rounded-lg"
          >
            <AccordionTrigger
              className="text-[17px] text-blue-600"
              style={bricolage.style}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent
              className="text-base font-normal leading-normal"
              style={bricolage.style}
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;

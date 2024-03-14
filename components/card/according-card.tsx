import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  title: string;
  description: string;
}

export const AccordingItem = ({ description, title }: Props) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-[15px] px-8 py-1.5"
      style={{
        background:
          "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)",
      }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-start font-semibold text-[#A5A5A5] lg:text-2xl  ">
          {title}
        </AccordionTrigger>
        <AccordionContent className="text-base text-[#E2E2E2]">
          {description}{" "}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

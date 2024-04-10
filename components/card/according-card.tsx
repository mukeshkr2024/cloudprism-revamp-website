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
      className="w-full rounded-[15px] px-5 sm:px-8 sm:py-1.5"
      style={{
        background:
          "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)",
      }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="pr-2 text-start text-base font-semibold text-[#A5A5A5]   sm:text-lg md:text-xl lg:text-2xl ">
          <h2>{title}</h2>
        </AccordionTrigger>
        <AccordionContent className="text-xs text-[#E2E2E2] sm:text-sm md:text-base">
          <h3>{description} </h3>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

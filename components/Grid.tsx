import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Grid = () => {
  return (
    <section id="about" className="pb-10 pt-16 sm:pt-20 md:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8">
      <TextGenerateEffect
        words="A Glimpse About Me"
        className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      />
      <BentoGrid className="w-full mt-6 sm:mt-8 md:mt-10">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

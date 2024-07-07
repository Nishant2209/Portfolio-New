import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Grid = () => {
  return (
    <section id="about" className="pb-10 pt-32">
      <TextGenerateEffect
        words="A Glimpse About Me"
        className="text-center text-[40px] md:text-5xl"
      />
      <BentoGrid className="w-full mt-10">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
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

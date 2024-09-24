import Carousel from "@/components/my-components/carousel/Carousel";
import { images } from "@/components/my-components/carousel/ImagePath";
import { PublicityLeft } from "@/components/my-components/publicity/PublicityLeft";
import { PublicityRight } from "@/components/my-components/publicity/PublicityRight";
import WhyChooseUs from "@/components/my-components/whyChooseUs/WhyChooseUs";
import { Divider } from "@nextui-org/react";


export default function Home() {


  return (

    <>
      <Divider />
      <div className="flex justify-between items-center gap-4 p-4">
        <PublicityLeft />
        <Carousel images={images} />
        <PublicityRight />
      </div>
        <WhyChooseUs/>    
    </>


  )
}



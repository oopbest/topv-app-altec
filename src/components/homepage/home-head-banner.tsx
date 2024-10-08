import Image from "next/image";
import imgBanner from "@images/banner__altec-banner-2.png";

export default function HomeHeadBanner() {
  return (
    <>
      <section className="container mx-auto">
        {/* Head banner */}
        <div className="transition-responsive py-1">
          <div className="relative min-h-40 lg:min-h-72">
            <div className="transition-responsive absolute left-1 right-1 top-7 transform animate-bounce text-center text-inherit md:top-14 lg:top-20 xl:top-40">
              <h1 className="mb-2 text-base font-normal md:text-4xl">
                เครื่องฟอกอากาศ รุ่น AP3 กรอง ชั้น Pm2.5
              </h1>
              <p className="text-xs md:text-lg">
                กำจัดแบคทีเรีย ไวรัส ป้องกันฝุ่นละออง PM2.5
              </p>
            </div>

            <Image
              className="w-full object-cover lg:rounded-xl"
              alt="banner"
              src={imgBanner}
            />
          </div>
        </div>
      </section>
    </>
  );
}

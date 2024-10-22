import HomeHeadBanner from "@/components/homepage/home-head-banner";
import HomeSimpleProduct from "@/components/homepage/home-simple-product";
import HomeStandard from "@/components/homepage/home-standard";
import HomeAboutUs from "@/components/homepage/home-aboutus";

export default function Home() {
  return (
    <section className="bg-white space-y-16">
      <HomeHeadBanner />
      <HomeSimpleProduct />
      <HomeStandard />
      <HomeAboutUs />
    </section>
  );
}

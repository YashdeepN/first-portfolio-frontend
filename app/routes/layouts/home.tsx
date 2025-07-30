import { Outlet } from "react-router";
import Hero from "~/components/Hero";

const HomeLayout = () => {
  return (
    <>
      <Hero
        name="Manthan Joshi"
        text="I build friendly web experiences and help others become confident."
      />
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;

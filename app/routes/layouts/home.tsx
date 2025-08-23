import { Outlet } from "react-router";
import Hero from "~/components/Hero";

const HomeLayout = () => {
  return (
    <>
      <Hero
        name="Yashdeep Neema"
        // text="I build friendly web experiences and help others become confident."
        text="A Frontend Developer focused on crafting clean, interactive UIs with React."
      />
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;

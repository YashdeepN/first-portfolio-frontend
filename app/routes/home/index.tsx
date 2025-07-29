import Hero from "~/components/Hero";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "A web devaloper portfolio" },
  ];
}

export default function Home() {
  return (
    <section>
      <Hero
        name="Manthan Joshi"
        text="I build friendly web experiences and help others become confident."
      />
    </section>
  );
}

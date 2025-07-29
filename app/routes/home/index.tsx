import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "A web devaloper portfolio" },
  ];
}

export default function Home() {
  return <section>My Portfolio</section>;
}

import { ArticleCard } from "../components/learning/ArticleCard";
import { wcagContent } from "../content/wcag";

export default function Home() {
  return (
    <>
      <h1>Välkommen till tillgängligt.</h1>
      <p>
        Discover the essentials of web accessibility and learn how to create
        inclusive digital experiences
      </p>
      <div>
        <ArticleCard {...wcagContent.introduction} />
        <ArticleCard {...wcagContent.principles} />
      </div>
    </>
  );
}

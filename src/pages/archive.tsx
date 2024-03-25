import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import {
  Layout,
  ArticleCard,
  Container,
  Seo,
  Button,
  HeaderSection,
} from "@/components";

const Archive: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Archiv der Schulbälle des AKG Wien" />
      <Container>
        <HeaderSection
          title="Archiv"
          copy="Hier finden Sie Weblinks zu unseren vergangenen Bällen des Verein Schulball Akademisches Gymnasium Wien."
        />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mx-4 mt-4">
        <li className="group">
            <ArticleCard
              external
              link="https://schulball2023.netlify.app/"
              title="Masquerade (2023)"
              description="Der 44. Schulball fand zum Thema „Masquerade“ im Palais Ferstel statt."
            />
          </li>
        <li className="group">
            <ArticleCard
              external
              link="https://2022.schulball-akg.at/"
              title="Casino Royale (2022)"
              description="Der 43. Schulball des AKG war der erste seit Beginn der Corona Pandemie und fand zum Thema „Casino Royale“ im Palais Auersperg statt."
            />
          </li>
          <li className="group">
            <ArticleCard
              external
              link="https://2021.schulball-akg.at/"
              title="Secret Garden (2021)"
              description="Aufgrund von Covid-19 musste unser 42. Schulball zum Thema „Secret Garden“ am 19. Juni 2021 leider abgesagt werden."
            />
          </li>
          <li className="group">
            <ArticleCard
              external
              link="https://2020.schulball-akg.at/"
              title="The Golden Twenties (2020)"
              description="Kurz vor Ausbruch der Corona Pandemie ging am Valentinstag, 14. Februar 2020, unser 41. Schulball zum Thema „The Golden Twenties“ im Palais Ferstel über die Bühne."
            />
          </li>
          <li className="group">
            <ArticleCard
              external
              link="https://2019.schulball-akg.at/"
              title="Hogwarts - Harry Potter (2019)"
              description="Der 40. Schulball zum Thema „Hogwarts – Harry Potter“ fand erstmals am 18. Mai 2019 in unserer Schule im AkG statt."
            />
          </li>
        </ol>
      </Container>
    </Layout>
  );
};

export default Archive;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

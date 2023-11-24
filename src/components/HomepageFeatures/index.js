import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Explorez Votre Créativité avec Loufok!",
    Svg: require("@site/static/img/6365297.svg").default,
    description: (
      <>
        Plongez dans le monde imaginatif de Loufok, une application web
        novatrice qui vous invite à explorer votre créativité de manière ludique
        et interactive. Contribuez à des cadavres exquis, créez des histoires
        uniques et partagez votre vision artistique avec d'autres esprits
        créatifs.
      </>
    ),
  },
  {
    title: "Collaboration Artistique Redéfinie : Découvrez Loufok",
    Svg: require("@site/static/img/5363957.svg").default,
    description: (
      <>
        Loufok réinvente la manière dont vous collaborez artistiquement en vous
        offrant une plateforme amusante et intuitive pour contribuer à des
        cadavres exquis. Que vous soyez écrivain ou simplement passionné par
        l'expression artistique, cette application web vous permet de participer
        à des histoires collectives et de découvrir un nouveau niveau
        d'interaction créative.
      </>
    ),
  },
  {
    title: "Créez, Partagez, Inspirez : Loufok",
    Svg: require("@site/static/img/5044022.svg").default,
    description: (
      <>
        Explorez une expérience artistique immersive avec Loufok. Cette
        plateforme vous offre la liberté de créer, de partager et d'inspirer au
        sein d'une communauté artistique dynamique. Rejoignez-nous pour
        repousser les limites de votre imagination et donner vie à des
        chefs-d'œuvre collaboratifs.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

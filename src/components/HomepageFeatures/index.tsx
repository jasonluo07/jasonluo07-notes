import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      message: '容易使用',
      id: 'features.easyToUse.title',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id="features.easyToUse.description">
        Docusaurus 從一開始就被設計為容易安裝和使用，可以快速建立您的網站。
      </Translate>
    ),
  },
  {
    title: translate({
      message: '專注於重要事物',
      id: 'features.focusOnWhatMatters.title',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate
        id="features.focusOnWhatMatters.description"
        values={{
          code: <code>docs</code>,
        }}
      >
        {'Docusaurus 讓您專注於您的文檔，我們會處理雜事。請將您的文檔移至 {code} 資料夾。'}
      </Translate>
    ),
  },
  {
    title: translate({
      message: '由 React 驅動',
      id: 'features.poweredByReact.title',
    }),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate id="features.poweredByReact.description">
        通過重用 React 來擴展或自定義您的網站佈局。Docusaurus 可以在重用相同的頭部和尾部時進行擴展。
      </Translate>
    ),
  },
];

const Feature = ({ title, Svg, description }: FeatureItem) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomepageFeatures = () => {
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
};

export default HomepageFeatures;

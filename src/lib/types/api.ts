import { ArticleProps } from './article';
import { ServiceProps } from './services';

export type HeroProps = {
  title: string;
  description: string;
};

export type PrevidenceServicesProps = {
  title: string;
  description: string;
  servicos: ServiceProps[];
};

export type QuemSomosProps = {
  title: string;
  name: string;
  description: string;
  presentation_video_url: string;
};

export type CTAProps = {
  title: string;
};

export type BlogSectionProps = {
  title: string;
  artigos: ArticleProps[];
};

export type HomepageProps = {
  hero: HeroProps;
  servicos_previdencia: PrevidenceServicesProps;
  quem_somos: QuemSomosProps;
  cta: CTAProps;
  blog_section: BlogSectionProps;
};

export type BlogPageProps = {
  title_most_read: string;
  description_most_read: string;
  title_all_articles: string;
};

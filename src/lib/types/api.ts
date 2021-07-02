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

export type HomepageProps = {
  hero: HeroProps;
  servicos_previdencia: PrevidenceServicesProps;
  quem_somos: QuemSomosProps;
  cta: CTAProps;
};

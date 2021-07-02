export type ServiceProps = {
  id: number;
  title: string;
  short_description: string;
  long_description: string;
  contact_url: string;
  is_main: boolean;
  slug: string;
  icon: {
    url: string;
  };
};

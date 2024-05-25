type MenuItem = {
  type?: {
    pl: string;
    en: string;
    [key: string]: string;
  };
  name?: {
    pl: string;
    en: string;
    [key: string]: string;
  };
  header?: {
    pl: string;
    en: string;
    [key: string]: string;
  };
  glassSize?: string;
  glass?: string;
  price?: string;
  bottle?: string;
  image?: string;
  vege?: boolean;
  description?: {
    pl: string;
    en: string;
    [key: string]: string;
  };
  description1?: {
    pl: string;
    en: string;
    [key: string]: string;
  };
  price1?: string;
  description2?: {
    pl: string;
    en: string;
    [key: string]: string;
  };
  price2?: string;
  description3?: {
    pl: string;
    en: string;
    [key: string]: string;
  };
  price3?: string;
  description4?: {
    pl: string;
    en: string;
    [key: string]: string;
  };
  price4?: string;
};

export type MenuTypes = {
  id: string;
  type: string;
  category: {
    pl: string;
    en: string;
    [key: string]: string;
  };
  burgerDescription?: {
    pl: string;
    en: string;
    [key: string]: string;
  };
  items: MenuItem[];
};

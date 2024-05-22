type MenuItem = {
  type?: string;
  name?: string;
  header?: string;
  glassSize?: string;
  glass?: string;
  price?: string;
  bottle?: string;
  image?: string;
  vege?: boolean;
  description?: string;
  description1?: string;
  price1?: string;
  description2?: string;
  price2?: string;
  description3?: string;
  price3?: string;
  description4?: string;
  price4?: string;
};

export type MenuTypes = {
  id: string;
  type: string;
  category: string;
  burgerDescription?: string;
  items: MenuItem[];
};

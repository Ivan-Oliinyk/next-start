export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type ContactType = {
  id: number | string;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
};

export type HeadingType = {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type PostType = {
  userId: number | string;
  id: number | string;
  title: string;
  body: string;
};

export type NavigationType = {
  id: number | string;
  title: string;
  path: string;
};

export type SocialType = {
  id: number | string;
  icon: string;
  path: string;
};

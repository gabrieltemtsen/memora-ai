export type ChildernProps = {
  children: React.ReactNode;
};

export interface ProductsProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export type ErrorResponse = {
  code: string;
  message?: string;
  issues?: { message: string }[];
};

export type UserInfo = {
  email?: string;
  picture?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  birthdate?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  phoneNumber?: string;
};


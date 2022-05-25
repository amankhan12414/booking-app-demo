export type IRestaurant = {
  averageCost: number;
  cuizine: string;
  image: IImage;
  location: any;
  name: string;
  starRating: number;
};

type IImage = {
  fields: IFields;
};

type IFields = {
  file: IFile;
};

type IFile = {
  url: string;
};


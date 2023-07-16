export interface Typeface {
  title: string;
  name: string;
  infos?: string;
  icon: string;
  categories: Category[];
  files: string;
  styles: string;
  slug: string;
  background: string;
  license: License[];
}

export interface Category {
  slug?: string;
  name: string;
}
export interface License {
  slug?: string;
  name: string;
}

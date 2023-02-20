interface SingleNewProps {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  date: string;
  mainImage: string;
  homepageImage: string;
  sliderImages?: { image: string }[];
  sliderStrings?: string[];
  tags?: string;
}

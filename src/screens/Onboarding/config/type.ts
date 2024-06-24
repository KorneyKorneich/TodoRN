import { ImageSourcePropType } from "react-native/Libraries/Image/Image";

export interface SlideProp {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType;
}

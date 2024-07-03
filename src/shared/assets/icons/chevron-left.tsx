import Svg, { Path } from "react-native-svg";

interface ImageComponentProps {
    color: string;
}

export const ChevronLeft = ({ color }: ImageComponentProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M15 18L9 12L15 6"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};

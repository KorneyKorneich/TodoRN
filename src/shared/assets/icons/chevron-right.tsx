import Svg, { Path } from "react-native-svg";

interface ImageComponentProps {
    color: string;
}

export const ChevronRight = ({ color }: ImageComponentProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M9 18L15 12L9 6"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};

import Svg, { Path } from "react-native-svg";

interface ImageComponentProps {
    color: string;
}

export const Filter = ({ color }: ImageComponentProps) => {
    return (
        <Svg viewBox="0 0 24 24" fill="none">
            <Path
                d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};

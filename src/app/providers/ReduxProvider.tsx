import { ReduxProviderProps } from "./ReduxProvider.config.ts";
import { Provider } from "react-redux";
import { store } from "src/shared/store/store.ts";

export const ReduxProvider = (props: ReduxProviderProps) => {
    return <Provider store={store}>{props.children}</Provider>;
};

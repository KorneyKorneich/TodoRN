import { ReduxProviderProps } from "./ReduxProvider.config.ts";
import { Provider } from "react-redux";
import { store } from "src/app/store/store.ts";

export const ReduxProvider = (props: ReduxProviderProps) => {
    const { children } = props;
    return <Provider store={store}>{children}</Provider>;
};

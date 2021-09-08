import { combineComponents } from "./combineComponents";
import { ItemsContextProvider } from "./contextProviders/itemsContext/index";
import { UserContextProvider } from "./contextProviders/userContext/index";

const providers = [UserContextProvider, ItemsContextProvider];
export const AppContextProvider = combineComponents(...providers);

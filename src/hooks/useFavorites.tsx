import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { Quote } from "../interfaces";
import _ from "lodash";

const FavoriteContext = createContext<
    [Quote[], Dispatch<SetStateAction<Quote[]>>]
>([[], () => {}]);

export const FavoritesProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        AsyncStorage.getItem("@favoriteQuotes").then((storedQuotes) => {
            if (storedQuotes !== null) {
                setQuotes(JSON.parse(storedQuotes));
            }
        });
    }, []);

    return (
        <FavoriteContext.Provider value={[quotes, setQuotes]}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorites = () => {
    const [quotes, setQuotes] = useContext(FavoriteContext);

    const update = async (newQuotes: Quote[]) => {
        await AsyncStorage.setItem(
            "@favoriteQuotes",
            JSON.stringify(newQuotes)
        );

        setQuotes(newQuotes);
    };

    const favorite = async (quote: Quote) => {
        await update(_.uniq([...quotes, quote]));
    };

    const toggleFavorite = async (quote: Quote) => {
        isFavorite(quote) ? unfavorite(quote) : favorite(quote);
    };

    const unfavorite = async (quote: Quote) => {
        const newQ = quotes.filter(
            (p) => p.author !== quote.author || p.text !== quote.text
        );
        await update(newQ);
    };

    const isFavorite = (quote: Quote): boolean => {
        return _.includes(quotes, quote);
    };

    return { quotes: quotes, favorite, toggleFavorite, unfavorite, isFavorite };
};

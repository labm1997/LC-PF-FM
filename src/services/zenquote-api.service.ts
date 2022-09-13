import { Quote } from "../interfaces";

function extractArray(obj: Array<any>): Array<Quote> {
    return obj.map((value): Quote => {
        return { text: value.q, author: value.a };
    });
}

function extractUnique(obj: Array<any>): Quote {
    return extractArray(obj)[0];
}

export const dailyZQ = async () => {
    const response = await fetch("https://zenquotes.io/api/today");
    return extractUnique(await response.json());
};

export const randomZQ = async (num: number = 50) => {
    const response = await fetch("https://zenquotes.io/api/quotes");
    const quotes = extractArray(await response.json());

    return quotes.slice(0, num);
};

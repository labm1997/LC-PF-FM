export function unique<T>(array: T[]): T[] {
    return array.filter(
        (value, index) =>
            array.findIndex(
                (v) => JSON.stringify(v) == JSON.stringify(value)
            ) == index
    );
}

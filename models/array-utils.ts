export function getFirstItem<T>(array: T[]){
    if (array[0])
        return array[0];
    return null;

}
export const countDuplicatesItemArray = (value, array) => {
    let count = 0;

    array.forEach(arrayValue => {
        if(arrayValue == value){
            count++;
        }
    });

    return count;
};

export const removeArrayDuplicates = array => {
    return Array.from(new Set(array));
}
export const filterByIncludes = (obj, name) => {

    if(obj.title.toLowerCase().includes(name.toLowerCase) || obj.releaseDate.toString().includes(name.toString()))
        return true

    return false
    
}

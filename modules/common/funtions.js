
export let fun = {
  single_objet_to_array: (object) => {
    let array = [] 
    // empty object
    if(Object.keys(object).length == 0) {
      return array
    } 
    // single object :- not a array
    else if(object.constructor.name != "Array"){
      array.push(object)
      return array
    } else {
      return object
    }
  }
}
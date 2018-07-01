
export let fun = {
  single_objet_to_array: (object) => {
    let array = [] 
    if(typeof object == object){
      array.push(object)
      return array
    } else if(Object.keys(object).length == 0) {
      return array
    } else {
      return object
    }
  }
}
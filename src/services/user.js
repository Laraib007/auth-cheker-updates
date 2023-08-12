import fs from'fs'
import path from'path'



//Yaha msla tha users.json ki jaga products.json likha tha
const filepath = path.join(process.cwd(),"src", "data" , "users.json");

export function getAll () {
  const data =  fs.readFileSync(filepath)
  return (JSON.parse(data))
}
export function getbyId (Id) {
    const data =  getAll();
   return  data.find (p => p.id === Number(Id))
  }
  export function getbyemail (email) {
    const data =  getAll();

    // //Yaha msla tha tolowercase sahi nhi likha tha
   return  data.find (p => p.email.toLowerCase() === email.toLowerCase())
  }
  export function save (email , password) {
    const data =  getAll();
    const find = getbyemail(email)
    if (find) {
        throw new Error("user already exist")
    }
     data.push ({
    id: data.length +1,
    email ,password
   })
   fs.writeFileSync(filepath, JSON.stringify(data))
  }
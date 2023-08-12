import Form from "@/components/auth/form";

export default function  SignUp () {
    const onSubmit = async (email, password) => {
        
        try{
            //Yaha msla tha file location sahi nhi di thi
            const response = await fetch("/api/signup",
            {
        method:"POST",
        body: JSON.stringify({email, password}),
        
headers:{
    "Content-Type": "application/json"
    
}
    });
    if (response.ok) {
       return alert("sign up successful")
    }
    //Yaha msla tha
        }catch(err){
            console.error(err)
        }
    }
     return <> <Form signin={false} onFormSubmit={onSubmit}/></>
}

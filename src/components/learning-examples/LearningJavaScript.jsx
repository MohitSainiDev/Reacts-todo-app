const person={
name:'Mohit',
address:{
    line1:'sector 28',
    city:'panchkula',
    country:'India'
},
profiles:["twitter","linkedin"],
printProfile:()=>{
    person.profiles.map(
        (profile)=>{
            console.log(profile)
        }
    )
   
}
}

export default function LearningJavaScript(){
    return(
        <> 
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[1]}</div>
        <div>{person.printProfile()}</div>
        </>
       
    )
}
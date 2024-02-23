import Dados from "./Dados"

const TempleteExpression =()=>{
const name="Paulo"

const data={
    job:"Programador",
    age:19
}

    return(
        <div>
            <p>A soma é de 2 + 2 é igual a {2+2}</p>
            <p>Bem vindo {name}</p>
            <p>Sua idade é {data.age} anos e voce é um {data.job}</p>
            <Dados name={name} job={data.job} age={data.age}/>
        </div>
    )
}

export default TempleteExpression
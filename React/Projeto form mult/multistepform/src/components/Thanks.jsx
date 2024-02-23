import React from 'react'
import './Thanks.css'
const Thanks = ({data, updateData}) => {
  return (
   <>
   <div className="agradecimentos">
        <h2>Falta pouco...</h2>
        <p>A sua opniao é muito importante, em breve voçe receberá um cupom com 10% de desconto para a sua próxima compra.</p>
        <p>Para concluir sua avaliação clique no botão de enviar abaixo.</p> 
   </div> 
   

   <div className="avaliacao">
        <p className='bold'>Aqui está o resumo da sua avaliação</p>
        <p className='bold'> {data.name}</p>
        <p>Satisfação do produto: {data.review}</p>
        <p>Comentário: {data.comment}</p>
   </div>
   </>
  )
}

export default Thanks
import "./style.css"

export default function Section({title, description, image, toggle}){
  return(
    <section className={`motivos ${toggle && "alterna"}`}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <img src={image} alt="Motivo"/> 
        </div>
    </section>
  )
}
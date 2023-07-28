import React from 'react';
import Card from 'react-bootstrap/Card';
import "./css/ListaEventos.css";

const ListaEventos = () => {
  const eventos = [
    {
      titulo: "EL ANTISEMITISMO EN LA HISTORIA: ANTISEMITISMO NAZI",
      descripcion: "Dentro del contexto de la depresión económica de la década de 1930 y a través de simbolismos no sólo racistas sino también de antiguos simbolismos sociales, económicos y religiosos, el partido nazi ganó popularidad y, después de tomar el poder, legitimidad, en parte por presentar a los &quot;judíos&quot; como el origen de una variedad de problemas políticos, sociales, económicos y éticos que enfrentaba el pueblo alemán.\n\nInspirados por las teorías de lucha racial de Adolf Hitler y la &quot;intención&quot; de los judíos de sobrevivir y expandirse a costa de los alemanes, los nazis, como partido oficialista de 1933 a 1938, ordenó boicots contra los judíos, organizó quema de libros y promulgó leyes contra los judíos. En 1935, las Leyes de Nuremberg definieron a los judíos por raza y obligaron la separación total de los &quot;arios&quot; de los &quot;no arios&quot;. El 9 de noviembre de 1938, los nazis destruyeron sinagogas y las vidrieras de tiendas cuyos dueños eran judíos por toda Alemania y Austria (Kristallnacht). Estas medidas apuntaban a la segregación legal y social de los judíos de los alemanes y austriacos.\n\nKristallnacht, el comienzo de la Segunda Guerra Mundial en 1939 y la invasión de la Unión Soviética en 1941 marcaron la transición a la era de la destrucción, en la cual el genocidio se convertiría en el objetivo primordial del antisemitismo nazi. Para justificar el asesinato de los judíos tanto ante los autores como ante los espectadores en Alemania y Europa, los nazis no sólo utilizaron argumentos racistas sino también argumentos derivados de estereotipos negativos antiguos, por ejemplo, que los judíos eran subversivos comunistas, especuladores y acaparadores de la guerra, y un peligro para la seguridad interna debido a su inherente deslealtad y oposición a Alemania.",
      fecha: "Enciclopedia del Holocausto",
      color: "info"
    },
    {
      titulo: "LA MÚSICA",
      descripcion: "¿Sabes que es la frecuencia 432 hz?\n\nSABÍAS QUE: FRECUENCIA 432 Hz\nEl universo, al igual que la Tierra y la naturaleza que nos rodean, tienen una frecuencia natural, que según los expertos está en los 432 hertz, y dicha frecuencia se encarga, que exista armonía a nivel universal. Porque es sana y alimenta a la conciencia.\n\nPero en 1938 en Alemania; dicha frecuencia fue cambiada al menos en la afinación de los instrumentos, y pasó a los 440 hertz. Que según los entendidos, está muy lejos de ser sana y genera una anti conciencia, enfermedades, enojo y estrés entre otros. Pero adquiere mayor presencia y quizás por esto los 440 hertz en la afinación de los instrumentos fue propuesta y se colocó como norma mundial, por culpa del jefe de propaganda nazi; Joseph Goebbels.\n\nPero aunque la gente no lo sepa, tanto la radio comercial, como la televisión también transmiten a 440 hertz,el cine también a 440 hertz.\n\nEn el caso de los instrumentos se trata de la afinación oficial con que se graba y se produce la música en todos los países. Por lo que se considera no saludable para que las personas pierdan sus dones psíquicos y místicos naturales . Pero aún así la población se ve afectada, porque esto, sin que se den cuenta, resta espiritualidad.",
      fecha: "Revistalagransabana",
      color: "info"
    },

  ];

  const eventosAleatorios = eventos.slice(0, 4);

  return (
    <>
      <div className='list'>
        {eventosAleatorios.map((evento, index) => (
          <Card border={evento.color} key={index}>
            <Card.Header>{evento.fecha}</Card.Header>
            <Card.Body>
              <Card.Title>{evento.titulo}</Card.Title>
              <Card.Text>{evento.descripcion}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ListaEventos;

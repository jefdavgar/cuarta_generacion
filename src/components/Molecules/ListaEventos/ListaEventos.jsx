import React from 'react';
import Card from 'react-bootstrap/Card';
import "./css/ListaEventos.css";

const ListaEventos = () => {
  const eventos = [
    {
      titulo: 'Concierto de música clásica',
      descripcion:
        'Disfruta de una noche inolvidable con la Orquesta Sinfónica interpretando las obras maestras de compositores reconocidos.',
      fecha: 'Mayo 15, 2023',
      color: 'dark',
    },
    {
      titulo: 'Taller de arte y creatividad',
      descripcion:
        'Explora tu lado creativo en nuestro taller de arte, donde podrás experimentar con diferentes técnicas y expresar tu visión artística.',
      fecha: 'Junio 10, 2023',
      color: 'dark',
    },
    {
      titulo: 'Charla sobre inclusión social',
      descripcion:
        'Únete a nuestra charla informativa sobre la importancia de promover la inclusión social y cómo cada persona puede contribuir a construir una sociedad más equitativa.',
      fecha: 'Julio 5, 2023',
      color: 'dark',
    },
    {
      titulo: 'Evento importante',
      descripcion:
        'Ven y participa en nuestro evento especial donde abordaremos temas relevantes para la comunidad y contaremos con destacados invitados.',
      fecha: 'Mayo 30, 2023',
      color: 'dark',
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

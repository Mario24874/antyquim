import React from 'react';

const services = [
  {
    title: 'Galvanizado en Caliente',
    description: 'Protección duradera contra la corrosión mediante inmersión en zinc fundido.',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80'
  },
  {
    title: 'Galvanizado Electrolítico',
    description: 'Recubrimiento preciso y uniforme ideal para piezas pequeñas.',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80'
  },
  {
    title: 'Tratamiento Anticorrosivo',
    description: 'Soluciones especializadas para prevenir la oxidación y corrosión.',
    image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80'
  }
];

const Catalog = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
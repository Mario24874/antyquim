import Map from '../components/Map';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Contacto</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
            
            <div className="space-y-4">
              {/* Número de teléfono con enlace a WhatsApp */}
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600" />
                <a
                  href="https://wa.me/5804149529239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  +5804149529239
                </a>
              </div>
              
              {/* Correo electrónico con enlace a mailto */}
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600" />
                <a
                  href="mailto:sergiopzonca@gmail.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  sergiopzonca@gmail.com
                </a>
              </div>
              
              {/* Dirección física */}
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" />
                <span>Carrera 1 entre calles 1 y 2, San Francisco. Barquisimeto, Venezuela</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Envíanos un Mensaje</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Nuestra Ubicación</h3>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
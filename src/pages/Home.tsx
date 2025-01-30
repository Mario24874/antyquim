import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[600px]">
        <img
          src="/LogoAntyquimRSF.png"
          alt="Galvanizado industrial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Antyquim, CA.</h1>
            <p className="text-xl md:text-2xl mb-8">
              Expertos en galvanizado y tratamientos electroquímicos
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contáctanos
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Calidad Superior</h3>
            <p className="text-gray-600">
              Utilizamos tecnología de punta y procesos certificados para garantizar
              los mejores resultados.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Experiencia</h3>
            <p className="text-gray-600">
              Más de 20 años en el mercado nos respaldan como expertos en
              tratamientos electroquímicos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Servicio Integral</h3>
            <p className="text-gray-600">
              Ofrecemos asesoría personalizada y soluciones adaptadas a sus
              necesidades específicas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
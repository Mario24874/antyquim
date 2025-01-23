

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Sobre Nosotros</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/Indus1.jpg"
            alt="Planta de galvanizado"
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            En Antyquim, nos especializamos en proporcionar servicios de galvanizado
            y tratamientos electroquímicos de la más alta calidad. Con más de dos
            décadas de experiencia, nos hemos convertido en líderes del sector.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nuestra Misión</h3>
            <p className="text-gray-700">
              Brindar soluciones de protección contra la corrosión que excedan las
              expectativas de nuestros clientes, garantizando la durabilidad y
              calidad de sus productos.
            </p>
            
            <h3 className="text-xl font-semibold">Nuestra Visión</h3>
            <p className="text-gray-700">
              Ser reconocidos como la empresa líder en tratamientos electroquímicos
              a nivel nacional, destacando por nuestra innovación y compromiso con
              la excelencia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
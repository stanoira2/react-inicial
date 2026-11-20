import Tarjeta from './components/Tarjeta.jsx'

function App() {
  return (
    <main className="contenedor">
      <Tarjeta
        nombre="Ada Lovelace"
        profesion="Matemática"
        imagen="/img/ada-lovelace.svg"
        descripcion="En 1843 publicó sus notas sobre la Máquina Analítica de Charles Babbage, donde describió lo que hoy se considera el primer algoritmo pensado para ser ejecutado por una máquina."
      />
      <Tarjeta
        nombre="Alan Turing"
        profesion="Matemático y criptoanalista"
        imagen="/img/alan-turing.svg"
        descripcion="Formalizó los conceptos de algoritmo y computación con la máquina de Turing (1936) y tuvo un papel clave en descifrar los mensajes de Enigma durante la Segunda Guerra Mundial."
      />
      <Tarjeta
        nombre="Grace Hopper"
        profesion="Científica de la computación"
        imagen="/img/grace-hopper.svg"
        descripcion="Desarrolló el A-0, uno de los primeros compiladores (1952), y su trabajo fue la base del lenguaje COBOL. Llegó a ser contraalmirante de la Marina de los Estados Unidos."
      />
    </main>
  )
}

export default App

// Este componente crea un contenedor responsive para el iframe
export const VideoPlayer = ({ src }) => (
  <div style={{
    position: 'relative',
    paddingBottom: '56.25%', // Aspect ratio 16:9
    height: 0,
    overflow: 'hidden',
    maxWidth: '100%',
    marginBottom: '1.5rem' // Espacio
  }}>
    <iframe
      src={src}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded video"
    />
  </div>
);
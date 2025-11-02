export const BlogImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: '100%',
      borderRadius: '8px', // Estilo de ejemplo
      marginBottom: '1.5rem'
    }}
  />
);
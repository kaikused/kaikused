// src/components/blog/SpotifyEmbed.jsx

export const SpotifyEmbed = ({ episodeId }) => {
  // Esta es la URL de embed correcta
  const embedUrl = `https://open.spotify.com/embed/episode/${episodeId}`;

  return (
    <iframe
      src={embedUrl}
      style={{
        borderRadius: '12px',
        marginBottom: '1.5rem'
      }}
      width="100%"
      height="152" // Puedes ajustar esto
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Embedded Spotify Podcast"
    />
  );
};
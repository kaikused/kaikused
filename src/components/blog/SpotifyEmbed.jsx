export const SpotifyEmbed = ({ episodeId }) => {
  // La URL base para los embeds de episodios
  const embedUrl = `https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator`;

  return (
    <iframe
      src={embedUrl}
      style={{
        borderRadius: '12px',
        marginBottom: '1.5rem' // Espacio
      }}
      width="100%"
      height="152"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Embedded Spotify Podcast"
    />
  );
};
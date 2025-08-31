import Screenshot from './assets/Screenshot.png'; 

export default function Card({ image, title, description }) {
  return (
    <div style={{
      border: '2px solid #f8df06ff',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '500px',
      textAlign: 'center'
    }}>
      <img 
        src={image || Screenshot} 
        alt={title} 
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h2>{title || "Utakaibu"}</h2>
      <p>{description || "Song finder using Spotify API"}</p>
    </div>
  );
}


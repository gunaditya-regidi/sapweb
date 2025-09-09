const BackgroundMusic: React.FC = () => {
  return (
    <audio autoPlay loop controls={false} style={{ display: 'none' }}>
      <source src="/audio/om.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
}

export default BackgroundMusic
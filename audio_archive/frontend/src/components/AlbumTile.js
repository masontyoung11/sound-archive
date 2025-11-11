import "./styles/album-tile.css";

export default function AlbumTile({ album }) {
  return (
    <div className="album-tile">
      <h2>{album.title}</h2>
      <p>{album.artist}</p>
    </div>
  );
}

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.js";
import AlbumTile from "./components/AlbumTile.js";

export default function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);
  return (
    <>
      <Navbar />

      <div className="albums-grid">
        {albums.map((album) => (
          <AlbumTile key={album.id} album={album} />
        ))}
      </div>
    </>
  );
}

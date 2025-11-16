import "./styles/album-tile.css";

export default function AlbumTile({ album }) {
  const formattedDate = new Date(album.release_date).toLocaleDateString(
    "en-UK"
  );

  const formatSongText = (text) => {
    const parts = text.split(/(\[.*?\])/g);

    return parts.map((part, index) => {
      if (part.startsWith("[") && part.endsWith("]")) {
        return (
          <span key={index} class="album__song-grey">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="album-tile">
      <img
        className="album__cover"
        src={album.cover_url}
        alt="Album Cover Art"
      ></img>

      <div className="album-information">
        <div className="left-side">
          <div className="top">
            {album.songs.map((song, index) => (
              <p key={index} className="album__song">
                <span className="album__song-grey">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {formatSongText(song)}
              </p>
            ))}
          </div>

          <div className="bottom">
            <p className="album__rating">{album.genre}</p>
            <p className="album__release">{album.runtime}</p>
          </div>
        </div>
        <div className="right-side">
          <div className="top">
            <div className="album__colours">
              {album.colours.map((colour, index) => (
                <div
                  key={index}
                  className="album__colour"
                  style={{ backgroundColor: `#${colour}` }}
                ></div>
              ))}
            </div>
            <h2 className="album__title">{album.title}</h2>
            <p className="album__creator">{album.artist}</p>
          </div>

          <div className="bottom">
            <p className="album__rating">{album.rating}</p>
            <p className="album__release">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

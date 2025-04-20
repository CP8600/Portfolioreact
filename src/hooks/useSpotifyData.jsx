// import { useEffect, useState } from "react";
// import { getArtistData } from "../../api/Spotify_Artists/ArtistsInfo";
// import { getAlbumInfo } from "../../api/Spotify_Artists/AlbumsInfo"; // Update the path as needed

// const useSpotifyData = () => {
//   const [artistData, setArtistData] = useState([]); // Holds artist info
//   const [albumData, setAlbumData] = useState([]); // Holds album info
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [selectedTracks, setSelectedTracks] = useState([]);

//   useEffect(() => {
//     const artists = [
//       { id: "2CIMQHirSU0MQqyYHq0eOx" }, // Deadmau5
//       { id: "57dN52uHvrHOxijzpIgu3E" }, // Ratatat
//       { id: "0du5cEVh5yTK9QJze8zA0C" }, // Bruno Mars
//       { id: "6IKlXZEFOvk9itrP1s0knJ" }, // The Red Clay Strays
//       { id: "4oUHIQIBe0LHzYfvXNW4QM" }, // Morgan Wallen
//     ];

//     const fetchData = async () => {
//       try {
//         const artistInfo = await Promise.all(
//           artists.map(async ({ id }) => {
//             const data = await getArtistData(id);
//             return data || null;
//           })
//         );
//         setArtistData(artistInfo);

//         const albumInfo = await Promise.all(
//           artistInfo.map(async (artist) => {
//             if (!artist?.id) return null;
//             const data = await getAlbumInfo(artist.id);
//             return data?.length > 0 ? data[0] : null;
//           })
//         );
//         setAlbumData(albumInfo);
//       } catch (error) {
//         console.error("Error fetching artist or album data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return {
//     artistData,
//     albumData,
//     selectedAlbum,
//     setSelectedAlbum,
//     selectedTracks,
//     setSelectedTracks,
//   };
// };

// export default useSpotifyData;

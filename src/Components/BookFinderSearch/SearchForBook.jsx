import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";

export default function Books() {
  const [bookshelves, setBookshelves] = useState(null);

  const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/books",
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/books/v1/mylibrary/bookshelves",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        setBookshelves(res.data.items);
      } catch (error) {
        console.error("Error fetching bookshelves:", error);
      }
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  return (
    <div className="p-6">
      <button
        onClick={login}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Sign in with Google to Access Books
      </button>

      {bookshelves && (
        <ul className="mt-6 space-y-2">
          {bookshelves.map((shelf) => (
            <li key={shelf.id} className="border p-2 rounded shadow">
              <strong>{shelf.title}</strong> — {shelf.volumeCount} books
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

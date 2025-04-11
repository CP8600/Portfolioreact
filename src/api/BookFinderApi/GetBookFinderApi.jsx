const GetBookFinderApi = async () => {
  try {

const token = import.meta.env



    const res = await fetch("https://www.googleapis.com/auth/books", {
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Some error! Status: ${res.status}`);
    }
    const bookData = await res.json();

    return bookData;
  } catch (error) {
    console.log(error);
  }
};

export default GetBookFinderApi;

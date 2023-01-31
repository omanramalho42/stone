//CONECTANDO O BACKEND COM O APP MOBILE
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "9epqpr09",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-31"
});

const builder = imageUrlBuilder(client);
export const urlFor = (src) => builder.image(src);

//add exception for a localhost connection (CORS API SANITY)
//sanity cors add http://localhost:19006

// sanity build

export default client;
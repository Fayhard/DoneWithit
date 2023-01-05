import Client from "./client";

const endPoint = "/listings";

const getListings = () => Client.get(endPoint);

const addListings = (listing, onUploadedProgress) => {
  const data = new FormData();

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);
  listing.image.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return Client.post(endPoint, data, {
    onUploadProgress: (progressEvent) =>
      onUploadedProgress(progressEvent.loaded / progressEvent.total),
  });
};

export default {
  getListings,
  addListings,
};

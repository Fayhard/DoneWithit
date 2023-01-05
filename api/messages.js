import Client from "./client";

const send = (message, listingId) => {
  Client.post("/messages", {
    message,
    listingId,
  });
};

export default {
  send,
};

const { readFileSync } = require("fs");
const loadBookingData = () => JSON.parse(readFileSync("./mock/mock.json"));

const resolver = {
  Query: {
    getCheckinDetails() {
      return loadBookingData();
    },
  },
};
module.exports = resolver;

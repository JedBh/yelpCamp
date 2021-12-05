const mongoose = require("mongoose");
const cities = require("./cities");
const { descriptors, places } = require("./seedHelpers");
const Campground = require("../models/campground");

// connecting to mongodb
main()
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((err) => console.log("Mongo Connection Error", err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/yelp-camp");
}

const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "61a35c87477ee874fbc7937c",
      title: `${sample(descriptors)} ${sample(places)}`,
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo dolore fuga, laudantium amet iusto hic debitis similique itaque error praesentium, omnis commodi eum autem facere laborum doloribus architecto. Ad!",
      price: price,
      images: [
        {
          url: "https://res.cloudinary.com/dwv3q539r/image/upload/v1638707142/yelpcamp/dtkjikuktujd52hqltez.jpg",
          filename: "yelpcamp/dtkjikuktujd52hqltez",
        },
        {
          url: "https://res.cloudinary.com/dwv3q539r/image/upload/v1638707141/yelpcamp/cv9rjwkjkkvytnqiqth4.jpg",
          filename: "yelpcamp/cv9rjwkjkkvytnqiqth4",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});

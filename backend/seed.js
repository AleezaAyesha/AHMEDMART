// seed.js – FULLY FIXED & MATCHED TO YOUR MODELS

require("dotenv").config();
const mongoose = require("mongoose");

// Load models
const User = require("./models/User");
const Vendor = require("./models/Vendor");
const Product = require("./models/Product");
const Zone = require("./models/Zone");

async function seed() {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✔ MongoDB connected");

    console.log("⏳ Clearing old data...");
    await User.deleteMany({});
    await Vendor.deleteMany({});
    await Product.deleteMany({});
    await Zone.deleteMany({});
    console.log("✔ Old data cleared");

    // -------------------------------
    // USERS
    // -------------------------------
    const users = await User.insertMany([
      {
        name: "John Customer",
        email: "customer@test.com",
        password: "123456",            // will be hashed automatically by User model
        role: "customer",
        phoneNumber: "9999999999",
        address: "Customer Street 1",
        credit: 100
      },
      {
        name: "Alice Admin",
        email: "admin@test.com",
        password: "admin123",
        role: "admin",
        phoneNumber: "8888888888",
        address: "Admin Office",
        credit: 0
      }
    ]);
    console.log("✔ Users added");

    // -------------------------------
    // VENDORS
    // -------------------------------
    const vendors = await Vendor.insertMany([
      {
        name: "Test Vendor Store",
        email: "vendor@test.com",
        password: "vendor123",
        phoneNumber: "7777777777",
        address: "Vendor Market Road",
        description: "Local grocery vendor",
        isActive: true
      }
    ]);
    console.log("✔ Vendors added");

    // -------------------------------
    // PRODUCTS
    // -------------------------------
    const products = await Product.insertMany([
      {
        vendor: vendors[0]._id,
        name: "Sample Product A",
        description: "A test product for AHMEDMART",
        price: 20,
        quantity: 100,
        category: "General",
        imageUrl: ""
      },
      {
        vendor: vendors[0]._id,
        name: "Sample Product B",
        description: "Another test product",
        price: 35,
        quantity: 50,
        category: "General",
        imageUrl: ""
      }
    ]);
    console.log("✔ Products added");

    // -------------------------------
    // ZONES
    // -------------------------------
    const zones = await Zone.insertMany([
      {
        name: "Zone 1",
        area: "Downtown",
        deliveryFee: 15
      },
      {
        name: "Zone 2",
        area: "Uptown",
        deliveryFee: 20
      }
    ]);

    console.log("✔ Zones added");

    console.log("\n🎉 Seeding completed successfully!");
    process.exit(0);

  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
}

seed();


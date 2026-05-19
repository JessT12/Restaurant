const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB, getDB } = require("./db");
const { ObjectId } = require("mongodb");

const app = express();

//middleware
app.use(cors());
app.use(express.json());


//routes
app.get("/", (req, res) => {
  res.send("Server is working");
});

app.get("/api/menu", async (req, res) => {
  try {
    const db = getDB();

    const menuItems = await db.collection("menu").find().toArray();

    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    console.log("POST route hit!");
    console.log(req.body);

    const db = getDB();

    const order = {
      items: req.body.cart,
      total: req.body.total,
      createdAt: new Date(),
    };

    const result = await db.collection("orders").insertOne(order);

    console.log("Inserted order:", result);

    res.json({ message: "Order placed successfully" });

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

app.put("/api/menu/:id", async (req, res) => {
  try {
    const db = getDB();

    const result = await db.collection("menu").updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );

    res.json({ message: "Menu updated", result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/api/orders/:id", async (req, res) => {
  try {
    const db = getDB();

    const result = await db.collection("orders").updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );

    res.json({ message: "Order updated", result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/api/menu/:id", async (req, res) => {
  try {
    const db = getDB();

    const result = await db.collection("menu").deleteOne({
      _id: new ObjectId(req.params.id),
    });

    res.json({ message: "Menu item deleted", result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/api/orders/:id", async (req, res) => {
  try {
    const db = getDB();

    const result = await db.collection("orders").deleteOne({
      _id: new ObjectId(req.params.id),
    });

    res.json({
      message: "Order deleted",
      result,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/usuarios", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return res.status(500).json({ error: "Error creating user" });
  }
});

app.get("/usuarios", async (req, res) => {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
});

app.put("/usuarios/:id", async (req, res) => {
  await prisma.user.update({
    where: { id: req.params.id },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  return res.status(201).json({ message: "User updated successfully" });
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: { id: req.params.id },
  });
  return res.status(200).json({ message: "User deleted successfully" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

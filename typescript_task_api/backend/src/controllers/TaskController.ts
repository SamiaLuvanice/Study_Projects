import type { Handler, Request, Response } from "express";
import { z } from "zod";
import { HttpError } from "../errors/HttpError.js";
import { Task } from "../models/Task.js";

const StoreRequestSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["low", "medium", "high"]),
});

const UpdateRequestSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(["todo", "doing", "done"]).optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
});

export class TaskController {
  // GET /api/tasks
    index: Handler = (req, res) => {
      const tasks = Task.findAll();
      return res.json(tasks);
    }

    // POST /api/tasks
    store = (req: Request, res:  Response) => {
      const parsedBody = StoreRequestSchema.parse(req.body); // Validate request body
      const newTask = Task.create(parsedBody);
      res.status(201).json(newTask);
    }

    // GET /api/tasks/:id
    show: Handler = (req, res) => {
      const { id } = req.params;
      const task = Task.findById(Number(id));
      if (!task) throw new HttpError(404, "Task not found");
      res.json(task);
    }

    // PUT /api/tasks/:id
    update: Handler = (req, res) => {
      const { id } = req.params;
      const parsedBody = UpdateRequestSchema.parse(req.body); // Validate request body
      const updatedTask = Task.update(Number(id), parsedBody);
      if (!updatedTask) throw new HttpError(404, "Task not found");
      res.json(updatedTask);
    }

    // DELETE /api/tasks/:id
    delete: Handler = (req, res) => {
      const { id } = req.params;
      const deletedTask = Task.delete(Number(id));
      if (!deletedTask) throw new HttpError(404, "Task not found");
      res.status(204).send();
    }

}

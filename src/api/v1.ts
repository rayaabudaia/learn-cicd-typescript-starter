import { Router } from "express";
import { middlewareAuth } from "./middleware.js";
import { handlerUsersGet } from "./users.js";
import { handlerNotesGet, handlerNotesCreate } from "./notes.js";

export const v1Router = Router();

v1Router.get("/users", middlewareAuth, (req, res) => {
  handlerUsersGet(req, res);
});

v1Router.get("/notes", middlewareAuth, (req, res) => {
  handlerNotesGet(req, res);
});

v1Router.post("/notes", middlewareAuth, (req, res) => {
  handlerNotesCreate(req, res);
});

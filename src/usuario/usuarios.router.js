import { Router } from "express";

import {
  cadastrar,
  alterar,
  deletar,
  logar,
} from "./usuarios.controller.js";

const router = Router();

router.post("/", cadastrar);
router.put("/:id", alterar);
router.delete("/:id", deletar);
router.post("/login", logar);

export default router;
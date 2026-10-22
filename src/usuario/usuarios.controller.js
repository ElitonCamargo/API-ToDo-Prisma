import prisma from "../prisma.js";


export async function cadastrar(req, res) {
  const { nome, email, senha, avatar } = req.body;

  const usuario = await prisma.usuarios.create({
    data: {
      nome,
      email,
      senha,
      avatar,
    },
  });

  return res.status(201).json({
    data: usuario,
    success: true,
  });
}


export async function alterar(req, res) {
  const { id } = req.params;
  const { nome, email, senha, avatar } = req.body;

  const usuario = await prisma.usuarios.update({
    where: {
      id: Number(id),
    },
    data: {
      nome,
      email,
      senha,
      avatar,
    },
  });

  return res.status(200).json({
    data: usuario,
    success: true,
  });
}

export async function deletar(req, res) {
  const { id } = req.params;

  await prisma.usuarios.delete({
    where: {
      id: Number(id),
    },
  });

  return res.status(200).json({
    data: {},
    success: true,
  });
}

export async function logar(req, res) {

  const { email, senha } = req.body;

  const usuario = await prisma.usuarios.findUnique({
    where: {
      email,
    },
  });

  console.log("usuario", usuario);

  if (!usuario) {
    return res.status(401).json({
      data: {},
      success: false,
    });
  }

  if (usuario.senha !== senha) {
    return res.status(401).json({
      data: {},
      success: false,
    });
  }

  return res.status(200).json({
    data: usuario,
    success: true,
  });
}
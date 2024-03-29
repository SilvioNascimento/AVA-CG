import express from 'express';
import { writeFile, existsSync } from 'fs';
import path from 'path';
import cors from 'cors'; // Importe o pacote cors

const app = express();
const PORT = 5173;

app.use(cors());
app.use(express.json());

const USERS_FILE = 'users.json';
const CURRENT_DIR = path.dirname(new URL(import.meta.url).pathname);
const USERS_PATH = path.join(CURRENT_DIR, USERS_FILE);

if (!existsSync(USERS_PATH)) {
  writeFile(USERS_PATH, '[]', err => {
    if (err) {
      console.error('Erro ao criar o arquivo de usuários:', err);
    } else {
      console.log('Arquivo de usuários criado com sucesso');
    }
  });
}

app.post('/Register', (req, res) => {
    const { nome, email, senha } = req.body;
    
    const userData = { nome, email, senha };
    writeFile(USERS_PATH, JSON.stringify(userData), { flag: 'a' }, err => {
      if (err) {
        console.error('Erro ao salvar os dados do usuário:', err);
        res.status(500).json({ error: 'Erro ao salvar os dados do usuário' });
        return;
      }
      console.log('Dados do usuário salvos com sucesso');
      res.status(200).json({ message: 'Usuário cadastrado com sucesso' });
    });
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

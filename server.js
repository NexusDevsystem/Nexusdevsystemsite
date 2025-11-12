import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuração do ambiente
dotenv.config();

// Obter o diretório atual (equivalente a __dirname no ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173', // URL padrão do Vite
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta dist (após build) ou diretamente do src
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src')));

// Rota para o callback OAuth
app.post('/api/oauth/callback', async (req, res) => {
  try {
    const { code, state, redirect_uri } = req.body;

    console.log('Recebendo callback OAuth:', { code, state, redirect_uri });

    // Validação básica
    if (!code) {
      return res.status(400).json({ 
        error: 'Authorization code is required' 
      });
    }

    // Aqui você implementaria a lógica para trocar o authorization code por tokens
    // Exemplo com fetch para um provedor OAuth (substitua conforme necessário):
    /*
    const tokenResponse = await fetch('https://provider.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.REDIRECT_URI || 'http://localhost:4000/api/oauth/callback',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      })
    });

    const tokenData = await tokenResponse.json();
    */

    // Por enquanto, apenas retornamos sucesso
    res.json({ 
      success: true, 
      message: 'Authorization code received and processed',
      codeReceived: !!code,
      state
    });

  } catch (error) {
    console.error('Erro no callback OAuth:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});

// Rota para trocar o authorization code por tokens (separada)
app.post('/api/exchange-code', async (req, res) => {
  try {
    const { code, redirect_uri } = req.body;

    if (!code) {
      return res.status(400).json({ 
        error: 'Authorization code is required' 
      });
    }

    // Exemplo de troca real do código por tokens (descomente e ajuste conforme necessário)
    /*
    const tokenResponse = await fetch('https://provider.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(
          `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
        ).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri || process.env.REDIRECT_URI
      })
    });

    if (!tokenResponse.ok) {
      throw new Error(`Token exchange failed: ${tokenResponse.statusText}`);
    }

    const tokenData = await tokenResponse.json();
    */

    // Simulando resposta de sucesso
    res.json({
      success: true,
      // tokens: tokenData, // descomente quando implementar a troca real
      message: 'Tokens exchanged successfully'
    });

  } catch (error) {
    console.error('Erro na troca de código por tokens:', error);
    res.status(500).json({ 
      error: 'Failed to exchange authorization code for tokens',
      details: error.message 
    });
  }
});

// Rota para testar o callback (GET para facilitar testes manuais)
app.get('/api/oauth/callback', (req, res) => {
  const { code, state, error } = req.query;
  
  if (error) {
    console.log('Erro OAuth recebido:', error);
    return res.status(400).json({ error, error_description: req.query.error_description });
  }

  console.log('Callback OAuth GET recebido:', { code, state });
  
  res.json({ 
    received: true, 
    code: !!code, 
    state, 
    message: code ? 'Authorization code received' : 'No code in request' 
  });
});

// Rota para health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Rota para callback HTML (caso seja acessado diretamente)
app.get('/callback', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'callback.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend proxy configured to: ${process.env.CLIENT_URL || 'http://localhost:5173'}`);
  console.log('Endpoints disponíveis:');
  console.log(`  POST /api/oauth/callback - Recebe código de autorização`);
  console.log(`  POST /api/exchange-code - Troca código por tokens`);
  console.log(`  GET  /health - Health check`);
});

export default app;
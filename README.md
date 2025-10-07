# Nexus Devsystem (nexusweb)

Este repositório contém um site React + Vite. Abaixo estão instruções para deploy automático usando GitHub Pages (via GitHub Actions) ou usando Vercel.

## Deploy automático (GitHub Pages)

O workflow GitHub Actions `.github/workflows/deploy.yml` está configurado para:
- Rodar em pushes na branch `main`.
- Instalar dependências com `npm ci`.
- Rodar `npm run build` passando `--base "/<repo>/"` para que a build funcione quando hospedada em `https://<user>.github.io/<repo>/`.
- Publicar o diretório `dist` na branch `gh-pages` usando `peaceiris/actions-gh-pages`.

O que você precisa fazer:
1. Certifique-se de que a branch padrão do GitHub é `main` (ou ajuste o workflow).
2. No repositório remoto (`https://github.com/NexusDevsystem/nexusweb`) basta empurrar para `main` e o workflow fará o deploy automaticamente.
3. Nas configurações do repositório no GitHub: Settings → Pages, defina o Source para a branch `gh-pages` (root). Após alguns minutos, seu site estará disponível em:

	https://<username>.github.io/nexusweb

Substitua `<username>` pelo nome do dono do repositório (por exemplo `NexusDevsystem`).

## Deploy no Vercel (opção alternativa)

O projeto já contém um `vercel.json` preparado para deploy estático com funções em `/api`.

Para deploy no Vercel:
1. Crie uma conta no Vercel e importe o repositório `https://github.com/NexusDevsystem/nexusweb`.
2. Configure as variáveis de ambiente necessárias (se houver) e habilite deploy automático.

## Notas técnicas e ajustes
- O `vite.config.js` atualmente não define `base`. O workflow adiciona `--base` na hora do build para GitHub Pages. Se preferir manter o `base` no config, adicione `base: '/nexusweb/'` em `vite.config.js`.
- Se seu site usa rotas do lado do cliente, você pode precisar de um arquivo `_redirects` ou configurar o servidor (Vercel cuida disso automaticamente).

## Testar build localmente
1. Instale dependências: `npm ci`
2. Rodar build: `npm run build`
3. Verifique o conteúdo de `dist/`.

---
Se quiser que eu também crie o deploy diretamente no repositório remoto (push + configurar GitHub Pages settings) diga qual conta/organização devo usar ou confirme que devo apenas preparar os arquivos (já feitos). Posso também criar um deploy no Vercel e configurar variáveis se você me fornecer acesso/token.


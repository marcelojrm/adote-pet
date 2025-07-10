# AdotePet - Aplicativo de Adoção de Pets

Este é um aplicativo web responsivo para adoção, divulgação e apadrinhamento de pets, desenvolvido com HTML, CSS e JavaScript puro.

## 🚀 Deploy no Vercel

### Opção 1: Deploy via GitHub (Recomendado)

1. **Faça upload dos arquivos para um repositório GitHub:**
   - Crie um novo repositório no GitHub
   - Faça upload dos arquivos `index.html`, `style.css` e este `README.md`

2. **Conecte ao Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Selecione seu repositório
   - Clique em "Deploy"

### Opção 2: Deploy Direto via Vercel CLI

1. **Instale o Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Faça login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Opção 3: Deploy via Interface Web do Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione "Browse all templates"
4. Escolha "Static Site"
5. Faça upload dos arquivos `index.html` e `style.css`
6. Clique em "Deploy"

## 📱 Funcionalidades

- ✅ **Tela de Login** - Autenticação de usuário
- ✅ **Menu Principal** - Navegação entre funcionalidades
- ✅ **Quero Adotar** - Mapa interativo para busca de pets
- ✅ **Quero Divulgar** - Formulário completo para cadastro de pets
- ✅ **Quero Apadrinhar** - Sistema de doações com valores pré-definidos
- ✅ **Minha Conta** - Perfil do usuário e configurações

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com Flexbox e Grid)
- JavaScript (ES6+)
- Design Responsivo
- Fontes Google (Inter)

## 📋 Estrutura do Projeto

```
adote-pet/
├── index.html          # Arquivo principal
├── style.css           # Estilos CSS
└── README.md           # Documentação
```

## 🎨 Design

O design segue as especificações do protótipo Figma fornecido, com:
- Paleta de cores verde (#99A892) e cinza (#D9D9D9)
- Tipografia Inter
- Interface mobile-first
- Navegação intuitiva entre telas

## 🔧 Solução de Problemas

### Cache do Navegador
Se as alterações não aparecerem após o deploy:
1. Limpe o cache do navegador (Ctrl+F5 ou Cmd+Shift+R)
2. Aguarde alguns minutos para propagação do CDN
3. Teste em modo incógnito

### Problemas de Deploy
- Certifique-se de que o arquivo `index.html` está na raiz do projeto
- Verifique se não há erros de sintaxe no JavaScript
- Confirme que todas as imagens externas estão acessíveis

## 📞 Suporte

Em caso de problemas com o deploy, verifique:
1. Console do navegador para erros JavaScript
2. Network tab para recursos não carregados
3. Logs do Vercel para erros de build

---

**Desenvolvido com ❤️ para conectar pets e famílias**


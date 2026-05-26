# Media Guide Agency

Site institucional da **Media Guide Agency** - agência criativa angolana especializada em branding, design, marketing digital, produção audiovisual e comunicação 360º.

## Stack

- **React 19** + **TypeScript 6**
- **Vite 8** (bundler e dev server)
- **Tailwind CSS v4** (estilização utilitária)
- **Framer Motion 12** (animações scroll-triggered)
- **ESLint + Prettier** (qualidade de código)

## Pré-requisitos

- Node.js 20 ou 22
- npm

## Começar

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia servidor de desenvolvimento Vite |
| `npm run build` | Typecheck (`tsc -b`) + bundler (`vite build`) |
| `npm run preview` | Preview da build de produção |
| `npm run lint` | ESLint em `.ts,.tsx` |
| `npm run format` | Prettier em `src/` |

## Estrutura

```
src/
├── main.tsx              # Ponto de entrada
├── App.tsx               # Componente raiz (hero + seções)
├── index.css             # Tailwind + tema (cores vermelho/amarelo)
└── components/
    ├── About/            # Quem somos + timeline + contadores
    ├── Services/         # Serviços 360º
    ├── Portfolio/        # Portfolio de projectos
    ├── Contact/          # Contacto + valores
    └── Footer/           # Rodapé
```

## CI/CD

**GitHub Actions** - executa em push/PR para `main` (Node 20 e 22):

1. `lint:check`
2. `format:check`
3. `build`

## Deploy

Automatizado via **Vercel** (projecto `mediaguideagency`). A detecção de framework Vite é automática.

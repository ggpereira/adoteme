# Roteiro do vídeo: AdoteMe no LinkedIn

**Duração alvo:** 30 a 40 segundos · **Formato final:** 4:5 (1080×1350) · **Sem narração.** O texto aparece na tela e a trilha fica baixa.

## Gravação automática (recomendado)

O [Maestro](https://maestro.dev) executa o roteiro sozinho no emulador e grava **um clipe por cena** em `docs/linkedin/<data-hora>/`:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/record-demo.ps1            # grava
powershell -ExecutionPolicy Bypass -File scripts/record-demo.ps1 -NoRecord  # só testa os fluxos
powershell -ExecutionPolicy Bypass -File scripts/record-demo.ps1 -Manual    # você navega e aperta Enter
```

- As cenas ficam em `.maestro/demo/01-home.yaml` … `05-profile.yaml`. Para mudar o roteiro, edite esses arquivos.
- O Maestro é mais lento que uma pessoa entre os passos, então acelere os clipes no editor (1,5–3×) e corte as esperas.
- Requisitos: Java 17+ e o Maestro CLI em `%USERPROFILE%\maestro-cli` (ou `maestro` no PATH).

## Montagem automática do vídeo (Remotion)

O projeto [`video/`](../../video) monta o vídeo final a partir dos clipes mais recentes, com capa, mockup de celular, legendas animadas e encerramento, em 4:5:

```powershell
cd video
npm install         # só na primeira vez
npm run studio      # pré-visualização ao vivo no navegador, para ajustar
npm run render      # gera docs/linkedin/adoteme-linkedin.mp4
```

- Textos, velocidade (`playbackRate`) e cortes (`trimStart` / `maxSourceSeconds`) de cada cena ficam em [`video/src/config.ts`](../../video/src/config.ts).

## Antes de gravar

- [ ] Emulador aberto com o **build release** instalado (`npm run android:release`). A primeira cena reabre o app sozinha, então não importa em qual tela ele está
- [ ] Localização definida no emulador (Extended Controls → Location → Set Location), para o Mapa carregar
- [ ] Faça um ensaio sem gravar e confira se nada trava
- [ ] Rode `powershell -ExecutionPolicy Bypass -File scripts/record-demo.ps1`. O script ativa a barra de status limpa e começa a gravar

**Dica:** faça gestos lentos e espere de 1 a 2s depois de cada toque. Cortar no editor é fácil, mas recuperar um gesto rápido demais não dá.

## Cenas

| # | Tela | Ação | Duração | Texto na tela |
|---|---|---|---|---|
| 0 | Capa (editor) | Logo/nome + mockup do celular parado na Home | 2s | **AdoteMe** · adoção e resgate de animais |
| 1 | Home | Rolar devagar até "Em destaque" e voltar um pouco | 5s | Encontre seu novo melhor amigo 🐾 |
| 2 | Explorar | Tocar na aba (o slide aparece) → tocar no filtro **Cães** | 4s | Explore pets perto de você |
| 3 | Detalhe | Tocar no card da **Mel** → tocar no ❤️ → rolar até "Quero adotar" | 6s | Conheça cada história |
| 4 | Explorar | Tocar em voltar | 1s | — |
| 5 | Mapa | Tocar na aba Mapa e esperar o mapa carregar | 4s | Veja resgates na sua região |
| 6 | Resgate | Tocar em **Enviar** vazio (aparecem os erros) → preencher localização, telefone e descrição → **Urgência Alta** → Enviar | 8s | Reporte animais em risco em segundos |
| 7 | Sucesso | Tela "Resgate registrado!" | 2s | — |
| 8 | Perfil | Tocar na aba Perfil e rolar até o menu | 4s | Acompanhe favoritos e adoções |
| 9 | Encerramento (editor) | Fundo `#c45e2a`, texto centralizado | 3s | Expo · React Native · TypeScript · link do GitHub |

**Dados para preencher no Resgate** (já testados na validação):
- Localização: `Av. Paulista, 1578 — Bela Vista`
- Telefone: `(11) 99999-0000`
- Descrição: `Cachorro ferido na calçada, sozinho e assustado.`

## Edição (CapCut desktop ou Canva)

1. Projeto em **1080×1350**, com fundo creme `#fdf6ee`.
2. Coloque o vídeo dentro de um **mockup de celular** (CapCut: *Elementos → "phone frame"*; Canva: *Elementos → "smartphone mockup"*), centralizado, ocupando cerca de 75% da altura.
3. Corte as pausas e os erros. Acelere para **1,2–1,5×** os trechos de preenchimento do formulário.
4. Textos da tabela acima, na parte de cima: fonte **Playfair Display** (a mesma do app), cor `#2d1f0f`, com animação de entrada simples.
5. Transições entre cenas: corte seco ou *slide*, iguais às do app. Evite efeitos chamativos.
6. Trilha instrumental leve da biblioteca do editor, com volume baixo.
7. Exporte em **MP4, 1080p, 30fps**.
8. Thumbnail: um frame da Home ou do Detalhe com o texto **"Construí um app de adoção de animais 🐾"**.

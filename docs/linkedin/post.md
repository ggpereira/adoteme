# Texto do post: AdoteMe

Escolha uma versão e ajuste com a sua voz.
Suba o vídeo **direto no LinkedIn** (não como link do YouTube) e coloque o link do repositório **no primeiro comentário**, porque posts com links externos costumam ter menos alcance.

---

## Versão 1: foco no produto

Todo dia, milhares de animais esperam por um lar ou por alguém que pare para ajudar. 🐾

Por isso comecei a construir o **AdoteMe**, um app mobile que conecta pessoas a animais para adoção e facilita o resgate de quem está em risco.

Neste protótipo você pode:
🏠 Descobrir pets disponíveis perto de você
🔎 Filtrar por espécie e conhecer a história de cada animal
🗺️ Ver no mapa os chamados de resgate da sua região
🚨 Reportar um animal em risco em poucos segundos, com foto e nível de urgência
👤 Acompanhar seus favoritos e adoções

Ainda é um protótipo, mas cada tela já foi pensada para tornar a adoção e o resgate mais simples.

O que você acrescentaria num app como esse? 👇

#ReactNative #Expo #MobileDevelopment #AdocaoResponsavel #Pets

---

## Versão 2: foco técnico

Construí o protótipo do **AdoteMe**, um app de adoção e resgate de animais, e quero compartilhar algumas decisões técnicas. 🐾

📱 **Stack:** Expo SDK 56, React Native 0.85, React 19 e TypeScript strict, com React Compiler ativado.

Alguns pontos que gostei de resolver:

🧩 **FormBuilder orientado a configuração.** O formulário de resgate é um objeto de config. Por baixo tem react-hook-form + zod, e as regras de validação ficam num mapa extensível. Um tipo de campo ou uma regra nova é uma entrada no registro, sem mexer no builder (Open/Closed na prática).

🌫️ **Blur consistente na tab bar** em Android e iOS com expo-blur, usando o `BlurTargetView` do Android e transições em slide entre as abas.

🗺️ **Mapa de resgates** com react-native-maps + expo-location, incluindo um fallback de localização para emuladores.

📸 **Câmera e galeria** com expo-image-picker, com tratamento de permissões.

🏗️ **Arquitetura:** SOLID e SRP como regra, uma camada de serviço para os dados (pronta para trocar o mock pela API), navegação tipada e tokens de design compartilhados.

🎨 O design nasceu no **Figma Make** e foi traduzido para React Native.

Próximos passos: backend, autenticação e o fluxo completo de adoção.

Feedbacks são muito bem-vindos! 🙌

🔗 Código: https://github.com/ggpereira/adoteme (no primeiro comentário)

#ReactNative #Expo #TypeScript #MobileDevelopment #SoftwareArchitecture #SOLID

---

## Primeiro comentário (para as duas versões)

🔗 Código do projeto: https://github.com/ggpereira/adoteme

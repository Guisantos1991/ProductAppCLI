# 📦 ProductAppCLI

A clean React Native CLI demo app implementing a simple e-commerce flow with navigation, custom components, styled-components, asset handling, and TypeScript support.

## ✨ Features

* 🛠️ **React Native CLI** (version 0.80.0) – no Expo dependency
* 🤭 **React Navigation (Native Stack)** – navigation between three screens
* 👩‍🎨 **Styled-components** – component-level styling
* 📂 **Flat list of mock products** with filtering and search
* 📷 **Image assets** (e.g., product images, icons) managed with local files
* ⚖️ **TypeScript** – full type safety for navigation and components
* 🔍 **Modular code structure**:

  * `src/screens`
  * `src/components`
  * `src/styles`
  * `src/data`

---

## 🚀 Quick Start

### Prerequisites

* Node.js ≥ 18
* CocoaPods (on macOS for iOS builds)
* Xcode (for iOS) or Android Studio & emulator (for Android)

### Setup

```bash
git clone https://github.com/Guisantos1991/ProductAppCLI.git
cd ProductAppCLI
npm install
cd ios && pod install && cd ..
```

### Run the App

* **iOS**:

  ```bash
  npx react-native run-ios
  ```
* **Android** (start emulator first):

  ```bash
  npx react-native run-android
  ```

### Metro Bundler

```bash
npm start -- --reset-cache
```

---

## 📂 Project Structure

```
/src
 ├─ components/       # reusable UI elements
 │     └─ button.tsx, searchBar.tsx
 ├─ data/             # mock product data (Products.ts)
 ├─ screens/          # "Index", "MainScreen", "ProductCard"
 └─ styles/           # styled-components files
      └─ HomeStyles.ts, MainStyles.ts, ProductsStyles.ts, cardStyles.ts
/App.tsx              # root navigator (StackNavigator)
/routes/index.ts      # RootStackParamList type definitions
```

---

## ✅ Navigation Types (TypeScript)

Defined in `routes/index.ts`:

```ts
export type RootStackParamList = {
  Index: undefined;
  Main: undefined;
  Product: { productId: number };
};
```

---

## 🎨 Assets

* Fonts: custom `.ttf` fonts in `assets/font/`
* Images: local `.jpg` and `.png` assets in `assets/images/` and `assets/icon/`
* Icons: local images used inside `TouchableOpacity` buttons

---

## 📈 Future Improvements

* ✅ Use real backend/API
* ✅ Add cart state management (e.g., Redux or Context)
* ✅ Improve UI/UX with icon library and animations
* ✅ Add offline image handling or thumbnail caching
* ✅ Add unit tests with Jest

---

# 🔀 Versão em Português

## 📦 ProductAppCLI

App de demonstração em React Native CLI com fluxo básico de e‑commerce: navegação entre telas, filtros de produtos e detalhes.

## ⚖️ Funcionalidades

* React Native CLI (v0.80.0), sem Expo
* Navegação com React Navigation (Native Stack)
* Estilização com styled‑components
* Lista de produtos fictícios com busca e filtros
* Assets de imagens e ícones locais
* Suporte TypeScript para navegação
* Estrutura modular de pastas

## ⚡ Iniciando

**Pré-requisitos**:

* Node.js ≥ 18
* CocoaPods (macOS)
* Xcode ou Android Studio + emulador

**Instalação**:

```bash
git clone https://github.com/Guisantos1991/ProductAppCLI.git
cd ProductAppCLI
npm install
cd ios && pod install && cd ..
```

**Executando**:

* iOS:

  ```bash
  npx react-native run-ios
  ```
* Android:

  ```bash
  npx react-native run-android
  ```
* Metro Bundler:

  ```bash
  npm start -- --reset-cache
  ```

## 📂 Estrutura

* `src/components/`: botões e searchBar reutilizáveis
* `src/data/Products.ts`: dados fictícios
* `src/screens/`: Index, MainScreen, ProductCard
* `src/styles/`: styled‑components para cada tela
* `App.tsx`: sistema de rotas
* `routes/index.ts`: tipo `RootStackParamList`

## 🔌 Como usar

1. Abra o app
2. Aperte **Get Start**
3. Use busca e filtros
4. Toque em um produto para ver detalhes
5. Volte com o botão

---

## 💡 Contribuições bem-vindas!

Aberto a sugestões, issues, PRs :)

---

## 📄 Licença

Nenhuma especificada. Pode escolher MIT para uso público.

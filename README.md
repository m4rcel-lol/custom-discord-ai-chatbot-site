<div align="center">
  
  <!-- PROJECT LOGO OR BANNER -->
  <!-- Replace the src below with a screenshot of your chat interface or a custom banner -->
  <img src="https://raw.githubusercontent.com/m4rcel-lol/assets/13ebd5bfa7abe5ee591107b9a7b411f3e3ae2d13/Gemini-API-IoT-banner_1.original.png" alt="Discord AI Chat Banner" width="100%" style="border-radius: 10px; border: 2px solid #2b2d31;" />

  <br />
  <br />

  # 🤖 Discord-Style Gemini AI Temporary Chatbot Page
  
  **A pixel-perfect recreation of the modern Discord UI, powered by Google's Gemini AI. Messages do not get saved after refreshing the page.**

  <p>
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-configuration">Configuration</a>
  </p>

  <!-- BADGES -->
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" />
  </p>
</div>

---

## 📖 About The Project

This project is a fully functional web-based chat interface that meticulously recreates the look and feel of Discord's Direct Message (DM) UI. It connects to the **Google Gemini API** to provide an intelligent, conversational AI bot that acts just like a user in your DMs.

It features the latest Discord design trends, including the dark theme palette, rounded UI elements, "Nitro" style gradient profiles, and custom role badges.

## ✨ Key Features

*   **🎨 Authentic UI/UX:** Custom-built components mimicking Discord's Chat, Sidebar, and Profile views.
*   **🧠 Powered by Gemini:** Real-time conversational AI using the `gemini-2.5-flash` model.
*   **💎 Premium Aesthetics:**
    *   Nitro-style animated gradient themes for profiles.
    *   Full-screen User Profile Modals with banners.
    *   Mini-profile popouts on click.
*   **📝 Rich Text Support:** Full Markdown rendering (Bold, Italic, Code Blocks) for AI responses.
*   **🏷️ Custom Badges:** Includes high-quality assets for "Verified AI", "Staff", "Bug Hunter", and "Nitro" badges.
*   **⚡ Responsive Design:** Mobile-friendly layout (Sidebar collapses on smaller screens).
*   **🎬 Smooth Animations:** Custom CSS keyframes for fade-ins, scale-ups, and slide transitions.

## 📸 Screenshots

<!-- Replace these links with actual screenshots of your app -->

| **Main Chat Interface** | **Profile Popout (Nitro Style)** |
|:---:|:---:|
| <img src="https://raw.githubusercontent.com/m4rcel-lol/assets/main/Screenshot_1.png" alt="Main Chat" width="400"/> | <img src="https://raw.githubusercontent.com/m4rcel-lol/assets/main/Screenshot_2.png" alt="Mini Profile" width="400"/> |

| **Full Profile Modal** | **Sidebar Preview** |
|:---:|:---:|
| <img src="https://raw.githubusercontent.com/m4rcel-lol/assets/main/Screenshot_4.png" alt="Full Profile" width="400"/> | <img src="https://raw.githubusercontent.com/m4rcel-lol/assets/main/Screenshot_3.png" alt="Sidebar" width="400"/> |

## 🛠️ Tech Stack

*   **Frontend Framework:** React 19
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS + Vanilla CSS (for custom scrollbars & animations)
*   **Icons:** Lucide React
*   **AI Integration:** @google/genai SDK
*   **Markdown:** react-markdown

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/yourusername/discord-ai-chat.git
    ```
2.  **Install NPM packages**
    ```sh
    npm install
    ```
3.  **Set up your API Key**
    *   Create a `.env` file in the root directory.
    *   Add your Google Gemini API key:
    ```env
    API_KEY=your_google_gemini_api_key_here
    ```
    *(Note: You can get an API key from [Google AI Studio](https://aistudio.google.com/))*

4.  **Run the application**
    ```sh
    npm run dev
    ```

## 🎨 Customization

You can easily customize the bot's personality or the UI assets:

*   **Bot Persona:** Edit the `systemInstruction` in `services/geminiService.ts`.
*   **Images/Assets:** Updated URLs in `components/ChatArea.tsx` and `components/UserProfileSidebar.tsx`.
*   **Badges:** Add or remove badges in `components/Badges.tsx`.

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📝 License

Distributed under the MIT License, however it may be a risk to use it, since it mimics the real look of Discord and may get you in trouble. See `LICENSE` for more information.

---

<div align="center">
  <p>Made with ❤️ and patience by m5rcel using React & Gemini</p>
</div>
# Chef Gordon - WhatsApp Cooking Assistant 🤖👨‍🍳

A sophisticated WhatsApp bot that serves as your personal cooking assistant, providing recipe suggestions, meal planning, cooking tips, and culinary guidance through an interactive chat interface.

## 🌟 Features

### Core Functionality
- **📋 Today's Menu** - View daily curated recipes with step-by-step instructions
- **📅 Meal Booking** - Schedule cooking sessions and meal preparation slots
- **👨‍🍳 Custom Recipes** - Generate personalized recipes based on available ingredients
- **🥗 Dietary Planning** - Get meal suggestions tailored to dietary preferences (vegetarian, keto, gluten-free, etc.)
- **🛒 Grocery Lists** - Generate shopping lists based on planned meals
- **🥡 Leftover Magic** - Transform leftovers into delicious new dishes
- **✨ Cooking Tips** - Expert cooking hacks and techniques
- **📞 Support** - Direct access to culinary support and assistance

### Advanced Features
- **📸 Image Recognition** - Upload ingredient photos for recipe suggestions
- **🥗 Nutritional Info** - Get detailed nutritional information for meals and ingredients
- **📖 Meal Information** - Learn about dish origins, history, and cultural significance
- **⏰ Time-Based Suggestions** - Get meal recommendations based on time of day
- **🌍 Geographic Cuisine** - Explore regional dishes and international cuisines

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- WhatsApp account for bot authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chefgordon-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the bot**
   ```bash
   npm start
   ```

4. **Authenticate with WhatsApp**
   - The bot will generate a QR code in the terminal
   - Scan the QR code with your WhatsApp mobile app
   - The bot will be ready to receive messages

## 📱 Usage

Once connected, users can interact with Chef Gordon by sending messages to the bot's WhatsApp number. The bot provides an interactive menu system:

1. **Main Menu Options** - Users can select from 13 different services
2. **Conversational Flow** - The bot maintains context and guides users through multi-step processes
3. **Personalized Responses** - Each user's session is tracked for personalized assistance

### Example Interactions

```
User: "1" (View Today's Menu)
Bot: 🍴 Today's Menu:
     1. Creamy Mushroom Risotto 🍄
     2. Grilled Lemon Chicken 🍋
     3. Vegan Buddha Bowl 🌱

User: "3" (Custom Recipe)
Bot: 👨‍🍳 Tell me the ingredients you have, separated by commas...
```

## 🏗️ Project Structure

```
chefgordon-main/
├── src/
│   ├── server.js          # Main server file
│   ├── storage.js         # User session storage
│   ├── stages.js          # Stage management
│   ├── menu.js           # Menu configurations
│   ├── stages/           # Individual conversation stages
│   │   ├── 0.js         # Initial welcome stage
│   │   ├── 1.js         # Main menu handler
│   │   ├── 2.js         # Custom recipe stage
│   │   └── ...          # Additional stages
│   └── cut/             # Authentication modules
│       ├── auth/         # Authentication stages
│       └── registration/ # Registration stages
├── assets/              # Image assets
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **WhatsApp API**: whatsapp-web.js
- **HTTP Client**: Axios
- **QR Code**: qrcode-terminal
- **AI Integration**: OpenAI API
- **Development**: Nodemon for hot reloading

## 🔧 Configuration

The bot uses several key dependencies:

- `whatsapp-web.js` - WhatsApp Web API integration
- `axios` - HTTP requests for external APIs
- `openai` - AI-powered responses and recipe generation
- `qrcode-terminal` - QR code display for authentication

## 🚀 Development

### Running in Development Mode
```bash
npm run dev
```

### Project Scripts
- `npm start` - Start the production server
- `npm run dev` - Start with nodemon for development

## 📊 Features in Detail

### 1. Menu System
- Daily curated recipes
- Step-by-step cooking instructions
- Nutritional information
- Difficulty levels and cooking times

### 2. Custom Recipe Generation
- Input available ingredients
- AI-powered recipe creation
- Dietary restriction consideration
- Cooking time and difficulty estimation

### 3. Meal Planning
- Dietary preference tracking
- Weekly meal planning
- Grocery list generation
- Calorie and nutrition tracking

### 4. Interactive Support
- Real-time cooking assistance
- Ingredient substitution suggestions
- Cooking technique guidance
- Troubleshooting help

## 🔒 Security & Privacy

- Local authentication storage
- Session-based user tracking
- Secure WhatsApp Web integration
- No persistent data storage (in-memory sessions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Use the in-app support feature (option 8 in the main menu)

## 🙏 Acknowledgments

- Built with Node.js and Express
- Powered by OpenAI for intelligent responses
- WhatsApp Web.js for messaging integration
- Community contributors and testers

---

**Chef Gordon** - Making cooking accessible, one recipe at a time! 🍳✨ 
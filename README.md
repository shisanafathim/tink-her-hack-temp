<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# SafeZone 🎯

## Basic Details

### Team Name: Evolve

### Team Members
- Member 1: [HISANA FATHIM S] - [COLLEGE OF ENGINEERING ATTINGAL]
- Member 2: [THANISHMA SHANOJE] - [COLLEGE OF ENGINEERING ATTINGAL]

### Hosted Project Link
[Backend (Render)](https://safezone-backend-u5vd.onrender.com/)
[Frontend (Vercel)](https://evolve-rose.vercel.app/)

### Project Description
SafeZone is a lightweight safety application designed to provide immediate SOS alerts. With a single tap, it fetches your live location, notifies emergency contacts via SMS and WhatsApp, and provides shortcuts to nearby safe spots like police stations and hospitals.

### The Problem statement
Personal safety is a major concern, especially when alone or in unfamiliar areas. Traditional methods of seeking help (making a call) can be slow or impossible in high-stress situations.

### The Solution
SafeZone simplifies emergency signaling by automating location sharing and multi-channel alerting (SMS, WhatsApp, Manual Fallback) through a simple, high-visibility interface.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: JavaScript (ES6+), HTML5, CSS3
- Frameworks used: Express.js (Backend)
- Libraries used: Leaflet.js (Maps), Axios, CORS, Dotenv
- Tools used: VS Code, Git, Render, Vercel

**For Hardware:**
- Main components: [List main components]
- Specifications: [Technical specifications]
- Tools required: [List tools needed]

---

## Features

List the key features of your project:
- Feature 1: Instant SOS Alert - Sends automated SMS with live location.
- Feature 2: High-Accuracy GPS Tracking - Real-time location display on interactive map.
- Feature 3: Multi-channel Notification - WhatsApp and manual SMS fallback options.
- Feature 4: Safe Spot Navigator - One-tap search for nearby police stations and hospitals.

---

## Implementation

### For Software:

#### Installation
```bash
# Backend
cd backend
npm install

# Frontend
# No installation needed for vanilla HTML/CSS/JS
```

#### Run
```bash
# Backend
cd backend
npm start

# Frontend
# Open frontend/index.html in a browser or use a Live Server
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

<img src="image.png" alt="SCREENSHOT 1" width="500" height="500">
<img src="img2.png" alt="SCREENSHOT 2" width="500" height="500">

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**

![Workflow](docs/workflow.png)
*Add caption explaining your workflow*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://safezone-backend.onrender.com`

##### Endpoints

**POST /send-sos**
- **Description:** Receives emergency details and triggers real-time SOS alerts.
- **Request Body:**
```json
{
  "name": "User Name",
  "emergencyContact": "+91XXXXXXXXXX",
  "location": "Lat: 12.345, Lng: 67.890"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "SOS Alert sent successfully via Fast2SMS."
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---


## Project Demo

### Video
[https://drive.google.com/file/d/1LgXmhbbAFjlHJ1wAREbnP1B4mlIPzpVQ/view?usp=drive_link]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** Antigravity (Advanced Agentic AI)

**Purpose:** 
- Architecture design and backend-frontend integration.
- Implementing SOS fallback mechanisms and Fast2SMS API integration.
- Deployment preparation and documentation support.

**Key Prompts Used:**
- "Connecting Frontend and Backend"
- "Implementing SOS Fallback"
- "Integrate real Fast2SMS API"
- "Deploy the project"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub

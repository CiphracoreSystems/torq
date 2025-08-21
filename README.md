# TorqSpec Pro
[![Netlify Status](https://api.netlify.com/api/v1/badges/91ee9d18-9e3d-4de7-ae70-25d1010ec09a/deploy-status)](https://app.netlify.com/projects/amttorque/deploys)

**🔗 Live Tool: [https://amttorque.netlify.app/](https://amttorque.netlify.app/)**

Professional aviation torque calculator with range input, setpoint guidance, visual gauges, and offline capability. Built for real maintenance environments.

## Features

✈️ **Aviation Professional** - Complete torque specification workflow  
🎯 **Range Input** - Handle "25-30 N⋅m" specifications with Low/Mid/High values  
🔧 **Setpoint Calculation** - Account for your torque wrench resolution and rounding policy  
📊 **Visual Gauges** - See exactly where your setpoint falls within the range  
🎨 **Quality Indicators** - Real-time feedback on setpoint accuracy  
🌐 **Bilingual** - Complete English/Spanish interface with aviation terminology  
📱 **PWA Ready** - Install as app, works offline, mobile-optimized  
🍔 **Professional UI** - Clean hamburger menu interface  
📋 **Smart Copy** - Copy setpoints with full metadata for documentation  
📖 **Help System** - Built-in user manual and guidance  
🎨 **Dark/Light Themes** - Comfortable viewing in any environment  

## Professional Workflow

### Single Value Conversion
1. **Enter Value** - Type "25" or any torque value
2. **Select Units** - Choose from all aviation-standard units
3. **Set Tool** - Match your torque wrench units and resolution
4. **Get Setpoint** - See exact value to set on your wrench

### Range Specifications  
1. **Enter Range** - Type "25-30" for range specifications
2. **Visual Gauge** - See Low/Mid/High positions graphically
3. **Setpoint Guidance** - Get recommended setting based on midpoint
4. **Quality Check** - Color-coded accuracy indicators

## Units Supported
- **N⋅m** (Newton-meters) - Primary aviation standard
- **lbf⋅in** (Pound-force inches) - Common US aviation
- **lbf⋅ft** (Pound-force feet) - Larger fasteners
- **kgf⋅m** (Kilogram-force meters) - International standard
- **oz⋅in** (Ounce-inches) - Small fasteners
- **dN⋅m** (Decinewton-meters) - Precision applications
- **N⋅cm** (Newton-centimeters) - Small components

## Advanced Features

### Tool Configuration
- **Tool Unit** - Match your torque wrench display units
- **Resolution** - Account for wrench graduation (0.1, 1, etc.)
- **Rounding Policy** - Nearest/Up/Down per your QA procedures

### OEM Rounding Mode
Industry-standard precision matching manufacturer specifications:
- **N⋅m**: 0.1 increments
- **lbf⋅in**: Whole numbers  
- **lbf⋅ft**: 0.5 increments
- **kgf⋅m**: 0.1 increments

### Quality Indicators
- 🟢 **On Target** (≤1% error) - Excellent setpoint accuracy
- 🟡 **Check Spec** (1-5% error) - Verify against approved data  
- 🔴 **Review Needed** (>5% error) - Significant deviation

## Professional Use Cases

- **Line Maintenance** - Quick range conversions and setpoint calculations
- **Heavy Maintenance** - Complex specification workflows
- **QA Documentation** - Copy setpoints with full traceability metadata
- **International Teams** - Bilingual interface with proper aviation terminology
- **Training** - Built-in help system and professional workflows
- **Field Work** - Offline capability and mobile optimization

## Technical Architecture

### Progressive Web App (PWA)
- **Offline Capability** - Works without internet after first load
- **Installation** - Add to home screen like native app
- **Service Worker** - Automatic caching and updates
- **Mobile Optimized** - Touch-friendly interface for shop floor use

### Development
- **Single Page Application** - Vanilla HTML/CSS/JavaScript
- **No Build Process** - Direct deployment capability  
- **Responsive Design** - Works on all screen sizes
- **Accessibility** - ARIA compliance and keyboard navigation
- **Local Storage** - Persistent preferences and settings

## Deployment

Deployed on Netlify with automatic GitHub integration:
- **Auto-deploy** - Pushes to main branch trigger deployment
- **HTTPS** - Secure connection for all users
- **CDN** - Global content delivery for fast loading
- **Custom Domain** - Professional URL structure

## Files Structure
```
├── index.html              # Main application
├── manifest.webmanifest    # PWA configuration  
├── sw.js                   # Service worker for offline
└── README.md              # Documentation
```

## License
© Ciphracore Systems LLC - All rights reserved

## Contact
**Enterprise Solutions** - Custom tools, white-label licensing, integration support  
**Technical Support** - Tool development, training integration, calculations  
**Partnership Inquiries** - MRO facilities, OEMs, training organizations  

📧 [ciphracore@protonmail.com](mailto:ciphracore@protonmail.com)

---
**Built by Aviation Professionals for Aviation Maintenance Excellence**
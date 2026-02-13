# 💕 Will You Be My Valentine? 💕

A romantic, interactive web experience to ask your special someone to be your Valentine. 

## ✨ Features

- 💫 **Smooth Animations**: Floating bears, hearts, confetti, and glowing effects
- 🎯 **Playful Interaction**: The "No" button runs away and "Yes" button grows (can't resist!)
- 🎨 **Beautiful UI/UX**: Romantic color palette, elegant typography, and responsive design
- 🎵 **Ambient Music**: Soft background music to set the mood
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🎊 **Success Page**: Animated celebration with hugging pandas/bears and share options
- 📤 **Easy Sharing**: Copy link and share on WhatsApp from the success page

## 🎮 How It Works

1. **index.html** - The main question page
   - Displays your Valentine question
   - Interactive Yes/No buttons
   - Confetti and sound effects on Yes
   - Redirects to success page after 0.9 seconds

2. **success.html** - The celebration page
   - Shows a beautiful love message
   - Animated hugging bears/pandas GIF
   - Copy link button (shares the page)
   - Share on WhatsApp button
   - Play/Pause music toggle

## 🚀 Quick Start (Local)

1. Download/clone all files to a folder
2. Open `index.html` in your web browser
3. Click "Yes!" to see the celebration 🎉

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Create a new repository named `username.github.io` (replace with your GitHub username)
3. Keep it public

### Step 2: Push Code to GitHub
```bash
cd /path/to/crush

git init
git add .
git commit -m "Add Valentine website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with `username.github.io` or any repo name

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### Step 4: Visit Your Site
Wait 1-2 minutes, then visit:
- `https://username.github.io` (if repo is `username.github.io`)
- OR `https://username.github.io/repo-name` (if different repo name)

## 📁 File Structure

```
crush/
├── index.html        # Main Valentine question page
├── success.html      # Celebration page
├── style.css         # Shared styles for both pages
├── script.js         # Main page interactivity
└── README.md         # This file
```

## 🎨 Customization

### Change the Message
Edit in `index.html`:
```html
<p class="question">
    Will you be my Valentine? 💝
</p>
```

### Change Success Message
Edit in `success.html`:
```html
<p class="big-message">My dearest, your "yes" lights up my world...</p>
```

### Change the GIF
Replace the `src` in `success.html`:
```html
<img id="hugGif" src="YOUR_GIF_URL" alt="panda hugging gif">
```

### Change Colors
Edit CSS variables in `style.css`:
```css
body {
    background: linear-gradient(135deg, #ffe5f0 0%, #ffc4d6 50%, #ff9fb8 100%);
}
```

## 🎵 Audio Features

- Soft ambient music plays automatically when page loads
- Click "Play Music" on success page to toggle music on/off
- Sound effect plays when you click "Yes!"

## 📱 Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari (mobile & desktop)
- ✅ Opera

## 💡 Tips

1. **For best experience**: Open on a desktop browser first to test
2. **Mobile**: Works great on phones, especially for sharing
3. **Custom domain**: You can point a custom domain to GitHub Pages (see GitHub docs)
4. **Animations**: Some older browsers may have reduced animations

## ❤️ Share Your Success!

After getting a "YES!", use the share buttons to:
- Copy the link and send it to them
- Share directly on WhatsApp

## 📝 License

Feel free to customize and use this for your special someone! 💕

---

Made with ❤️ for love and romance 🌹

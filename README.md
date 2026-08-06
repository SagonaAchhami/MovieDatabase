# Movie Database

A full-stack movie database web app with user authentication, reviews, watchlists, and an **AI-powered movie recommendation assistant** that analyzes your watchlist and suggests 3 personalized picks with reasoning.

## Live URL

- **Frontend:** https://moviedatabaseweb.netlify.app/
- **Backend API:** https://moviedatabase-g0i8.onrender.com

## Features

- Browse the movie catalog with live search
- Add / update / delete movies (admin)
- View movie details: poster, genre, year, director, synopsis, cast
- Leave ratings and reviews
- Build a personal watchlist
- **AI Recommendations:** one-click personalized movie picks with explanations

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, React Router, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **AI:** Groq API (GPT-based model) via the OpenAI SDK

## AI Recommendations

1. Open the **AI Recommend** page from the navigation bar, or use the
   **"Recommend Me Something"** button on the **Watchlist** page.
2. The assistant analyzes your watchlist and favorite genres.
3. Three recommended movies are displayed in a styled panel, each with the
   reason it matches your taste.

## Local Development

### Backend

```bash
cd backend
npm install
# copy .env.example to .env and fill in the values
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and connects to the deployed
backend by default.

## Screenshots

![Home Page](screenshots/home.png)
![AI Recommendations](screenshots/ai-recommendations.png)
![Watchlist](screenshots/watchlist.png)

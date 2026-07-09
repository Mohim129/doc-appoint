# DocAppoint – Doctor Appointment Manager

**Live Site:** [https://doc-appoint-umber.vercel.app](https://doc-appoint-umber.vercel.app)

![DocAppoint Preview](https://i.ibb.co.com/VFVhhPt/doc-appoint.png)

## About
DocAppoint is a modern, full‑stack web application that allows patients to browse doctors, view detailed profiles, and book appointments online. Built with **Next.js 16** (App Router) and **Tailwind CSS**, it offers a fast, responsive, and accessible experience. Authentication is handled by **Better Auth** using JWT tokens, supporting both email/password and Google OAuth. All data is stored in **MongoDB** and served by a dedicated **Express.js** backend.

---

## ✨ Features

1. **Doctor Discovery & Search**  
   Browse all available specialists in a responsive card grid. Use the real‑time search bar to filter doctors by name instantly. Each card shows a photo, rating, specialty, location, and fee, with a “View Details” button.

2. **Top‑Rated Doctors Section**  
   The home page dynamically fetches and displays the three highest‑rated doctors, helping patients quickly find trusted care. Ratings are calculated from real patient reviews stored in the database.

3. **Detailed Doctor Profiles**  
   Clicking on a doctor opens a dedicated profile page showing all relevant information: specialty, years of experience, hospital, location, consultation fee, availability slots, and a full description. A prominent “Book Appointment” button is provided.

4. **Seamless Appointment Booking**  
   A modal‑based form allows users to enter patient name, gender, phone, preferred date, and time. The booking is validated on the client and then saved to MongoDB with the logged‑in user’s email attached automatically. Success is shown via a toast notification.

5. **Personal Dashboard**  
   Authenticated users have a private dashboard with two tabs:
    - **My Bookings** – Lists all appointments made by the user. Each booking card includes doctor name, patient details, date, and time. Users can **update** (modify patient name, date, or time) via a pre‑filled modal, or **delete** the appointment. All changes reflect instantly without page reload.
    - **My Profile** – Displays the user’s name, email, and profile picture. An “Update Profile” button opens a modal to change the display name and photo URL; changes are persisted via Better Auth.

6. **Secure Authentication**  
   Full authentication flow with **email/password registration** (with client‑side password strength validation: minimum 6 characters, at least one uppercase and one lowercase) and **Google OAuth** sign‑in. Better Auth manages JWT‑based sessions stored in HTTP‑only cookies. Sessions persist across page reloads – logged‑in users are never redirected to the login page when refreshing private routes. Unauthenticated users are automatically redirected to the sign‑in page when trying to access protected areas (Dashboard, Booking).

7. **Profile Management**  
   Users can update their display name and profile image directly from the dashboard. The update is sent to Better Auth’s user management API, and the UI reflects changes immediately without a full page reload.

8. **Responsive & Themed UI**  
   The entire interface is built with a custom design system using **Tailwind CSS**. It features a consistent colour palette, typography scale, and spacing utilities. The layout is fully responsive for mobile, tablet, and desktop. A theme toggle (light/dark) is available in the header, with the preference persisted in localStorage.

9. **Toast Notifications**  
   All user interactions (booking, updating, deleting, login, registration, profile changes) produce polished toast messages using `react-hot-toast`. No default browser alerts are used.

10. **Custom 404 Page**  
    Any invalid route displays a friendly “Page Not Found” message with a link back to the home page, ensuring a smooth user experience even when lost.

---

## 🛠️ Tech Stack

| Layer             | Technology                                           |
|-------------------|------------------------------------------------------|
| Frontend          | Next.js 16 (App Router), React                       |
| Styling           | Tailwind CSS, custom design tokens                   |
| Authentication    | Better Auth (JWT + Google OAuth)                     |
| Icons             | Material Symbols, FontAwesome                        |
| Notifications     | React Hot Toast                                      |
| Backend (separate)| Express.js, MongoDB, JWT verification, cookie-parser |

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [https://github.com/Mohim129/doc-appoint.git](https://github.com/Mohim129/doc-appoint.git)
   cd doc-appoint

```

2. **Install dependencies**
```bash
npm install

```


3. **Set up environment variables**
Create a `.env` file in the root with the following keys:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
BETTER_AUTH_SECRET=your-random-secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://...
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

```


4. **Run the development server**
```bash
npm run dev

```


Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📦 Dependencies (Key)

* `next`, `react`, `react-dom`
* `tailwindcss`
* `better-auth`
* `react-hot-toast`

```

```

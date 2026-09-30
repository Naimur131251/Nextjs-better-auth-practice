# 🔐 Next.js Better Auth Practice

A modern **authentication practice project** built with **Next.js, Better Auth, MongoDB, TypeScript, HeroUI, and Tailwind CSS**.

This project was created to learn and practice implementing authentication, user sessions, sign-in, sign-up, sign-out, and authenticated UI with **Better Auth and MongoDB**.

---

## 🚀 Features

* 🔐 User authentication with **Better Auth**
* 📝 User **Sign Up**
* 🔑 User **Sign In**
* 🚪 User **Sign Out**
* 👤 Display authenticated user's information
* 🔄 Session management with `useSession()`
* 🧭 Dynamic Navbar based on authentication state
* 📱 Responsive navigation menu
* 🎨 Modern UI with **HeroUI**
* 💨 Styling with **Tailwind CSS**
* 🗄️ MongoDB database integration
* ⚡ Built with **Next.js App Router**
* 📘 Fully written in **TypeScript**

---

## 🛠️ Technologies Used

### Frontend

* **Next.js 16**
* **React 19**
* **TypeScript**

### Authentication

* **Better Auth**
* Session Management
* Sign In / Sign Up / Sign Out

### Database

* **MongoDB**
* **Better Auth MongoDB Adapter**

### UI & Styling

* **HeroUI**
* **Tailwind CSS 4**
* **Next Font**

### Development Tools

* **ESLint**
* **Git & GitHub**
* **npm**

---

## 📂 Project Structure

```text
nextjs-better-auth-practice/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── sign-in/
│   │   ├── sign-up/
│   │   ├── ...
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   └── ...
│   │
│   └── lib/
│       ├── auth.ts
│       ├── auth-client.ts
│       └── ...
│
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🔐 Authentication Flow

The project uses **Better Auth** to handle the authentication system.

```text
User
 │
 ├── Sign Up
 │      ↓
 │   Better Auth
 │      ↓
 │   MongoDB
 │
 ├── Sign In
 │      ↓
 │   Session Created
 │      ↓
 │   Authenticated UI
 │
 └── Sign Out
        ↓
     Session Removed
```

---

## 🧩 Authentication State

The authenticated user's session is accessed on the client using:

```tsx
const { data: session } = useSession();
```

The Navbar then checks whether a user is authenticated:

```tsx
session?.user
```

If a user is logged in, the UI displays the user's information and a **Sign Out** button.

If no user is authenticated, the UI displays **Login** and **Sign Up** options.

---

## 🗄️ MongoDB Integration

MongoDB is used as the database for the Better Auth authentication system.

The project uses:

```text
MongoDB
     ↓
@better-auth/mongo-adapter
     ↓
Better Auth
     ↓
Next.js Application
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Naimur131251/Nextjs-better-auth-practice.git
```

### 2. Navigate to the project

```bash
cd Nextjs-better-auth-practice
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
```

> Make sure your environment variable names match the ones used in your authentication configuration.

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build the application    |
| `npm start`     | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## 🎯 What I Learned

Through this project, I practiced:

* Setting up **Better Auth**
* Connecting Better Auth with **MongoDB**
* Creating Sign Up and Sign In flows
* Managing authentication sessions
* Using `useSession()` in client components
* Handling Sign Out
* Showing different UI based on authentication state
* Working with **Next.js App Router**
* Building responsive navigation
* Using **HeroUI components**
* Styling with **Tailwind CSS**
* Structuring a Next.js authentication project with TypeScript

---

## 📸 Project Preview

> Add screenshots of your Sign In, Sign Up, Dashboard, and authenticated Navbar here.

Example:

```text
screenshots/
├── sign-in.png
├── sign-up.png
├── dashboard.png
└── authenticated-navbar.png
```

---

## 🔮 Future Improvements

* 🔒 Protected routes
* 👤 User profile page
* ✏️ Update profile information
* 🔑 Password reset
* 📧 Email verification
* 🌐 Social authentication
* 🛡️ Role-based authentication
* 📊 User dashboard
* 🚀 Production deployment

---

## 👨‍💻 Author

**Naimur Rahman**

Frontend Developer in Progress 🚀

* GitHub: [Naimur131251](https://github.com/Naimur131251)

---

## ⭐ Support

If you find this project useful for learning authentication with Next.js and Better Auth, consider giving the repository a ⭐.

---

### 📌 Project Status

**Learning / Practice Project**

Built to practice modern authentication with:

`Next.js` · `Better Auth` · `MongoDB` · `TypeScript` · `HeroUI` · `Tailwind CSS`

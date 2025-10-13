# 🧾 Fullstack To-Do App — Requirements & Features

### Tech Stack

- **Framework:** Next.js (v15+ with App Router)
- **UI Library:** shadcn/ui + TailwindCSS V4
- **Forms:** React Hook Form + Zod validation
- **Auth:** NextAuth.js
- **Database:** MongoDB (via Mongoose)
- **HTTP Client:** Axios (wrapped with TanStack Query)
- **Data Fetching:** fetch (for SSR) + React Query (for client)
- **Language:** TypeScript
- **State Management:** TanStack Query cache + local component state
- **Deployment:** Vercel / Netlify
- **Version Control:** GitHub

---

## 🎯 Objective

Build a full-stack, authenticated To-Do application to practice **Next.js App Router**, **Server Actions**, **NextAuth**, **MongoDB**, and **modern React tooling**.

Users can register, log in, manage personal to-dos (CRUD) on daily basis, and view progress — all within a clean, responsive UI built using **shadcn/ui**.

---

## 🚀 Core Features

### 1. **Authentication (NextAuth)**

- Email/password based sign-in and registration
- Social login (optional: Google)
- Secure sessions using JWT
- Protect private routes (dashboard, API routes)
- Logout and session management

### 2. **User Dashboard**

- Personalized greeting (from session data)
- Overview of all tasks
- Filter: _All / Completed / Pending / Today_
- Progress bar (e.g., 70% tasks completed)
- Quick add-task input

### 3. **To-Do CRUD**

- **Create:** Add new task (title, description, optional due date, priority)
- **Read:** Fetch all tasks for the logged-in user
- **Update:** Edit task details or mark as completed
- **Delete:** Remove task with confirmation
- All CRUD operations via **Next.js API routes** or **server actions**
- Use **TanStack Query** for caching, optimistic updates, and refetching

### 4. **Validation**

- Form validation using **Zod + React Hook Form**
- Server-side validation using the same Zod schema (shared between client and server)

### 5. **UI/UX**

- Built using **shadcn/ui components** (Card, Button, Input, Modal, Toast)
- Responsive design (mobile → desktop)
- Dark/light mode toggle
- Loading states and skeletons for async data
- Toast notifications for success/error actions

### 6. **API Layer**

- RESTful API under `/api/todos`
  - `GET /api/todos` → Fetch all tasks
  - `POST /api/todos` → Create new task
  - `PATCH /api/todos/:id` → Update existing task
  - `DELETE /api/todos/:id` → Delete task
- Axios instance with interceptors (attach JWT/session token)

### 7. **Database (MongoDB)**

- User collection
- Todo collection (referencing user ID)
- Schema example:
  ```ts
  Todo {
    _id: ObjectId
    userId: ObjectId
    title: string
    description?: string
    completed: boolean
    priority: "low" | "medium" | "high"
    dueDate?: Date
    createdAt: Date
    updatedAt: Date
  }
  ```

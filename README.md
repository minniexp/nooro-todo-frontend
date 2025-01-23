# Todo List App - Frontend

This is the frontend application for the Todo List App, built with Next.js and styled using Tailwind CSS. It provides a user-friendly interface for managing tasks.

## Prerequisites

- **Node.js**: Version 14.x or later
- **npm**: Version 6.x or later, or **yarn**: Version 1.x or later

## Setup Instructions

1. **Clone the Repository**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/yourusername/todo-frontend.git
   cd todo-frontend
   ```

2. **Install Dependencies**

   Install the necessary dependencies using npm or yarn:

   Using npm:

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```plaintext
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

   Adjust the `NEXT_PUBLIC_API_URL` to point to your backend server URL if it's different.

4. **Run the Development Server**

   Start the development server to run the application locally:

   Using npm:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

5. **Build for Production**

   To build the application for production, execute:

   Using npm:

   ```bash
   npm run build
   ```

6. **Start the Production Server**

   After building, you can start the production server with:

   Using npm:

   ```bash
   npm start
   ```

## Project Structure

- **`src/app`**: Contains Next.js application-specific files, including pages and routing logic.
- **`src/components`**: Contains reusable React components such as `TaskCard`, `TaskForm`, `Button`, etc.
- **`src/utils`**: Contains utility functions and helpers.
- **`src/types`**: Contains TypeScript type definitions for tasks and other entities.

## Design Decisions
- **Routing**: Used app router to handle routing. Created individul pages for creating task and editing task.
- **Reusable Components**: Created reusable components for task cards, forms, and other UI elements.

## Features

- **Task Management**: Add, edit, delete, and toggle task completion.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Reusable Components**: Task cards, forms, and other UI elements.

## Assumptions
- **Character Limit for Task Items** : 240 characters
- **Task Order** : Tasks are ordered by updatedAt in descending order. Completed tasks remain in the current position.
- **Completed Task UI** : Completed tasks are displayed with a different color and a checkmark icon.
- **Color Property UI** : Color property is used to display the bullet color of the task.
 
## Future Work
- **Testing**: Add unit and integration tests to ensure code quality and reliability.
- **Encryption**: Add encryption to the id to protect the data.
- **Accessibility**: Improve accessibility features to ensure the application is usable by all users.

## Contact

For questions or support, please contact [minyyang35@gmail.com](mailto:minyyang35@gmail.com).

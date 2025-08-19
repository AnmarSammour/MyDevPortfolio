# Portfolio Website

## **Overview**
This project is a personal portfolio website built using React.js to showcase skills, projects, and provide a way to get in contact. It aims to be a professional interface that displays the developer's abilities and projects in an attractive and easy-to-navigate manner.

---

## **Live Preview**
You can view the live version of the portfolio at the following link:
**[https://anmarsammour.github.io/MyDevPortfolio/](https://anmarsammour.github.io/MyDevPortfolio/ )**

---

## **Project Structure**
### **Main Files and Folders**
1.  **`src/`**
    Contains all the source files for the application.
    *   **`components/`**: Contains individual components such as `Header`, `Hero`, `Skills`, `Projects`, `Contact`, `Footer`.
        *   **`Header/`**
            *   `Header.js`: Implements the fixed navigation bar.
            *   `Header.module.css`: Styles for the Header component.
        *   **`Hero/`**
            *   `Hero.js`: Implements the introductory hero section.
            *   `Hero.module.css`: Styles for the Hero component.
        *   **`TypeWriter/`**
            *   `TypeWriter.js`: A utility component for the typewriter text effect.
            *   `TypeWriter.module.css`: Styles for the TypeWriter component.
        *   **`Skills/`**
            *   `Skills.js`: Implements the skills section with a carousel.
            *   `Skills.module.css`: Styles for the Skills section.
        *   **`SkillCard/`**
            *   `SkillCard.js`: Represents an individual skill with a circular progress bar.
            *   `SkillCard.module.css`: Styles for the SkillCard component.
        *   **`Projects/`**
            *   `Projects.js`: Implements the project portfolio section with filtering tabs.
            *   `Projects.module.css`: Styles for the Projects section.
        *   **`ProjectCard/`**
            *   `ProjectCard.js`: Represents an individual project card.
            *   `ProjectCard.module.css`: Styles for the ProjectCard component.
        *   **`Contact/`**
            *   `Contact.js`: Implements the main contact section with the Formspree form.
            *   `Contact.module.css`: Styles for the Contact section.
        *   **`EmailForm/`**
            *   `EmailForm.js`: Implements the email subscription form section.
            *   `EmailForm.module.css`: Styles for the EmailForm section.
        *   **`Footer/`**
            *   `Footer.js`: Implements the footer with logo, social links, and copyright.
            *   `Footer.module.css`: Styles for the Footer component.
    *   **`assets/`**: Contains static resources.
        *   **`images/`**: Stores image files used throughout the site (e.g., `bg_hero.png`, `connect.png`, project images).
    *   `App.js`: The main application component that orchestrates the layout.
    *   `App.module.css`: Global or application-level styles.
    *   `index.js`: The entry point for the React application.

2.  **`public/`**
    Contains public files like `index.html` and potentially other static assets served directly.

3.  **`package.json`**
    Contains project dependencies (like `react`, `react-dom`, `@formspree/react`, `react-multi-carousel`, `react-circular-progressbar`) and run scripts (like `start`, `build`).

---

## **Website Sections**
### 1.  **Header**
*   Fixed navigation bar at the top of the page.
*   Contains the site logo and navigation links (Home, Skills, Projects).
*   Social media icons (LinkedIn, GitHub, Behance, WhatsApp).
*   "Let's Connect" button.
*   Responsive design that changes to a side menu on small screens.

### 2.  **Hero Section**
*   Introductory section displaying the developer's name "Anmar Sammour".
*   Typewriter effect (TypeWriter) displaying skills (Frontend Developer, Mobile App Developer, Web Developer).
*   Brief description.
*   "Let's Connect" link leading to the contact section.

### 3.  **Skills Section**
*   Displays skills using a rotating carousel.
*   Each skill is represented by a card containing the skill name and a circular progress bar showing proficiency percentage.

### 4.  **Projects Section**
*   Displays projects in a grid layout.
*   Tabs to filter projects (All Projects, Mobile Apps, Websites).
*   Each project is represented by a card with an image, project name, and brief description. Details appear on hover.

### 5.  **Contact Section**
*   Contact form allowing visitors to send messages (integrated with Formspree).
*   Form fields: First Name, Last Name, Email Address, Phone Number, Message.
*   Success message appears after successful form submission.
*   Additional section for email collection (UI only, no backend integration shown in code).

### 6.  **Footer**
*   Contains the site logo.
*   Direct links to social media pages.
*   Copyright information.

---

## **Technologies Used**
*   **React.js**: Main library for building the user interface.
*   **CSS Modules**: For styling components in an isolated and organized way.
*   **Font Awesome**: For using icons (via `@fortawesome/react-fontawesome`).
*   **Formspree**: For processing contact forms (`@formspree/react`).
*   **React Multi Carousel**: For displaying skills in a carousel (`react-multi-carousel`).
*   **React Circular Progressbar**: For visually displaying skill percentages (`react-circular-progressbar`).
*   **React Router DOM**: For potential routing capabilities (imported but primarily uses anchor links for navigation).

---

## **How to Run the Project**
1.  **Download the Project**:
    *   Download the project files or clone the repository.

2.  **Install Dependencies**:
    *   Open the terminal in the project folder and run the command:
        ```bash
        npm install
        ```

3.  **Run the Local Server**:
    *   After installing dependencies, run the command:
        ```bash
        npm start
        ```
    *   The site will automatically open in the browser at `http://localhost:3000`.

---

## **Conclusion**
This project demonstrates skills in developing interactive user interfaces using React.js, leveraging component-based architecture, state management, and external libraries for enhanced functionality like carousels and form handling. The use of CSS Modules ensures maintainable styling, and the responsive design ensures compatibility across various devices.
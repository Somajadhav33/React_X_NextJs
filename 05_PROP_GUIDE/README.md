# React Props 

Hey there! This little project is like a playground where we explore **how data moves around** in React using something called **Props** (short for "properties").  
Think of props as little gift boxes you pass from a parent component to its kids. We'll go from super simple stuff to some clever tricks – all with live examples you can click and play with!

## What You'll Learn 

1. **Basic Props** – Sending simple things like text, numbers, or functions  
2. **Children Props** – How to make flexible "container" components  
3. **Complex Props** – Passing whole objects or lists without going crazy  
4. **Refs** – Letting a parent "reach in" and touch the real HTML element inside a child  
5. **Context + Props** – Global theme (dark/light mode) without passing props through 10 levels  



---

## The Most Important Hooks We Use 

### 1. useState – Giving your component a memory 🧠
It’s literally just a way to remember something between clicks or re-renders.

```jsx
const [count, setCount] = useState(0);
```

- `count` → what it remembers right now
- `setCount` → the only correct way to change it

Good ✅  
```jsx
setCount(count + 1);
// or the pro way:
setCount(prev => prev + 1);
```

Bad ❌  
```jsx
count = 5; // Never do this! React will ignore you
```

### 2. createContext + useContext – The magic tunnel for data 🪄
Imagine you want every button in your app to know if the site is in dark mode.  
You don’t want to pass `theme="dark"` through 7 components… that’s annoying.

**Step 1**: Make the tunnel (usually in its own file)
```jsx
import { createContext } from 'react';
export const ThemeContext = createContext(null);
```

**Step 2**: Put stuff into the tunnel (ThemeProvider)
```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**Step 3**: Grab the stuff anywhere deep inside
```jsx
function CoolButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
```

Bonus: We made a tiny helper so it’s even cleaner:
```jsx
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Use useTheme inside ThemeProvider!");
  return context;
};
```

Now any component can just do `const { theme } = useTheme();` 

---

## How the App Actually Flows 

```mermaid
graph TD
    A[App.jsx] --> B[ThemeProvider<br>(wraps everything)]
    B --> C[BasicProps<br>Shows simple props and click counter]
    B --> D[ChildrenProps<br>Card that wraps children]
    B --> E[ComplexProps<br>Passes one user object]
    B --> F[RefProps<br>Parent uses forwardRef to access input]
    B --> G[ThemeToggler<br>Button switches light or dark mode]

```

Each section is completely separate so you can focus on one idea at a time.

---

## Quick Peek at Each Section

### 1. Basic Props
```jsx
<Button text="Click me!" color="blue" onClick={handleClick} />
```
The parent owns the count, the button just calls the function it received.

### 2. Children Props (Composition is king!)
```jsx
<Card>
  <img src="cat.jpg" />
  <h2>Mr Whiskers</h2>
  <p>Professional napper</p>
</Card>
```
`Card` doesn’t care what’s inside – it just renders `{children}`. Super flexible!

### 3. Complex Props
Instead of this mess:
```jsx
<UserCard name="Sara" age={28} email="..." avatar="..." hobbies={[...]} />
```
We do this:
```jsx
<UserCard user={userObject} />
```
Clean and readable.

### 4. Refs – When you really need the real DOM element
Parent wants to auto-focus an input when a modal opens:
```jsx
const inputRef = useRef();
<CustomInput ref={inputRef} />
inputRef.current.focus(); // boom!
```
`forwardRef` is the secret sauce that lets the ref "jump" into the child.

### 5. Theming with Context
A button gets its background from Context (global) but its label from props (local).  
Best of both worlds!

---

## Tech We’re Using (nothing scary)

- **Bun** or **npm** – super fast installer/runner
- **Vite** – instant dev server
- **React** – obviously 😄
- **Tailwind CSS** – pretty styles with almost no CSS files

---

## How to Run It Yourself (takes 20 seconds)

```bash
# 1. Get the code
git clone <this-repo>
cd react-props-guide

# 2. Install stuff
bun install
# or: npm install

# 3. Start playing!
bun run dev
# or: npm run dev

# Open http://localhost:5173 and enjoy!
```

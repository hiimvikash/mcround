# Knowledge Dump - 02.Pagination

<img width="848" alt="image" src="https://github.com/user-attachments/assets/1b1cb436-08bc-40d1-b195-de27144402f1" />
<img width="808" alt="image" src="https://github.com/user-attachments/assets/682d58fa-d310-426c-a32c-be1bffac4a1f" />
<img width="795" alt="image" src="https://github.com/user-attachments/assets/4027d6b5-a883-4643-9808-bbd9c10e962c" />

## Why this won't work ?

<img width="791" alt="image" src="https://github.com/user-attachments/assets/19de89f0-3bea-4b06-a34e-8445d9c126c1" />
<img width="825" alt="image" src="https://github.com/user-attachments/assets/96081c74-4252-46ea-b4fe-467bac49151d" />

# Why can't i use regular variable here in totalPage?
<img width="748" alt="image" src="https://github.com/user-attachments/assets/cbf79e41-3a57-4a60-9399-692d65def4df" />
<img width="872" alt="image" src="https://github.com/user-attachments/assets/1e8ea1ce-2bb2-48dc-9b41-dd5435030bf3" />

# 🔄 The Complete React Lifecycle: Render → Commit

---

## 🔹 Step 1: React Calls Your Component Function (Render Phase)

When your component runs:

```tsx
function App() {
  const [page, setPage] = useState(1);
  let totalPage;

  // JSX returned
  return (
    <div>
      <p>Page {page} of {totalPage}</p>
    </div>
  );
}
```

### What happens in this step:

- React invokes the component function.
- It creates a virtual DOM based on the returned JSX.
- React reads:
  - `page = 1` from state
  - `totalPage = undefined` because it’s just a local variable and hasn’t been assigned yet

So it builds:

```html
<p>Page 1 of undefined</p>
```

At this point, the UI is not yet on the real screen — it's just virtual DOM.

---

## 🔹 Step 2: React "Paints" or "Commits" to the Real DOM (Commit Phase)

Now React:

- Takes the virtual DOM it built.
- Compares it to the previous DOM (diffing).
- Applies changes to the real browser DOM (your screen).

So the browser actually shows:

```javascript
Page 1 of undefined
```

✅ **This is what we call:**

> React paints the UI to the screen.

📌 **Important:**

- This happens **before** any `useEffect` runs.
- Because `useEffect` runs **after** painting is done.

---

## 🔹 Step 3: `useEffect` Runs (Post-Render Side Effects)

After the paint:

React runs your `useEffect` hook:

```tsx
useEffect(() => {
  // fetch and calculate totalPage
  totalPage = Math.ceil(data.total / limit);
}, [skip]);
```

But:

- `totalPage` is not state → it's just a local variable.
- Changing it doesn’t trigger a re-render.
- The UI still says: `"Page 1 of undefined"`

---

## 🔁 If `totalPage` was in `useState` instead:

```tsx
const [totalPage, setTotalPage] = useState(0);
```

Then:

- After `useEffect` fetches total pages, `setTotalPage(...)` is called.
- React detects state change and re-runs the render phase.
- This time, `totalPage` has a real value → UI is rebuilt and repainted with:

```html
Page 1 of 10
```

---

## 📷 Analogy: Theater Play

- **Render Phase**: Actors read the script, prepare the scene.
- **Commit Phase**: Curtain opens → audience sees the scene (UI is painted).
- **useEffect**: A stage crew comes in quietly behind the curtain and changes something for the next scene.

> If the crew (your fetch + local variable) changes something without telling the actors (React), the audience never sees it.








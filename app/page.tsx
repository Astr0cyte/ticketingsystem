
function ToggleMode() {
  return (
    <button> 
      Light mode
    </button>
  );
}

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "32px" }}>Hello world</h1>
      <ToggleMode />

      <p style={{ fontSize: "18px", marginTop: "12px" }}>
        This is my landing page.
      </p>

      <a href="https://nextjs.org">
        Learn Next.js
      </a>
    </main>
  );
}
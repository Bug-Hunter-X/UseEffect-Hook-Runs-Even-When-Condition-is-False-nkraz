```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation
    if (count > 5) {
      console.log('Count is greater than 5');
    }
  }, [count > 5]); //Only run effect when count >5 changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
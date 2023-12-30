import Card from "./Card"


function App() {
  const user = {
    name: "Rohit",
    age: 21
  }
  return (
    <>
      <Card name="Hp Pavillion" user={user} />
      <Card name="Asus ViviBook" user={user} />
      <Card name="Dell" user={user} />
    </>
  )
}

export default App

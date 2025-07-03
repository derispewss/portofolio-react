

const App = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
        </header>
        <main className="p-6">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p>Welcome to my portfolio! Here you can find my projects and skills.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            {/* Add your project components here */}
          </section>
        </main>
      </div>
    </>
  )
}

export default App

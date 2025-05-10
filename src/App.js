import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

function App() {
  const notify = () => toast("Here is your toast.");

  return (
    <div className="App">
      <div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster />
      </div>

      <motion.div
        className="motion-div" 
        animate={{ x: 100, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to the login page</h1>
      </motion.div>

    </div>
  );
}

export default App;

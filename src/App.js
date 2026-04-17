import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import TextWorkflow from "./components/TextWorkflow";
import ImageWorkflow from "./components/ImageWorkflow";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [tab, setTab] = useState("text");

  return (
    <div className={`app-shell ${dark ? "dark" : ""}`}>
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />

      <Navbar toggleDark={() => setDark(!dark)} dark={dark} />

      <main className="page">
        <motion.section
          className="hero"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-badge">Pear Media AI Prototype</div>
          <h1>Prompt to Image, Image to Variations</h1>
          <p>
            A premium creative studio for prompt enhancement, image analysis,
            and elegant visual generation.
          </p>
        </motion.section>

        <motion.section
          className="tab-bar"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <button
            className={tab === "text" ? "tab active" : "tab"}
            onClick={() => setTab("text")}
          >
            Text Workflow
          </button>
          <button
            className={tab === "image" ? "tab active" : "tab"}
            onClick={() => setTab("image")}
          >
            Image Workflow
          </button>
        </motion.section>

        <AnimatePresence mode="wait">
          <motion.section
            key={tab}
            className="panel glass-card"
            initial={{ opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {tab === "text" ? <TextWorkflow /> : <ImageWorkflow />}
          </motion.section>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
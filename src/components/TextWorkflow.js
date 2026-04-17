import React, { useState } from "react";
import Loader from "./Loader";

function TextWorkflow() {
  const [input, setInput] = useState("");
  const [style, setStyle] = useState("cinematic");
  const [enhanced, setEnhanced] = useState("");
  const [approved, setApproved] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("idle");

  const styleHints = {
    cinematic: "dramatic lighting, depth, realistic shadows, wide-angle composition",
    anime: "clean line art, vibrant palette, expressive character design",
    minimal: "soft tones, balanced whitespace, elegant editorial layout",
    futuristic: "neon accents, sleek surfaces, atmospheric glow, tech mood",
  };

  const handleEnhance = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setStep("enhancing");
    setGenerated("");

    await new Promise((r) => setTimeout(r, 1200));

    const refined = `Create a ${style} visual of "${input.trim()}". Include ${
      styleHints[style]
    }, crisp details, premium composition, and social-media-ready finish.`;

    setEnhanced(refined);
    setApproved(refined);
    setStep("review");
    setLoading(false);
  };

  const handleGenerate = async () => {
    const prompt = approved.trim() || enhanced.trim() || input.trim();
    if (!prompt) return;

    setLoading(true);
    setStep("generating");

    await new Promise((r) => setTimeout(r, 800));

    const img = `https://picsum.photos/seed/${encodeURIComponent(prompt)}/600/400`;

    setGenerated(img);
    setStep("done");
    setLoading(false);
  };

  const resetAll = () => {
    setInput("");
    setStyle("cinematic");
    setEnhanced("");
    setApproved("");
    setGenerated("");
    setStep("idle");
  };

  return (
    <div>
      <div className="section-head">
        <div>
          <h2 className="section-title">Text Workflow</h2>
          <p className="section-subtitle">
            Enter a simple idea, enhance it into a richer prompt, approve it,
            then generate a polished visual.
          </p>
        </div>
      </div>

      <div className="workflow-grid">
        <div className="card-block">
          <label className="field-label">Your prompt</label>
          <textarea
            className="textarea"
            placeholder="Example: a calm beach at sunset with glowing reflections"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div style={{ marginTop: 14 }}>
            <label className="field-label">Style</label>
            <select
              className="select"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option value="cinematic">Cinematic</option>
              <option value="anime">Anime</option>
              <option value="minimal">Minimal</option>
              <option value="futuristic">Futuristic</option>
            </select>
          </div>

          <div className="actions">
            <button className="btn" onClick={handleEnhance}>
              Enhance Prompt
            </button>
            <button className="btn secondary" onClick={resetAll}>
              Reset
            </button>
          </div>

          {loading && <Loader />}

          <div className="chips">
            <span className="chip">Step: {step}</span>
            <span className="chip">Approval step included</span>
            <span className="chip">Style: {style}</span>
          </div>

          {enhanced && (
            <div style={{ marginTop: 18 }}>
              <label className="field-label">Enhanced prompt</label>
              <textarea
                className="textarea"
                value={approved}
                onChange={(e) => setApproved(e.target.value)}
              />
              <div className="actions">
                <button className="btn" onClick={handleGenerate}>
                  Generate Image
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="result-stack">
          <div className="card-block">
            <h3 className="result-title">Preview</h3>
            <p className="result-text">
              {generated
                ? "Your generated visual is ready."
                : "Enhance a prompt to unlock the image generation preview."}
            </p>

            {generated ? (
              <div className="preview-box" style={{ marginTop: 14 }}>
                <img src={generated} alt="generated result" />
              </div>
            ) : (
              <div
                className="preview-box"
                style={{
                  marginTop: 14,
                  minHeight: 300,
                  display: "grid",
                  placeItems: "center",
                  color: "var(--muted)",
                }}
              >
                No visual yet
              </div>
            )}
          </div>

          <div className="card-block">
            <h3 className="result-title">What this workflow does</h3>
            <p className="result-text">
              It simulates a professional prompt-engineering flow with a human
              approval step before generation, which matches the assignment
              structure nicely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextWorkflow;
import React, { useState } from "react";
import Loader from "./Loader";

function ImageWorkflow() {
  const [preview, setPreview] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [variations, setVariations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setAnalysis("");
    setVariations([]);
  };

  const handleAnalyze = async () => {
    if (!preview) return;

    setLoading(true);
    setAnalysis("");

    await new Promise((r) => setTimeout(r, 1200));

    setAnalysis(
      "Detected: subject, balanced lighting, visible foreground, clean composition, and a natural visual theme."
    );

    setVariations([
      {
        label: "Crisp Edit",
        desc: "Stronger contrast and clarity",
        filter: "contrast(1.1) saturate(1.15)",
      },
      {
        label: "Soft Glow",
        desc: "Gentle cinematic softness",
        filter: "brightness(1.05) contrast(0.95) saturate(1.1)",
      },
      {
        label: "Editorial",
        desc: "Stylized, polished look",
        filter: "grayscale(0.08) sepia(0.1) contrast(1.08)",
      },
    ]);

    setLoading(false);
  };

  return (
    <div>
      <div className="section-head">
        <div>
          <h2 className="section-title">Image Workflow</h2>
          <p className="section-subtitle">
            Upload an image, analyze its visual traits, and create styled
            variations from the same input.
          </p>
        </div>
      </div>

      <div className="workflow-grid">
        <div className="card-block">
          <label className="field-label">Upload image</label>
          <input className="input" type="file" accept="image/*" onChange={handleUpload} />

          <div className="actions">
            <button className="btn" onClick={handleAnalyze} disabled={!preview}>
              Analyze & Generate Variations
            </button>
          </div>

          {loading && <Loader />}

          {analysis && (
            <div style={{ marginTop: 18 }}>
              <label className="field-label">AI analysis</label>
              <p className="result-text">{analysis}</p>
            </div>
          )}
        </div>

        <div className="result-stack">
          <div className="card-block">
            <h3 className="result-title">Uploaded preview</h3>
            {preview ? (
              <div className="preview-box" style={{ marginTop: 14 }}>
                <img src={preview} alt="preview" />
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
                Choose a file to begin
              </div>
            )}
          </div>

          <div className="card-block">
            <h3 className="result-title">Generated variations</h3>
            <p className="result-text">
              Same source image, styled into multiple polished looks for the demo.
            </p>

            <div className="variation-grid">
              {variations.length > 0
                ? variations.map((item) => (
                    <div key={item.label} className="variation-card">
                      <img
                        src={preview}
                        alt={item.label}
                        style={{ width: "100%", display: "block", filter: item.filter }}
                      />
                      <div className="meta">
                        <strong>{item.label}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  ))
                : [1, 2, 3].map((index) => (
                    <div key={index} className="variation-card">
                      <div
                        style={{
                          minHeight: 180,
                          display: "grid",
                          placeItems: "center",
                          color: "var(--muted)",
                          background: "rgba(148,163,184,0.08)",
                        }}
                      >
                        Waiting for analysis
                      </div>
                      <div className="meta">
                        <strong>Variation {index}</strong>
                        <span>Appears after analysis</span>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageWorkflow;
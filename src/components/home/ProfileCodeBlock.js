import React from "react";
import "./ProfileCodeBlock.css";

const ProfileCodeBlock = () => {
  return (
    <div className="code-container">
      {/* Fake Window Buttons */}
      <div className="window-buttons">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>

      {/* Animated Code Block */}
      <pre className="code-block animated-text">
        <span className="comment">// Meet the coder object 👨‍💻</span>{"\n"}
        <span className="keyword">const</span> coder <span className="symbol">=</span> <span className="symbol">{"{"}</span>{"\n"}
        {"  "}name<span className="symbol">:</span> <span className="string">'Romin Gandhi'</span>,{"\n"}
        {"  "}programming_Languages<span className="symbol">:</span> <span className="symbol">[</span>
        <span className="skill">'Python'</span>,{" "}
        <span className="skill">'Java'</span>,{" "}
        <span className="skill">'C/C++'</span>,{" "}
        <span className="skill">'MATLAB'</span>,{" "}
        <span className="skill">'MySQL'</span>,{" "}
        <span className="skill">'HTML/CSS'</span>,{" "}
        <span className="skill">'Javascript'</span>,{" "}
        <span className="skill">'x86 Assembly'</span>,{" "}
        <span className="skill">'VBA'</span>
        <span className="symbol">]</span>,{"\n"}

        {"  "}frameworks_Libraries<span className="symbol">:</span> <span className="symbol">[</span>
        <span className="framework">'React'</span>,{" "}
        <span className="framework">'Node.js'</span>,{" "}
        <span className="framework">'Django'</span>,{" "}
        <span className="framework">'Flask'</span>,{" "}
        <span className="framework">'Pandas'</span>,{" "}
        <span className="framework">'NumPy'</span>,{" "}
        <span className="framework">'Bootstrap'</span>
        <span className="symbol">]</span>,{"\n"}

        {"  "}curious<span className="symbol">:</span> <span className="boolean">true</span>,{"\n"}
        {"  "}quickLearner<span className="symbol">:</span> <span className="boolean">true</span>,{"\n"}
        {"  "}problemSolver<span className="symbol">:</span> <span className="boolean">true</span>,{"\n"}
        {"  "}hireable<span className="symbol">:</span> <span className="keyword">function</span>(){" "}
        <span className="symbol">{"{"}</span>{"\n"}
        {"    "}<span className="keyword">return</span> <span className="symbol">(</span>{"\n"}
        {"      "}<span className="dot">this</span>.hardWorker <span className="symbol">&amp;&amp;</span>{" "}
        <span className="dot">this</span>.problemSolver <span className="symbol">&amp;&amp;</span>{" "}
        <span className="dot">this</span>.skills.length <span className="symbol">&gt;=</span>{" "}
        <span className="boolean">5</span>{"\n"}
        {"    "}<span className="symbol">)</span>;{"\n"}
        {"  "}<span className="symbol">{"}"}</span>{"\n"}
        <span className="symbol">{"}"}</span>;
      </pre>
    </div>
  );
};

export default ProfileCodeBlock;

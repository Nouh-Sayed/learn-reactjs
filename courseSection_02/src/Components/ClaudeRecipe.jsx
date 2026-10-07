import React from "react";
import ReactMarkdown from "react-markdown";

const ClaudeRecipe = ({ recipe }) => {
  return (
    <section className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold text-amber-700 mb-8">
        AI Recipe
      </h1>

      <div className="prose prose-lg max-w-none">
        <h1>Nouhun Recommendation</h1>
        <ReactMarkdown>
    
          {recipe}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default ClaudeRecipe;
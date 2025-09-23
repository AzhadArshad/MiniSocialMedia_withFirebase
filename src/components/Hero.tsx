import React from "react";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the most Boring Social Media Website</h1>
        <p>
          Share your thoughts, connect with people, and Ignore a community built
          for creators.
        </p>
        <div className="hero-actions">
          <a href="/createpost" className="btn-primary">
            Create Post
          </a>
        </div>
      </div>
    </section>
  );
};

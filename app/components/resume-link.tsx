import React from "react";

const ResumeLink = ({ url }) => {
  return (
    <div className="mt-10 text-center">
      <p className="prose prose-neutral dark:prose-invert">
        Want to know more?{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-white font-medium tracking-tight !font-medium underline"
        >
          View my resume
        </a>
      </p>
    </div>
  );
};

export default ResumeLink;

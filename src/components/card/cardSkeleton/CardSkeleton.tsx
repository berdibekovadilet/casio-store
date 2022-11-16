import React from "react";
import ContentLoader from "react-content-loader";

export const CardSkeleton = () => {
  return (
    <>
      <ContentLoader
        speed={2}
        width={300}
        height={500}
        viewBox="0 0 300 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="8" y="8" rx="20" ry="20" width="290" height="290" />
        <rect x="8" y="310" rx="8" ry="8" width="290" height="40" />
        <rect x="8" y="360" rx="8" ry="8" width="290" height="30" />
        <rect x="8" y="400" rx="8" ry="8" width="290" height="50" />
      </ContentLoader>
    </>
  );
};

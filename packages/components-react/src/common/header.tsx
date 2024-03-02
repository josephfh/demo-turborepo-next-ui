import { SiteLogo } from "@repo/logos/react";

export const Header = () => {
  return (
    <h1>
      <SiteLogo />
      <span className="sr-only">UI Library demo</span>
    </h1>
  );
};

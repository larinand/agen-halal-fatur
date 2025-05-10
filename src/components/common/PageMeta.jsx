// import { HelmetProvider, Helmet } from "react-helmet-async";

// const PageMeta = ({ title, description }) => (
//   <Helmet>
//     <title>{title}</title>
//     <meta name="description" content={description} />
//   </Helmet>
// );
// export const AppWrapper = ({ children }) => (
//   <HelmetProvider>{children}</HelmetProvider>
// );
// export default PageMeta;

import { Helmet } from "react-helmet";

const PageMeta = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);
export const AppWrapper = ({ children }) => <>{children}</>;
export default PageMeta;

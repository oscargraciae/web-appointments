import { NextPageContext } from "next";

const Custom404 = () => {
  return (
    <p>
      404
    </p>
  );
};

// Custom404.getInitialProps = ({ res, err }: NextPageContext) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };

export default Custom404;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Custom404 = function () {
    return (<p>
      404
    </p>);
};
// Custom404.getInitialProps = ({ res, err }: NextPageContext) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };
exports.default = Custom404;

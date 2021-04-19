const errorControl = {
  badRequest: () => ({
    statusCode: 400,
    message: "Bad Request",
  }),
  NotFound: () => ({
    statusCode: 404,
    message: "Not Found",
  }),
  serverError: () => ({
    statusCode: 500,
  }),
};

export default errorControl;

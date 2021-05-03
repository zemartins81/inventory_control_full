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
    message: "Internal Server Error",
  }),
  dataNotSaved: () => ({
    statusCode: 500,
    message: "Data not saved!",
  }),
  noContent: () => ({
    statusCode: 204,
    message: "Product Not Found!",
  }),
};

export default errorControl;

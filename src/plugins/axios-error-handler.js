function axiosErrorHandler(promise, errorHandler) {
  return promise.catch(err => {
    if (!err.response) {
      return err
    }

    errorHandler({
      statusCode: err.response.status,
      message: err.response.data.message,
    })

    return err
  })
}

export default (ctx, inject) => {
  inject('axiosErrorHandler', axiosErrorHandler)
}

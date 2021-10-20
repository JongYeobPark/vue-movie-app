exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'JongYeob',
      age: 30,
      email: 'pjyub1297@gmail.com'
    })
  }
}
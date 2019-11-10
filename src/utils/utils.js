//拼接GET url
export const splitUrl = (url,options) => {
  if(Object.keys(options).length === 0){
    return url
  }
  let newUrl = url
  const paramsArr = []
  Object.keys(options).map(key => paramsArr.push(`${key}=${options[key]}`) )
  if (/\?/.test(newUrl) === false) {
    newUrl = `${newUrl}?${paramsArr.join('&')}`;
  } else {
    newUrl += `&${paramsArr.join('&')}`;
  }
  return newUrl
}
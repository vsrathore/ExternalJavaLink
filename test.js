function webconnect(urlX){
  var response = UrlFetchApp.fetch(urlX, {muteHttpExceptions: true})
  if(response.getResponseCode()==200){ return response.getContentText() }
  else{ return false }
}

function spliter(data, start, end){
  var tempData = data.split(start)[1]
  return tempData.split(end)[0]
}

//Test comment

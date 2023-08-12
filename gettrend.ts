const twitter = require('twitter');
const fs = require('fs');
 
const client = new twitter({
    appkey: "r62aQcREqKuLOeDcBHH0My7pd",
    appSecret: "sxdlbBXBUvsvUOVBTzyrQa2LKF9GBmFWQGVgk0Y9ZPuscWX8u7",
    accessToken: "1687042801551495168-pPlLl0MoCx5VOXlQvgYEn4bJbmrMhp",
    accessSecret: "yy3C7KZIGjcMswLo67JHXnoJGD0mwD7wJ0RXfDwizto2Z",
});
 
const params = {
  id: 23424856
};
 
client.get('trends/place', params).then(function(res){
  var json = JSON.stringify(res,undefined,2);
  console.log(json);
  fs.writeFileSync("trends.json", json);
}).catch(function(err){
  console.log(err);
});
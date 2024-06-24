var http = require('http');
const { DateTime } = require('luxon');

//create a server object:
http.createServer(function (req, res) {
  const response = 'Hello World from server NodeJS!';
  
  res.write(response); //write a response to the client
  res.end(); //end the response

  // Lấy địa chỉ IP của client
  const clientIP = req.connection.remoteAddress;

  // Lấy ngày giờ hiện tại khi xử lý yêu cầu
  const now = DateTime.now().setZone('Asia/Ho_Chi_Minh'); // Đặt múi giờ cho hệ thống là GMT+7

  // Định dạng ngày giờ theo định dạng "dd-MM-yyyy HH:mm:ss"
  const datetime = now.toFormat('dd-MM-yyyy HH:mm:ss');

  // Ghi logs
  console.log(`Request received from IP: ${clientIP}`);
  console.log(`Request time: ${datetime}`);
  console.log(`Response body: ${response}`);
  console.log('------------------------------------------------------');
  
}).listen(8080); //the server object listens on port 8080
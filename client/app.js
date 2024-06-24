const http = require('http')
const { DateTime } = require('luxon');

http.get({
  hostname: '192.168.234.54',
  port: 8080,
  path: '/',
  agent: false,  // Create a new agent just for this one request
}, (res) => {
  // Do stuff with response
  var body = '';
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('end', () => {

    // Lấy địa chỉ IP của server
    const serverIP = res.socket.remoteAddress;
    console.log("Server IP:", serverIP);

    console.log("Body:", body);

    // Lấy ngày giờ hiện tại khi xử lý yêu cầu
    const now = DateTime.now().setZone('Asia/Ho_Chi_Minh');
    
    // Định dạng ngày giờ theo định dạng "dd-MM-yyyy HH:mm:ss"
    const formatter = 'dd-MM-yyyy HH:mm:ss';
    const datetime = now.toFormat(formatter);

    // In ra ngày giờ và thông tin phản hồi
    console.log("Time:", datetime);
    console.log("------------------------------------------------------");
  });
});
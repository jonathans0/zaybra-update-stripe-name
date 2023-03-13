var axios = require('axios');
var qs = require('qs');
exports.main = async (event, callback) => {


  let cusName = event.inputFields['stripe_name'];
  const cusID = event.inputFields['customer_id'];

  
  const sk = process.env['sk'];
  
  console.log(cusName)
  console.log(cusID)

  
  
  var data = qs.stringify({
      'name': `${cusName}`
    });
    var config = {
      method: 'post',
      url: `https://api.stripe.com/v1/customers/${cusID}`,
      headers: { 
        'Authorization': `Bearer ${sk}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
  

  try{
   let updateCus = await axios(config)
   
   console.log(updateCus.data)
   }
  catch(e){
    console.log("ERROR:");
   console.log(e.response.data.error.message);
  }
  
  callback({
    outputFields: {

    }
  });
}

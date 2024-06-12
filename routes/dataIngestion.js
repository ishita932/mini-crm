const express = require('express')
const router = express.Router()
const Customer =  require('../models/customer')
  const Order =  require('../models/order')

   router.post('/customer', async (req, res) => {
    console.log(req.body);
      const customer = new Customer({
        name: req.body.name,
        email:req.body.email,
        phone: req.body.phone,
      })
      try {
        const newcustomer = await customer.save()
       return res.status(201).json(newcustomer)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
    })

    router.post('/order', async (req, res) => {
      console.log(req.body);
        const order = new Order({
          customer_id : req.body.customer_id,
          amount :req.body.amount,
         
        })
        try {
          const neworder = await order.save()
         return res.status(201).json(neworder)
        } catch (err) {
          res.status(400).json({ message: err.message })
        }
      })
  


// Creating one
// router.post('/', async (req, res) => {
//   const subscriber = new Subscriber({
//     name: req.body.name,
//     subscribedToChannel: req.body.subscribedToChannel
//   })
//   try {
//     const newSubscriber = await subscriber.save()
//     res.status(201).json(newSubscriber)
//   } catch (err) {
//     res.status(400).json({ message: err.message })
//   }
// })






module.exports = router
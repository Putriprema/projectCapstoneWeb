// tempat setting midtrans .backend yang dipake metode post

import express from 'express';
import midtransClient from "midtrans-client"


const router = express.Router()

// disini endpoint
router.post('/process-transaction', (req, res) => {
    try {

        const snap = new midtransClient.Snap({
            isProduction: false, 
            serverKey: "SB-Mid-server-EQiCt4GGIHs5q7CwNrRUK5xU",
            clientKey: "SB-Mid-client-kuKtTg-Qh-z-zA1a",
        })
        
        // harus sama kyk yg di Payment.jsx
        const parameter = {
            transaction_details: {
                order_id: req.body.order_id,
                gross_amount: req.body.total,
            },
            customer_details: {
                first_name: req.body.name
            }
        }

        snap.createTransaction(parameter).then((transaction)=>{
            // transaction token
            const dataPayment = {
                response: JSON.stringify(transaction)
            }


            const token = transaction.token

        res.status(200).json({message: "berhasil", dataPayment, token: token})
        })

        

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// name: name,
// order_id: order_id,
// total: total
// }


export default router
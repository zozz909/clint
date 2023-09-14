import React, { useContext , useState} from 'react';
// icons
// context
import { CartContext } from '../context/CartContext';
// components
// stripe
import { request } from '../request';
import "../index.css"

import {  useNavigate } from 'react-router-dom';




const Cart = () => {
  const {  cart, total, clearCart,discontt  } = useContext(CartContext);




  const [name, setname] = useState("")
  const [name2, setname2] = useState("")
  const [phone, setPhone] = useState("")
  const [itemsAmount, setItemsAmount] = useState(0);
  const [countryi, setCountri] = useState("")
  const [country, setCountr] = useState("")
  const [check1,setCheck1] = useState(false)


  const Swal = require('sweetalert2')

  const navigate = useNavigate();
  


  const handleOrderItems=async(orderId)=>{
    console.log(orderId)
    try{
        for(let item of cart){
            await request.post('/order-items',{
            data:{
                order:orderId,
                product:item.id,
                qunt:item.amount,
            }
        })

        }
        
          clearCart()
          Swal.fire(
            'تم طلب بنجاح!',
            'سنتواصل معك قريبا!',
            'success'
          )
          navigate("/Home")

        
       
       
        
        
    }catch{
        console.log("post order items error")
    }
}
const handlePayment = async () => {
  

  if (name .length <=2 ){
    Swal.fire({
      icon: 'error',
      title: 'عذرا...',
      text: 'يجب الاسم اكثر من ثلاث احرف!',
      footer: '<a href="Home">Why do I have this issue?</a>'
    })
  }
  else if (name2 .length <=2 ){
    Swal.fire({
      icon: 'error',
      title: 'عذرا...',
      text: 'يجب الاسم اكثر من ثلاث احرف!',
      footer: '<a href="Home">Why do I have this issue?</a>'
    })
  }
  else if(phone . length != 9){
    Swal.fire({
      icon: 'error',
      title: 'عذرا...',
      text: 'رقم الجوال خاطئ!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
  else if(countryi =="اختيار"){
    Swal.fire({
      icon: 'error',
      title: 'عذرا...',
      text: 'يجب اختيار المنطقه!',
      footer: '<a href="">Why do I have this issue?</a>'
    })

  }
  else if(country =="اختيار"){
    Swal.fire({
      icon: 'error',
      title: 'عذرا...',
      text: 'يجب اختيار الحي!',
      footer: '<a href="">Why do I have this issue?</a>'
    })

  }

  else if(check1 == false){
    Swal.fire({
      icon: 'error',
      title: 'عذرا...',
      text: 'يجب اختيار طريقه الاستلام!',
      footer: '<a href="">Why do I have this issue?</a>'
    })

  }
  
 
 
 
  

  else{
    try {
      // const stripe = await stripePromise;
      const order = await request.post('/orders',{
          data:{
              name:name,
              name2:name2,
              state:'On Demand',
              iphon:phone,
              totalPric:total,
              countryi:countryi,
              country:country,
              check1:check1,
          }
          
      })
      await handleOrderItems(order.data.data.id);
      

    } catch (error) {
      // console.log(error);
    }
  }
   
    
    };
  



 

 

  return (
    
    <div className="maincontainer">
    
     <div class="container space-y-14">
       <div class="py-5 text-center">
         
       </div>
       <div class="row">
       
         <div class="col-md-8 order-md-1">
           <h4 class="mb-3">Billing address</h4>
           <form  class="needs-validation" novalidate>
             <div  class="row">
               <div  class="col-md-6 mb-3 text-center text-[#403D39] font-black text-xl ">
                 <label  for="firstName ">الاسم الأول</label>
                 <input    name="name" className="form-control  text-center " placeholder="الاسم الاول" required onChange={e=>setname(e.target.value)}/>
                 
               </div>
               <div class="col-md-6 mb-3 text-center text-[#403D39] font-black text-xl">
                 <label for="lastName">الاسم الاخير</label>
                 <input    name="name" className="form-control  text-center " placeholder="الاسم الاخير" required onChange={e=>setname2(e.target.value)}/>
                 <div class="invalid-feedback">
                   Valid last name is required.
                 </div>
               </div>
             </div>
            
             <div class="mb-3  text-center text-[#403D39] font-black text-xl">
               <label for="email">رقم الجوال </label>
               <input  type="number" class="form-control text-center" placeholder="+966 5xxxxxxxx" onChange={e=>setPhone(e.target.value)} id='iphon'/>
               <div class="invalid-feedback">
                 Please enter a valid email address for shipping updates.
               </div>

             </div>
             <div class="row text-[#403D39] font-black text-xl">
               <div class="col-md-5 mb-3 text-center">
                 <label for="country">المنطقه</label>
                 <select style={{ color: "white" , background :" rgb(29,31,35)" }} name="country" class=" custom-select d-block w-100 h-9 text-right form-control"onChange={e=>setCountri(e.target.value)}>
                                          
                  <option style={{ color: "white" , background :" rgb(0,0,0)" }} selected="اختيار" value="اختيار" >اختيار</option>
                  <option style={{ color: "white" , background :" rgb(0,0,0)" }} value="الرياض" >الرياض</option>


                 </select>
                 
               </div>
               <div class="col-md-4 mb-3 text-center">
                 <label for="state">الحي</label>
                 <select style={{ color: "white" , background :" rgb(29,31,35)" }} name="countr" class="custom-select d-block w-100 h-9 text-right form-control" id="state" required onChange={e=>setCountr(e.target.value)}>
                 <option style={{ color: "white" , background :" rgb(0,0,0)" }} selected="اختيار" value="اختيار" >اختيار</option>
                 <option style={{ color: "white" , background :" rgb(0,0,0)" }} value="جراديه" >جراديه</option>
                 <option style={{ color: "white" , background :" rgb(0,0,0)" }} value="الخليج">الخليج</option>
                 </select>
                
               </div>
               
             </div>
             
             
             <hr class="mb-4"  />
             <h4 class="mb-3 text-[#403D39] font-black text-xl">كيف تحب تستلم طلبك</h4>
             <div class="d-block my-3">
               <div class="custom-control custom-radio text-[#403D39] font-black text-sm">
                 <input id="check1" name="paymentMethod" type="radio" class="custom-control-input"  value="الاستلام من الفرع" onChange={e=>setCheck1(e.target.value)} required />
                 <label class="custom-control-label" for="check1">: الاستلام من الفرع</label>
                 <div class="custom-control custom-radio">
                 <input id="check2" name="paymentMethod" type="radio" class="custom-control-input" value="الدفع عند الاستلام" onChange={e=>setCheck1(e.target.value)} required />
                 <label class="custom-control-label" for="check2">: الدفع عند الاستلام</label>
               </div>

               </div>
            
              
               
            
               
             </div>
             <div class="row">
               
             
             </div>
             <hr class="mb-4" />

             <form class="card p-0">
             <div class="input-group">
               <input style={{ color: "white" }} type="text" class="form-control" placeholder="Promo code"/>
               <div class="input-group-append">
                 <button type="button" class="btn btn-secondary btn btn-accent ">COD</button>
               </div>
             </div>
           </form>





           </form>
           
           <div>
           {cart.length >= 1 && (
        <div className='px-6 py-10 flex flex-col'>
          {/* subtotal */}
          <div className='flex justify-between text-lg'>
            <div>Subtotal</div>
            <div>SAR {total}</div>
          </div>
          {/*Discont*/}
          <div className='flex justify-between text-lg'>
            <div className='text-[#EB5E28]'>Discont</div>
            <div className='text-[#EB5E28] line-through'>SAR {discontt}</div>
          </div>
          {/* total */}
          <div className='flex justify-between text-2xl text-[#EB5E28]'>
            <div>Total</div>
            
            <div>SAR {total}</div>
            
          </div>
          
        </div>
      )}
      

      {/* buttons */}
      <div className='px-6'>
        {cart.length >= 1 ? (
          <div className='flex justify-between gap-x-4'>
            
         
            <button
              onClick={handlePayment} 
              className='btn btn-accent  flex-1 px-2 gap-x-2'
            >
              PAY SAR {total}
            </button>
            
          </div>
        ) : (
          <div >
          </div>
          
        )}
      </div>
      
    </div>
         </div>
       </div>
       <footer class="my-5 pt-5 text-muted text-center text-small">
         <p class="mb-1">&copy; عيون البحريه</p>
         <ul class="list-inline">
           <li class="list-inline-item"><a href="#">Privacy</a></li>
           <li class="list-inline-item"><a href="#">Terms</a></li>
           <li class="list-inline-item"><a href="#">Support</a></li>
         </ul>
       </footer>
     </div>
  
   </div>
    
  );
};

export default Cart;

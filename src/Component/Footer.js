 
 // import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";

function Footer() {
    return (
 <footer className="page-footer font-small blue pt-4 footer1">
 <div className="container-fluid text-center text-md-left">
   <div className="row">
     <div className="col-md-6 mt-md-0 mt-3">
       <h5 className="text-uppercase">ABOUT US </h5>
       <p>
       My Story :- I decided one day that I would open a store and sell original products
      at a price much lower than the market and bring them from abroad and help customers.
       </p>
     </div>
     <hr className="clearfix w-100 d-md-none pb-0" />
     <div className="col-md-3 mb-md-0 mb-3">
       <h5 className="text-uppercase">Contact Us</h5>
       <ul className="list-unstyled">
         <li>
           <a href="#!">Email address : Kholodhamza875@gmail.com</a>
         </li>
         <li>
           <a href="#!"> Almadar Phone Number : 00218915214045</a>
         </li>
         <li>
           <a href="#!"> Libyan Phone Number  : 00218925214045</a>
         </li>
         <li>
           <a href="#!">Address : Tripoli/Libya</a>
         </li>
       </ul>
     </div>

     <div className="col-md-3 mb-md-0 mb-3">
       <h5 className="text-uppercase">Links</h5>
       <ul className="list-unstyled">
         <li>
           <a href="#!">
             <i class="fa-brands fa-linkedin"></i>
           </a>
         </li>
         <li>
           <i class="fa-brands fa-instagram-square"></i>
         </li>
         <li>
           <a href="#!">
             <i class="fa-brands fa-twitter"></i>
           </a>
         </li>
         <li>
           <a href="#!">
             <i class="fa-brands fa-facebook"></i>
           </a>
         </li>
       </ul>
     </div>
   </div>
 </div>
</footer>
  );
}

export default Footer;
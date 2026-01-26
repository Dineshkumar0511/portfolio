export default function Footer() {
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  };
  return (

    <>
 <div className="bottomcontainer">
      <div className="foot">
        <div className="row align-items-center flex-nowrap text-nowrap p-0">
          
          <div className="col-3 col-md-3 col-sm-3 phone-footer ">
            <a href="tel:9866144861" className="viewall_keys1">
              Call <span className="mob">: +91 9392276970</span>
            </a>
          </div>

          <div className="col-6 col-md-6 col-sm-6 text-center soc-icons mx-1">
            <div className="icons d-flex justify-content-center gap-2">
              <a href="https://www.linkedin.com/in/dineshkumarpappala" target="_blank" className="social rounded-circle m-1">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Dineshkumar0511" target="_blank" className="social rounded-circle m-1">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://wa.me/919392276970" target="_blank" className="social rounded-circle m-1">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/di_n_es_h_/" target="_blank" className="social rounded-circle m-1">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          
          <div className="col-2 col-md-2 col-sm-2 p-0 text-end enquiry">
            <a className="viewall_keys1" href="#contact">Enquiry</a>
          </div>

          
          <div className='arrow col-1 col-md-1 col-sm-1'>
            <button id="btn2"><h3 className='fa fa-arrow-circle-up m-0' onClick={scrollToTop}></h3></button>
          </div>
                
        </div>

      </div>
      
    </div>

</>
   
    
    
  );
}
